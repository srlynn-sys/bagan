const PHOTOS=['1Qqbqb0PGfz9gXSbXrmHnBOL_2GUFtIKx','1IwoxYmDaZq3MWLbacjH71PiWJxHBXpWw','1cvf9JIn3hoXHsiuMd3A1vsTTcsIqZ25H','1UbhNEzRGLqp4CasUmnNzG3fwSwkospZG','12N8pL7cZnejvtwqtu8EShZMvxTPoCb7u','1Hz95D0BwdTJPyxVZKsPUAf8ZzeygdoXI','1XjNUbkGB8ucu3MbrQBFkGK3JV6RkTAvg','1QFjNaFawujj1Xk10ILIzXFtKXKqAujb9','1StFGgrMDc1c7WagNr92RUuPp8_Fum6A_','1WKTOVe-I4bBniRh2jUnTgeboqTfOzPBH','1WIXbYdUWS8bDqS6KgMiX1_zquzTmfFAR','1nFISBpQdKyeCNAwksPhs6SM9gLKAPMgW','10nRHrhJ9aHobwDu5WojDYEhEOtSalwsp','1dE6HOhTkCdBJjWOL22LlESYNEWC7u61K','1OsPbp8hitRQffIMCxNyWnEgWu7ZwPL1J','1eNWSpt7_5_9SyqQOuUozA2--2z991TeB','1dM4Ec6drx7w3wlf8O8jGHv_lPzdqsili','1rvCS0nPOHA2JRtZtdVyO3k4lmdI161sQ','1JYrneYAQb2ZhujmrBU7Iq-l1rcf4Kb76','1EOV7eBw-h0xJ2jfQwVdyFa8IE2R1Rt9l','13x0U7Z2gFF8bTzq1Hj_36uIRBdqUh_iw','1q0ZvW6duFH4woP4RLW7qBCtCK6-TkyGh','1aRnDAie12AzVU4t7dLEmspKNANOtAs5S','1BKWYwGhpKvz3i5EcinwQlrtmEVEX7eMQ','1GNRFtjVepBUaJii-Tb8ascTnB91P1knp','1GeizL3J9gTutQfLtDRPMYRtRrTKw01V9','1TkHqnZ-z-3CWZNlTLqZsGxh9SXHRDqWs','1CPJVeM4t-L0HIbnb1D5QHzZyZnP38H1d','1iseb396Meo1SoB6TFLXCXeOdBNKd6aLG','1oQ3QZg-o07f1NDdpFh8paEiW0PuqA4a4','1yjvKlRcwj9CSn9GPbBp5jxA1PX6C9Xib','1BOcsqmWMSz-e8UwGWjIg7bx7xfcK7X9R','1C6cWaYYjowBR1gk0X5Au5CJzEALtYuDL','1BG8cPJkGOe_LmXzE2z7o5ZsuZAobkOI8','1HSIjwYiRFqT1GlH7nNUCoeckg5a2C8wO','1Isy24KiNcCHXgOfmctc8F8wT6PMv9pok','1jbNEEyQNZqZj16_P9SGPj7pT3cluwYiW','12JcWc4BENHa0hcqQ93UCQejfhR88Fk7m','1trynYggiQgzutyk7hKU8fNfXqUi8anAd','1gmis4K9As3KtzNIcdCbABkwXdnWvazG_','1kQpf3Qi-terznyWNDkvj_HMxitswVem9','1vkeBl2YiN4VOIiLhRwzbUBxTcEiyf0je','1gWxJSd8kpyKId9VHLg_9G3-J7wJs9Ts8','1SwK2Aat0amtgXIYGGX-UiM1LTSa0TCmJ','1upFgVSgeNOZKPOxR2643oU4o-i6OKnHG','1qMyUXd-DRh6P3u3At1xMYSfmK1JRaa5D','1ku6D2t1KY2B1WBobfXar8VpTzGEOq0hR','1wKbrNjo8FCmkPbiIwVRDz1RCQb4p_K8s','1-rViuU9DWNFOqFNjt0RCuVQZHwWkMkN-','1cukGhZ6I3iu58PWdKfKSbJpYj3l8fneB','1FXXLhS5U1pzgz2E_4dwDVr4eiBH1ItK9','1f-Zr4vIBcP-O4PbtgkomTvZDHhTvUKBf','1rR_XkNpFCI-1DV0GM7xRpOsIJCqlMo8x','1usMZVeD0aobDcbDK0a2LzP9Ue-0Q3tCZ','1by5MAHzcwk62n9pmpQXiPpW1ESS1YOAM'];
const photos=document.getElementById('photos'),galaxy=document.getElementById('galaxy'),space=document.getElementById('space');
let zoom=1,auto=true,dragging=false,lastX=0,lastY=0,panX=0,panY=0,carouselTime=0,lastFrame=performance.now();
const cards=[];

