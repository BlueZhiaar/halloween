'use strict';
const trickumekomi = '<iframe width="560" height="315" src="https://www.youtube.com/embed/CgkxYzpep3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
const treatumekomi = '<iframe width="560" height="315" src="https://www.youtube.com/embed/drvH4XbZoPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
const itukiumekomi = '<iframe width="560" height="315" src="https://www.youtube.com/embed/esxVf-lU2us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
const tortInput = document.getElementById('tort');
const enterButton = document.getElementById('enter');
const kekkaSpace = document.getElementById('kekkaspace');
let trick = /trick/i;
let treat = /treat/i;

enterButton.onclick = function() {
  if(tortInput.length === 0){
    return;
  }
  console.log('clicked button now');
  const tortInputValue = tortInput.value;
  trickOrTreat(tortInputValue);
}

/**
 * 
 * @param {string} trortr 
 */
function trickOrTreat(trortr){
  switch(trortr) {
    case 'Trick':
      console.log('trick');
      //TODO kekkaSpaceに写す
      kekkaSpace.innerHTML = trickumekomi;
      break;
    case 'Treat':
      console.log('treat');
      kekkaSpace.innerHTML = treatumekomi;
      //TODO kekkaspaceに動画を載せる
      break;
      default:
      //TODO五木ロボット
      kekkaSpace.innerHTML = itukiumekomi;
      break;
  };
};

