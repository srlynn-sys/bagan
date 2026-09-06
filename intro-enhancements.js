(()=>{
  const introEnhancementRoot=document.getElementById('intro');
  if(!introEnhancementRoot)return;
  const glow=document.createElement('div');
  glow.className='cursor-glow';
  const vignette=document.createElement('div');
  vignette.className='vignette';
  const scanline=document.createElement('div');
  scanline.className='scanline';
  introEnhancementRoot.append(glow,vignette,scanline);

  window.addEventListener('pointermove',e=>{
    if(introEnhancementRoot.classList.contains('is-exiting'))return;
    glow.style.left=`${e.clientX}px`;
    glow.style.top=`${e.clientY}px`;
    introEnhancementRoot.classList.add('has-pointer');
  });
  introEnhancementRoot.addEventListener('pointerleave',()=>introEnhancementRoot.classList.remove('has-pointer'));

  const button=document.getElementById('enterGalaxy');
  if(button)button.innerHTML='<span class="enter-dot"></span>Enter the memory galaxy <span aria-hidden="true">→</span>';
})();
