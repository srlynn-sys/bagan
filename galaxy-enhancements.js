const space=document.getElementById('space');
if(space){
  const trails=document.createElement('div');
  trails.className='orbit-trails';
  trails.innerHTML='<span></span><span></span><span></span>';
  space.appendChild(trails);

  const particles=document.createElement('div');
  particles.className='cinematic-particles';
  const count=window.innerWidth<700?18:34;
  for(let i=0;i<count;i++){
    const p=document.createElement('i');
    p.style.left=`${Math.random()*100}%`;
    p.style.top=`${55+Math.random()*50}%`;
    p.style.animationDuration=`${8+Math.random()*14}s`;
    p.style.animationDelay=`-${Math.random()*18}s`;
    p.style.opacity=`${.18+Math.random()*.45}`;
    particles.appendChild(p);
  }
  space.appendChild(particles);

  let lastPointerX=innerWidth/2,lastPointerY=innerHeight/2;
  space.addEventListener('pointermove',e=>{
    if(document.querySelector('#viewer.open')) return;
    const dx=(e.clientX-innerWidth/2)/innerWidth;
    const dy=(e.clientY-innerHeight/2)/innerHeight;
    trails.style.transform=`translate3d(${dx*-10}px,${dy*-7}px,0)`;
    lastPointerX=e.clientX; lastPointerY=e.clientY;
  },{passive:true});

  window.addEventListener('resize',()=>{
    particles.innerHTML='';
    const n=innerWidth<700?18:34;
    for(let i=0;i<n;i++){
      const p=document.createElement('i');
      p.style.left=`${Math.random()*100}%`;p.style.top=`${55+Math.random()*50}%`;
      p.style.animationDuration=`${8+Math.random()*14}s`;p.style.animationDelay=`-${Math.random()*18}s`;
      particles.appendChild(p);
    }
  });
}
