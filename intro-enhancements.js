const intro=document.getElementById('intro');
if(intro){
  const glow=document.createElement('div');
  glow.className='cursor-glow';
  const vignette=document.createElement('div');
  vignette.className='vignette';
  const scanline=document.createElement('div');
  scanline.className='scanline';
  intro.append(glow,vignette,scanline);

  window.addEventListener('pointermove',e=>{
    if(intro.classList.contains('is-exiting')) return;
    glow.style.left=`${e.clientX}px`;
    glow.style.top=`${e.clientY}px`;
    intro.classList.add('has-pointer');
  });
  intro.addEventListener('pointerleave',()=>intro.classList.remove('has-pointer'));

  const button=document.getElementById('enterGalaxy');
  if(button){
    button.innerHTML='<span class="enter-dot"></span>Enter the memory galaxy <span aria-hidden="true">→</span>';
    button.addEventListener('pointerenter',()=>{document.documentElement.style.setProperty('--enter-hover','1')});
  }
}
