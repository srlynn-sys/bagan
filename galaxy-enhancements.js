(()=>{
  const galaxySpace=document.getElementById('space');
  if(!galaxySpace)return;
  const trails=document.createElement('div');
  trails.className='orbit-trails';
  trails.innerHTML='<span></span><span></span><span></span>';
  galaxySpace.appendChild(trails);

  const particles=document.createElement('div');
  particles.className='cinematic-particles';
  function seedParticles(){
    particles.innerHTML='';
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
  }
  seedParticles();
  galaxySpace.appendChild(particles);

  // The photo viewer gets its own copy of the original Bagan galaxy core.
  // It sits behind the selected memory and keeps spinning while the image is open.
  const viewer=document.getElementById('viewer');
  if(viewer&&!viewer.querySelector('.viewer-galaxy')){
    const backdrop=document.createElement('div');
    backdrop.className='viewer-galaxy';
    backdrop.setAttribute('aria-hidden','true');
    backdrop.innerHTML=`
      <div class="viewer-nebula vn1"></div>
      <div class="viewer-nebula vn2"></div>
      <div class="viewer-stars"></div>
      <div class="viewer-galaxy-core">
        <div class="viewer-galaxy-cluster"></div>
        <div class="viewer-core-glow"></div>
        <div class="viewer-core-ring"></div>
      </div>`;
    viewer.prepend(backdrop);
  }

  galaxySpace.addEventListener('pointermove',e=>{
    if(document.querySelector('#viewer.open'))return;
    const dx=(e.clientX-innerWidth/2)/innerWidth;
    const dy=(e.clientY-innerHeight/2)/innerHeight;
    trails.style.transform=`translate3d(${dx*-10}px,${dy*-7}px,0)`;
  },{passive:true});
  window.addEventListener('resize',seedParticles);
})();