// Three wide carousel decks. Every memory stays front-facing while its own deck
// revolves around the glowing Bagan galaxy in the middle.
const DECKS=[{count:18,radius:410,depth:125,flatten:.34,speed:.34,phase:.0},{count:18,radius:565,depth:105,flatten:.30,speed:.24,phase:Math.PI/18},{count:19,radius:720,depth:90,flatten:.27,speed:.18,phase:Math.PI/19}];
let cursor=0;
DECKS.forEach((deck,deckIndex)=>{for(let slot=0;slot<deck.count&&cursor<PHOTOS.length;slot++,cursor++){
  const id=PHOTOS[cursor];
  const el=document.createElement('button');el.className='photo';el.type='button';
  const img=document.createElement('img');img.src=`https://lh3.googleusercontent.com/d/${id}`;img.loading='lazy';img.draggable=false;
  img.onerror=()=>{if(!img.dataset.f){img.dataset.f=1;img.src=`https://drive.google.com/thumbnail?id=${id}&sz=w1600`}};
  const label=document.createElement('small');label.textContent=`MEMORY ${String(cursor+1).padStart(2,'0')}`;el.append(img,label);el.onclick=()=>openViewer(id,cursor);photos.append(el);
  cards.push({el,deckIndex,deck,base:(slot/deck.count)*Math.PI*2+deck.phase,phase:cursor*.71,swayX:5+(cursor%3)*3,swayY:7+(cursor%4)*2,size:.88+(cursor%4)*.035});
}});

function render(now){
  const dt=Math.min(.04,(now-lastFrame)/1000);lastFrame=now;
  if(auto)carouselTime+=dt;
  const w=window.innerWidth,h=window.innerHeight;
  const sx=Math.max(.82,Math.min(1.04,w/1180));
  const sy=Math.max(.82,Math.min(1.04,h/760));
  const scale=zoom*(w<700?.55:1);
  cards.forEach(c=>{
    const d=c.deck;
    const a=c.base+carouselTime*d.speed;
    // Circular motion is flattened vertically like a classic carousel viewed from the front.
    const x=Math.cos(a)*d.radius*sx+Math.sin(carouselTime*.8+c.phase)*c.swayX+panX;
    const y=Math.sin(a)*d.radius*d.flatten*sy+Math.cos(carouselTime*.62+c.phase)*c.swayY+panY;
    // Depth gives a gentle front/back pass without ever turning the photo edge-on.
    const z=Math.sin(a)*d.depth;
    const front=(z+d.depth)/(2*d.depth);
    const s=c.size*(.88+front*.12);
    const yaw=Math.sin(carouselTime*.28+c.phase)*.8;
    const roll=Math.sin(carouselTime*.34+c.phase)*.35;
    c.el.style.transform=`translate3d(${x}px,${y}px,${z}px) rotateY(${yaw}deg) rotateZ(${roll}deg) scale(${s})`;
    c.el.style.opacity=.74+front*.26;
    c.el.style.zIndex=Math.round(300+c.deckIndex*10+z);
  });
  galaxy.style.transform=`translate(-50%,-50%) scale(${scale})`;
}
function loop(now){render(now);requestAnimationFrame(loop)}requestAnimationFrame(loop);

space.addEventListener('pointerdown',e=>{dragging=true;space.classList.add('dragging');lastX=e.clientX;lastY=e.clientY;space.setPointerCapture(e.pointerId)});
space.addEventListener('pointermove',e=>{if(!dragging)return;panX+=(e.clientX-lastX)*.55;panY+=(e.clientY-lastY)*.55;lastX=e.clientX;lastY=e.clientY});
space.addEventListener('pointerup',()=>dragging=false);space.addEventListener('pointercancel',()=>dragging=false);
space.addEventListener('wheel',e=>{e.preventDefault();zoom=Math.max(.62,Math.min(1.12,zoom-e.deltaY*.0005))},{passive:false});

document.getElementById('auto').onclick=()=>{auto=!auto;document.getElementById('auto').innerHTML=`AUTO ROTATE <b>${auto?'ON':'OFF'}</b>`};
const viewer=document.getElementById('viewer'),viewerImg=document.getElementById('viewerImg'),viewerText=document.getElementById('viewerText');
function openViewer(id,i){viewerImg.src=`https://lh3.googleusercontent.com/d/${id}`;viewerImg.onerror=()=>viewerImg.src=`https://drive.google.com/thumbnail?id=${id}&sz=w2000`;viewerText.textContent=`BAGAN · MEMORY ${String(i+1).padStart(2,'0')} · ${PHOTOS.length} FRAMES`;viewer.classList.add('open');viewer.setAttribute('aria-hidden','false');auto=false}
function closeViewer(){viewer.classList.remove('open');viewer.setAttribute('aria-hidden','true')}
document.getElementById('close').onclick=closeViewer;viewer.onclick=e=>{if(e.target===viewer)closeViewer()};document.addEventListener('keydown',e=>{if(e.key==='Escape')closeViewer()});