document.body.addEventListener('keyup', (e) => {
  playSound(e.code.toLowerCase())
});

function playSound(sound) {
  let audio = document.querySelector(`#s_${sound}`)
  
  if(audio) {
    audio.play();
  };
};