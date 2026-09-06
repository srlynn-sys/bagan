const PHOTOS=['https://lh3.googleusercontent.com/d/1Qqbqb0PGfz9gXSbXrmHnBOL_2GUFtIKx','https://lh3.googleusercontent.com/d/1IwoxYmDaZq3MWLbacjH71PiWJxHBXpWw','https://lh3.googleusercontent.com/d/1cvf9JIn3hoXHsiuMd3A1vsTTcsIqZ25H','https://lh3.googleusercontent.com/d/1UbhNEzRGLqp4CasUmnNzG3fwSwkospZG','https://lh3.googleusercontent.com/d/12N8pL7cZnejvtwqtu8EShZMvxTPoCb7u','https://lh3.googleusercontent.com/d/1Hz95D0BwdTJPyxVZKsPUAf8ZzeygdoXI','https://lh3.googleusercontent.com/d/1XjNUbkGB8ucu3MbrQBFkGK3JV6RkTAvg','https://lh3.googleusercontent.com/d/1QFjNaFawujj1Xk10ILIzXFtKXKqAujb9','https://lh3.googleusercontent.com/d/1StFGgrMDc1c7WagNr92RUuPp8_Fum6A_','https://lh3.googleusercontent.com/d/1WKTOVe-I4bBniRh2jUnTgeboqTfOzPBH','https://lh3.googleusercontent.com/d/1WIXbYdUWS8bDqS6KgMiX1_zquzTmfFAR','https://lh3.googleusercontent.com/d/1nFISBpQdKyeCNAwksPhs6SM9gLKAPMgW','https://lh3.googleusercontent.com/d/10nRHrhJ9aHobwDu5WojDYEhEOtSalwsp','https://lh3.googleusercontent.com/d/1dE6HOhTkCdBJjWOL22LlESYNEWC7u61K','https://lh3.googleusercontent.com/d/1OsPbp8hitRQffIMCxNyWnEgWu7ZwPL1J','https://lh3.googleusercontent.com/d/1eNWSpt7_5_9SyqQOuUozA2--2z991TeB','https://lh3.googleusercontent.com/d/1dM4Ec6drx7w3wlf8O8jGHv_lPzdqsili','https://lh3.googleusercontent.com/d/1rvCS0nPOHA2JRtZtdVyO3k4lmdI161sQ','https://lh3.googleusercontent.com/d/1JYrneYAQb2ZhujmrBU7Iq-l1rcf4Kb76','https://lh3.googleusercontent.com/d/1EOV7eBw-h0xJ2jfQwVdyFa8IE2R1Rt9l','https://lh3.googleusercontent.com/d/13x0U7Z2gFF8bTzq1Hj_36uIRBdqUh_iw','https://lh3.googleusercontent.com/d/1q0ZvW6duFH4woP4RLW7qBCtCK6-TkyGh','https://lh3.googleusercontent.com/d/1aRnDAie12AzVU4t7dLEmspKNANOtAs5S','https://lh3.googleusercontent.com/d/1BKWYwGhpKvz3i5EcinwQlrtmEVEX7eMQ','https://lh3.googleusercontent.com/d/1GNRFtjVepBUaJii-Tb8ascTnB91P1knp','https://lh3.googleusercontent.com/d/1GeizL3J9gTutQfLtDRPMYRtRrTKw01V9','https://lh3.googleusercontent.com/d/1TkHqnZ-z-3CWZNlTLqZsGxh9SXHRDqWs','https://lh3.googleusercontent.com/d/1CPJVeM4t-L0HIbnb1D5QHzZyZnP38H1d','https://lh3.googleusercontent.com/d/1iseb396Meo1SoB6TFLXCXeOdBNKd6aLG','https://lh3.googleusercontent.com/d/1oQ3QZg-o07f1NDdpFh8paEiW0PuqA4a4','https://lh3.googleusercontent.com/d/1yjvKlRcwj9CSn9GPbBp5jxA1PX6C9Xib','https://lh3.googleusercontent.com/d/1BOcsqmWMSz-e8UwGWjIg7bx7xfcK7X9R','https://lh3.googleusercontent.com/d/1C6cWaYYjowBR1gk0X5Au5CJzEALtYuDL','https://lh3.googleusercontent.com/d/1BG8cPJkGOe_LmXzE2z7o5ZsuZAobkOI8','https://lh3.googleusercontent.com/d/1HSIjwYiRFqT1GlH7nNUCoeckg5a2C8wO','https://lh3.googleusercontent.com/d/1Isy24KiNcCHXgOfmctc8F8wT6PMv9pok','https://lh3.googleusercontent.com/d/1jbNEEyQNZqZj16_P9SGPj7pT3cluwYiW','https://lh3.googleusercontent.com/d/12JcWc4BENHa0hcqQ93UCQejfhR88Fk7m','https://lh3.googleusercontent.com/d/1trynYggiQgzutyk7hKU8fNfXqUi8anAd','https://lh3.googleusercontent.com/d/1gmis4K9As3KtzNIcdCbABkwXdnWvazG_','https://lh3.googleusercontent.com/d/1kQpf3Qi-terznyWNDkvj_HMxitswVem9','https://lh3.googleusercontent.com/d/1vkeBl2YiN4VOIiLhRwzbUBxTcEiyf0je','https://lh3.googleusercontent.com/d/1gWxJSd8kpyKId9VHLg_9G3-J7wJs9Ts8','https://lh3.googleusercontent.com/d/1SwK2Aat0amtgXIYGGX-UiM1LTSa0TCmJ','https://lh3.googleusercontent.com/d/1upFgVSgeNOZKPOxR2643oU4o-i6OKnHG','https://lh3.googleusercontent.com/d/1qMyUXd-DRh6P3u3At1xMYSfmK1JRaa5D','https://lh3.googleusercontent.com/d/1ku6D2t1KY2B1WBobfXar8VpTzGEOq0hR','https://lh3.googleusercontent.com/d/1wKbrNjo8FCmkPbiIwVRDz1RCQb4p_K8s','https://lh3.googleusercontent.com/d/1-rViuU9DWNFOqFNjt0RCuVQZHwWkMkN-','https://lh3.googleusercontent.com/d/1cukGhZ6I3iu58PWdKfKSbJpYj3l8fneB','https://lh3.googleusercontent.com/d/1FXXLhS5U1pzgz2E_4dwDVr4eiBH1ItK9','https://lh3.googleusercontent.com/d/1f-Zr4vIBcP-O4PbtgkomTvZDHhTvUKBf','https://lh3.googleusercontent.com/d/1rR_XkNpFCI-1DV0GM7xRpOsIJCqlMo8x','https://lh3.googleusercontent.com/d/1usMZVeD0aobDcbDK0a2LzP9Ue-0Q3tCZ','https://lh3.googleusercontent.com/d/1by5MAHzcwk62n9pmpQXiPpW1ESS1YOAM'];
const total=PHOTOS.length;
const universe=document.getElementById('universe'),field=document.getElementById('photoField'),count=document.getElementById('count'),memoryNo=document.getElementById('memoryNo'),modal=document.getElementById('photoModal'),modalImg=document.getElementById('modalImg');
const ids=PHOTOS.map(u=>u.split('/d/')[1]);
const photoUrl=i=>`https://drive.google.com/thumbnail?id=${ids[i]}&sz=w1200`;
let yaw=0,pitch=0,targetYaw=0,targetPitch=0,dragging=false,lastX=0,lastY=0,raf=0,selected=0,downX=0,downY=0;
const cards=[];
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const norm=a=>((a+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;
function makeCards(){
 field.innerHTML='';
 for(let i=0;i<total;i++){
  const el=document.createElement('img');el.className='memory-photo';el.alt=`Bagan memory ${i+1}`;el.decoding='async';el.draggable=false;el.dataset.i=i;
  el.addEventListener('error',()=>{if(!el.dataset.fallback){el.dataset.fallback='1';el.src=PHOTOS[i]}});
  el.addEventListener('pointerdown',e=>e.stopPropagation());
  el.addEventListener('click',e=>{e.stopPropagation();if(Math.abs(e.clientX-downX)+Math.abs(e.clientY-downY)<12){selected=i;updateUI();openPhoto()}});
  field.appendChild(el);
  const t=i/total*Math.PI*2;
  const lat=((i*37)%total)/total*Math.PI-Math.PI/2;
  cards.push({el,i,a:t,r:lat});
 }
}
function updateUI(){count.textContent=String(selected+1).padStart(2,'0');memoryNo.textContent=`MEMORY ${String(selected+1).padStart(2,'0')}`}
function render(){
 raf=0;
 const w=innerWidth,h=innerHeight,m=w<701;
 const cy=h*.52,rx=Math.min(w*.40,430),ry=Math.min(h*.34,310);
 const activeSet=new Set();
 const items=cards.map(c=>{
  const a=c.a+yaw,lat=c.r+pitch*.003;
  const x=Math.sin(a)*Math.cos(lat),z=Math.cos(a)*Math.cos(lat),y=Math.sin(lat);
  return {c,x,z,y};
 }).sort((A,B)=>A.z-B.z);
 let loaded=0;
 for(const o of items){
  const {c,x,z,y}=o,front=(z+1)/2;
  const visible=z>-0.25;
  if(visible&&loaded<26){activeSet.add(c.i);loaded++}
  const px=w/2+x*rx,py=cy-y*ry;
  const scale=m?(0.55+front*.45):(0.58+front*.55);
  c.el.style.transform=`translate3d(${px}px,${py}px,0) translate(-50%,-50%) scale(${scale})`;
  c.el.style.opacity=visible?(.18+front*.82):'0';
  c.el.style.zIndex=100+Math.round(front*100);
  c.el.style.pointerEvents=visible?'auto':'none';
 }
 for(const c of cards){
  if(activeSet.has(c.i)){if(c.el.dataset.loaded!=='1'){c.el.src=photoUrl(c.i);c.el.dataset.loaded='1'}}
  else if(c.el.dataset.loaded==='1'&&Math.abs(c.i-selected)>18){c.el.removeAttribute('src');c.el.dataset.loaded='0';c.el.removeAttribute('data-fallback')}
 }
}
function requestRender(){if(!raf)raf=requestAnimationFrame(render)}
function animate(){
 const dy=targetYaw-yaw,dp=targetPitch-pitch;
 if(Math.abs(dy)>.0005||Math.abs(dp)>.0005){yaw+=dy*.16;pitch+=dp*.16;requestRender();requestAnimationFrame(animate)}
}
function snap(){targetYaw=yaw;targetPitch=pitch;animate()}
function selectIndex(i){selected=(i+total)%total;const c=cards[selected];targetYaw=-c.a;updateUI();animate()}
function openPhoto(){modalImg.dataset.loaded='0';modalImg.src=photoUrl(selected);modalImg.onerror=()=>{if(modalImg.dataset.fallback!=='1'){modalImg.dataset.fallback='1';modalImg.src=PHOTOS[selected]}};modal.classList.add('open')}
function closePhoto(){modal.classList.remove('open');modalImg.removeAttribute('src')}
function endPointer(){dragging=false;universe.classList.remove('dragging');snap()}
universe.addEventListener('pointerdown',e=>{if(e.target.closest('.bottom-bar,.photo-modal,.memory-photo,.reset,.back-home'))return;dragging=true;universe.classList.add('dragging');lastX=e.clientX;lastY=e.clientY;downX=e.clientX;downY=e.clientY;targetYaw=yaw;targetPitch=pitch;universe.setPointerCapture?.(e.pointerId)});
universe.addEventListener('pointermove',e=>{if(!dragging)return;const dx=e.clientX-lastX,dy=e.clientY-lastY;lastX=e.clientX;lastY=e.clientY;targetYaw=yaw+dx*.009;targetPitch=clamp(pitch-dy*.006,-.9,.9);yaw=targetYaw;pitch=targetPitch;requestRender()},{passive:true});
universe.addEventListener('pointerup',endPointer);universe.addEventListener('pointercancel',endPointer);
document.getElementById('prev').onclick=()=>selectIndex(selected-1);
document.getElementById('next').onclick=()=>selectIndex(selected+1);
document.getElementById('selected').onclick=openPhoto;
document.getElementById('close').onclick=closePhoto;
document.getElementById('reset').onclick=()=>{targetYaw=0;targetPitch=0;animate()};
modal.addEventListener('click',e=>{if(e.target===modal)closePhoto()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePhoto();if(e.key==='ArrowLeft')selectIndex(selected-1);if(e.key==='ArrowRight')selectIndex(selected+1)});
makeCards();updateUI();render();
window.addEventListener('resize',requestRender,{passive:true});