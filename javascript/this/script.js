// const audio = {
//   title: 'a',
//   play(){
//     console.log('play this', this);
//   }
// }

// audio.play();

// audio.stop = function(){
//   console.log('stop this',this);
// }

// audio.stop();


// // function => Window Object
// function playAudio(){
//   console.log(this);
// }

// playAudio();


// Constructor Function => {}
  function Audio(title){
    this.title = title;
    console.log(this);
  }

  const audio = new Audio('a');

