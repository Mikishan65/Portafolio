export const motionState={paused:matchMedia('(prefers-reduced-motion: reduce)').matches,progress:0};

export function initCinematicMotion() {
 const {gsap,ScrollTrigger}=window;
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 const button=document.getElementById('motion-toggle');
 let manualPause=false,context;
 if(gsap&&ScrollTrigger)gsap.registerPlugin(ScrollTrigger);
 function setup(){
  context?.revert();motionState.progress=0;
  if(motionState.paused||!gsap||!ScrollTrigger)return;
  context=gsap.context(()=>{
   const mm=gsap.matchMedia();
   mm.add('(min-width: 800px)',()=>{
    const tl=gsap.timeline({scrollTrigger:{trigger:'.motion-hero',start:'top top',end:'+=95%',pin:'.hero-stage-inner',scrub:.65,invalidateOnRefresh:true,onUpdate:self=>motionState.progress=self.progress}});
    tl.to('.type-one',{xPercent:-70,rotate:-8,opacity:.1,ease:'none'},0).to('.type-two',{xPercent:65,rotate:7,opacity:.1,ease:'none'},0)
      .to('.sculpture-stage',{scale:1.45,yPercent:12,ease:'none'},0).to('.hero-side-note,.hero-bottomline,.hero-interaction-hint',{opacity:0,y:-40,duration:.3},0);
   });
   mm.add('(max-width: 799px)',()=>{
    motionState.progress=0;
    gsap.to('.type-one',{xPercent:-14,ease:'none',scrollTrigger:{trigger:'.motion-hero',start:'top top',end:'bottom top',scrub:.4}});
    gsap.to('.type-two',{xPercent:10,ease:'none',scrollTrigger:{trigger:'.motion-hero',start:'top top',end:'bottom top',scrub:.4}});
   });
   document.querySelectorAll('.manifesto-line').forEach((line,i)=>gsap.fromTo(line,{xPercent:i%2?16:-16},{xPercent:i%2?-7:7,ease:'none',scrollTrigger:{trigger:'.manifesto',start:'top bottom',end:'bottom top',scrub:.7}}));
   gsap.fromTo('.photo-orbit',{rotate:-30},{rotate:150,ease:'none',scrollTrigger:{trigger:'.motion-about',start:'top bottom',end:'bottom top',scrub:1}});
   gsap.fromTo('.about-photo',{rotate:-8,y:60},{rotate:5,y:-40,ease:'none',scrollTrigger:{trigger:'.motion-about',start:'top bottom',end:'bottom top',scrub:.6}});
   gsap.utils.toArray('.work-heading h2,.playground-heading h2,.about-story h2,.section-title,.contact-title').forEach(el=>gsap.from(el,{y:55,rotation:2,opacity:0,duration:.65,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 93%',once:true}}));
   gsap.utils.toArray('.project-panel').filter(panel=>panel.style.display!=='none').forEach((panel,i,all)=>{
    const next=all[i+1];if(!next)return;
    gsap.to(panel.querySelector('.project-panel-layout'),{scale:.89,rotate:-3,opacity:.55,ease:'none',scrollTrigger:{trigger:next.previousElementSibling,start:'top 65%',end:'top 15%',scrub:.5}});
   });
   gsap.utils.toArray('.project-artwork').forEach(art=>gsap.fromTo(art,{y:50,rotate:9},{y:-35,rotate:-5,ease:'none',scrollTrigger:{trigger:art.closest('.project-panel').previousElementSibling,start:'top bottom',end:()=>'+='+ (innerHeight+art.closest('.project-panel').offsetHeight),scrub:.8}}));
   gsap.fromTo('.contact-title',{xPercent:-5},{xPercent:4,ease:'none',scrollTrigger:{trigger:'#contact',start:'top bottom',end:'bottom bottom',scrub:.8}});
  });
  ScrollTrigger.refresh();
 }
 function update(){motionState.paused=manualPause||preference.matches;document.body.classList.toggle('motion-paused',motionState.paused);button.textContent=motionState.paused?'Motion ▶':'Pausa Ⅱ';button.setAttribute('aria-pressed',String(motionState.paused));button.setAttribute('aria-label',motionState.paused?'Activar animaciones':'Pausar animaciones');button.disabled=preference.matches;setup();document.dispatchEvent(new Event('motionchange'));}
 document.addEventListener('projectsfiltered', setup);
 document.querySelector('.more-profile')?.addEventListener('toggle',()=>ScrollTrigger?.refresh());
 button.addEventListener('click',()=>{manualPause=!manualPause;update();});preference.addEventListener('change',update);update();
 if(gsap&&!motionState.paused){gsap.from('.type-line',{yPercent:110,rotation:6,stagger:.06,duration:.7,ease:'power4.out'});gsap.from('.hero-topline,.hero-bottomline',{opacity:0,y:15,duration:.6,delay:.12});}
 if(gsap&&matchMedia('(pointer:fine)').matches){
  document.querySelectorAll('.magnetic').forEach(el=>{const x=gsap.quickTo(el,'x',{duration:.35,ease:'power3.out'}),y=gsap.quickTo(el,'y',{duration:.35,ease:'power3.out'});el.addEventListener('pointermove',e=>{if(motionState.paused)return;const r=el.getBoundingClientRect();x((e.clientX-r.left-r.width/2)*.18);y((e.clientY-r.top-r.height/2)*.18);});el.addEventListener('pointerleave',()=>{x(0);y(0);});});
 }
 const panelObserver=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-in-view',entry.isIntersecting)),{rootMargin:'100px'});
 document.querySelectorAll('.project-panel').forEach(panel=>panelObserver.observe(panel));
 document.addEventListener('visibilitychange',()=>document.body.classList.toggle('tab-idle',document.hidden));
 document.fonts.ready.then(()=>ScrollTrigger?.refresh());
 document.querySelectorAll('img').forEach(img=>img.addEventListener('load',()=>ScrollTrigger?.refresh(),{once:true}));
 import('./sculpture.js').then(({initSculpture})=>initSculpture(motionState)).catch(()=>{document.querySelector('.sculpture-stage').classList.add('scene-fallback');document.getElementById('sculpture-action').hidden=true;});
}
