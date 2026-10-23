import * as THREE from '../vendor/three.module.min.js';

// A segmented torus knot: one continuous form that can separate into its parts.
export function initSculpture(motion) {
 const canvas = document.getElementById('sculpture-canvas');
 const stage = document.getElementById('sculpture-stage');
 const button = document.getElementById('sculpture-action');
 if (!canvas || !stage) return;
 const context = canvas.getContext('webgl2', { alpha:true, antialias:true });
 if (!context) { stage.classList.add('scene-fallback'); button.hidden = true; return; }
 const renderer = new THREE.WebGLRenderer({canvas,context,alpha:true,antialias:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
 renderer.setClearColor(0,0); renderer.toneMapping=THREE.ACESFilmicToneMapping;
 const scene=new THREE.Scene();
 const camera=new THREE.PerspectiveCamera(38,1,.1,50);camera.position.z=8.6;
 const environmentCanvas=document.createElement('canvas');environmentCanvas.width=512;environmentCanvas.height=256;
 const ctx=environmentCanvas.getContext('2d');
 ctx.fillStyle='#171717';ctx.fillRect(0,0,512,256);
 const gradient=ctx.createLinearGradient(0,0,0,256);gradient.addColorStop(0,'#ffffff');gradient.addColorStop(.32,'#9a9a9a');gradient.addColorStop(.49,'#151515');gradient.addColorStop(.52,'#eee9df');gradient.addColorStop(.7,'#353535');gradient.addColorStop(1,'#ffffff');ctx.fillStyle=gradient;ctx.fillRect(0,0,512,256);
 ctx.fillStyle='#fff';ctx.fillRect(50,0,35,256);ctx.fillRect(290,0,70,180);
 const env=new THREE.CanvasTexture(environmentCanvas);env.mapping=THREE.EquirectangularReflectionMapping;
 const pmrem=new THREE.PMREMGenerator(renderer);const environment=pmrem.fromEquirectangular(env);scene.environment=environment.texture;env.dispose();pmrem.dispose();
 scene.add(new THREE.HemisphereLight(0xffffff,0x383838,.6));
 const key=new THREE.DirectionalLight(0xffffff,2);key.position.set(3,4,5);scene.add(key);
 const rim=new THREE.DirectionalLight(0xffdfc7,3);rim.position.set(-3,-2,2);scene.add(rim);
 const group=new THREE.Group();scene.add(group);
 const segments=192,radial=20,count=12;
 const geometry=new THREE.TorusKnotGeometry(1.22,.36,segments,radial,2,3);
 const material=new THREE.MeshStandardMaterial({color:0xd8d8d8,metalness:1,roughness:.12,envMapIntensity:1.8});
 const chunks=[];
 for(let i=0;i<count;i++) {
   const part=new THREE.BufferGeometry();
   for(const name of Object.keys(geometry.attributes))part.setAttribute(name,geometry.attributes[name]);
   part.setIndex(geometry.index);part.setDrawRange(i*(segments/count)*radial*6,(segments/count)*radial*6);
   const mesh=new THREE.Mesh(part,material);group.add(mesh);chunks.push(mesh);
 }
 let frame=0,last=0,angle=0,spread=0,exploded=false,visible=true,drag=false,dragX=0,dragAngle=0;
 const target={x:0,y:0};const actual={x:0,y:0};
 const resize=()=>{const {width,height}=stage.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.position.z=camera.aspect<.85?10.6:8.6;camera.updateProjectionMatrix();renderStill();};
 const paint=(dt=0)=>{
  if(!motion.paused){angle+=dt*.19;actual.x+=(target.x-actual.x)*Math.min(1,dt*5);actual.y+=(target.y-actual.y)*Math.min(1,dt*5);spread+=((exploded?1:0)-spread)*Math.min(1,dt*7);}else{spread=exploded?1:0;}
  group.rotation.set(.35+actual.y*.35+motion.progress*.9,angle+actual.x*.5+dragAngle+motion.progress*2.2,-.25+motion.progress*.6);
  group.scale.setScalar(1+motion.progress*.35);
  chunks.forEach((mesh,i)=>{const a=i/count*Math.PI*2;mesh.position.set(Math.cos(a)*spread*.65,Math.sin(a)*spread*.65,Math.sin(a*2)*spread*.3);mesh.rotation.z=Math.sin(a)*spread*.12;});
  renderer.render(scene,camera);
 };
 function renderStill(){paint(0);}
 function tick(now){frame=0;if(!visible||document.hidden||motion.paused)return;const dt=Math.min((now-last)/1000,.04);last=now;paint(dt);frame=requestAnimationFrame(tick);}
 function start(){if(!frame&&visible&&!document.hidden&&!motion.paused){last=performance.now();frame=requestAnimationFrame(tick);}else if(motion.paused)renderStill();}
 function stop(){cancelAnimationFrame(frame);frame=0;}
 stage.addEventListener('pointermove',e=>{if(motion.paused)return;const r=stage.getBoundingClientRect();target.x=(e.clientX-r.left)/r.width-.5;target.y=(e.clientY-r.top)/r.height-.5;if(drag){dragAngle+=(e.clientX-dragX)*.012;dragX=e.clientX;}});
 stage.addEventListener('pointerdown',e=>{if(motion.paused)return;drag=true;dragX=e.clientX;stage.setPointerCapture(e.pointerId);stage.classList.add('is-dragging');});
 const release=()=>{drag=false;stage.classList.remove('is-dragging');};stage.addEventListener('pointerup',release);stage.addEventListener('pointercancel',release);stage.addEventListener('pointerleave',()=>{target.x=target.y=0;});
 button.addEventListener('click',()=>{exploded=!exploded;button.setAttribute('aria-pressed',String(exploded));button.innerHTML=`${exploded?'Reconstruir la pieza':'Desarmar la pieza'} <span>↗</span>`;if(motion.paused)renderStill();});
 document.addEventListener('motionchange',()=>{stop();start();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else start();});
 const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)start();else stop();},{rootMargin:'100px'});observer.observe(stage);
 const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();stop();stage.classList.remove('scene-ready');button.hidden=true;});
 stage.classList.add('scene-ready');resize();start();
 return ()=>{stop();observer.disconnect();resizeObserver.disconnect();chunks.forEach(mesh=>mesh.geometry.dispose());geometry.dispose();material.dispose();environment.dispose();renderer.dispose();};
}
