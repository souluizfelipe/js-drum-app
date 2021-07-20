document.body.addEventListener('keyup', (e) => {
  playSound(e.code.toLowerCase())
});

document.querySelector('.composer button')
  .addEventListener('click', () =>{
    let composer = document.querySelector('#input').value;

    if(composer !== ''){
      let compositionArray = composer.split('');
      playCompositon(compositionArray);
    };
        
  });

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  };

  if(keyElement) {
    keyElement.classList.add('active');

    setTimeout(() => {
      keyElement.classList.remove('active');
    }, 150);
  };
};

function playCompositon(compositionArray) {
  let wait = 0;

  for(let sound of compositionArray){
    setTimeout(() => {  
      playSound(`key${sound}`)
    }, wait);
    wait += 250
  };
  
  document.querySelector('#input').value = '' ;
};