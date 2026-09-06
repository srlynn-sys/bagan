/* Keep all 55 memories, but give each orbit enough breathing room. */
(function(){
  if(typeof DECKS==='undefined'||typeof cards==='undefined') return;
  DECKS[0].radius=430; DECKS[0].depth=70; DECKS[0].speed=.16; DECKS[0].flatten=.30;
  DECKS[1].radius=650; DECKS[1].depth=62; DECKS[1].speed=.115; DECKS[1].flatten=.27;
  DECKS[2].radius=870; DECKS[2].depth=55; DECKS[2].speed=.085; DECKS[2].flatten=.24;
  cards.forEach((c,i)=>{
    c.swayX=1.5+(i%2); c.swayY=2+(i%3); c.size=.92+(i%3)*.018;
  });
})();
