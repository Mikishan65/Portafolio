import { technologies } from '../data/portfolioData.js';
import { motionState } from './cinematicMotion.js';
export function initPlayground(){
 const field=document.querySelector('.playground');if(!field)return;
 const pieces=[...field.querySelectorAll('.stack-piece')];let shuffle=0;
 const placements=new Map();const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
 function arrange(){
  const w=field.clientWidth,h=field.clientHeight;
  const columns=w<550?2:4,rows=Math.ceil(pieces.length/columns);
  pieces.forEach((el,i)=>{const slot=(i+shuffle*5)%pieces.length;const col=slot%columns,row=Math.floor(slot/columns);const x=clamp(col*w/columns+12+(row%2?12:0),4,w-el.offsetWidth-4),y=row*(h-60)/rows+25;const rotation=((i*7+shuffle*13)%19)-9;placements.set(el,{x,y,rotation});el.style.transition=motionState.paused?'none':'transform 650ms cubic-bezier(.16,1,.3,1)';el.style.transform=`translate3d(${x}px,${y}px,0) rotate(${rotation}deg)`;});
 }
 pieces.forEach((el,i)=>{
  let start=null,moved=false;
  el.addEventListener('pointerdown',e=>{if(e.button!==0)return;const p=placements.get(el);start={px:e.clientX,py:e.clientY,x:p.x,y:p.y};moved=false;el.setPointerCapture(e.pointerId);el.classList.add('is-grabbed');el.style.transition='none';});
  el.addEventListener('pointermove',e=>{if(!start)return;const dx=e.clientX-start.px,dy=e.clientY-start.py;if(Math.abs(dx)+Math.abs(dy)>5)moved=true;const x=clamp(start.x+dx,0,field.clientWidth-el.offsetWidth),y=clamp(start.y+dy,0,field.clientHeight-el.offsetHeight);placements.set(el,{x,y,rotation:0});el.style.transform=`translate3d(${x}px,${y}px,0) rotate(0deg)`;});
  const release=()=>{start=null;el.classList.remove('is-grabbed');};el.addEventListener('pointerup',release);el.addEventListener('pointercancel',release);
  el.addEventListener('click',e=>{if(moved){moved=false;e.preventDefault();return;}pieces.forEach(p=>p.setAttribute('aria-pressed',String(p===el)));document.getElementById('stack-description').textContent=`${technologies[i].name} — ${technologies[i].detail}`;});
  el.setAttribute('aria-pressed','false');
 });
 document.getElementById('shuffle-stack').addEventListener('click',()=>{shuffle++;arrange();});
 new ResizeObserver(arrange).observe(field);document.fonts.ready.then(arrange);arrange();
}
