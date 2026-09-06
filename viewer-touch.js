/* Bagan — smooth memory viewer close interaction */
(()=>{
  const viewer=document.getElementById('viewer');
  const image=document.getElementById('viewerImg');
  if(!viewer||!image)return;
  let closing=false;
  const closeSmooth=()=>{
    if(closing||!viewer.classList.contains('open'))return;
    closing=true;
    viewer.style.display='grid';
    viewer.style.opacity='1';
    viewer.style.transition='opacity .42s cubic-bezier(.16,1,.3,1)';
    viewer.classList.remove('open');
    viewer.style.opacity='0';
    setTimeout(()=>{
      viewer.style.display='';
      viewer.style.opacity='';
      viewer.style.transition='';
      viewer.setAttribute('aria-hidden','true');
      if(typeof auto!=='undefined')auto=true;
      closing=false;
    },430);
  };
  image.addEventListener('click',closeSmooth,{passive:true});
  viewer.addEventListener('click',e=>{
    if(e.target===viewer)closeSmooth();
  });
})();
