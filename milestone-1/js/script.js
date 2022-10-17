const imgArray = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg'
];

let imgStamp = '';
let miniatureStamp = '';

const imgContainer = document.querySelector('.img-container');
const imgPreview = document.querySelector('.img-prewiev');

for(let i = 0; i < imgArray.length; i++){
  imgStamp += `<img class="img-displayed" src="img/${imgArray[i]}" alt="${imgArray[i]}">`;
  console.log(imgStamp);
  miniatureStamp += `<img class="miniature" src="img/${imgArray[i]}" alt="${imgArray[i]}">`;
}

imgContainer.innerHTML += imgStamp;
imgPreview.innerHTML += miniatureStamp;

let counterImg = 0;

const imgDisplayed = document.getElementsByClassName('img-displayed');
const miniature = document.getElementsByClassName('miniature');

const upArrow = document.querySelector('.arrow.up');
const downArrow = document.querySelector('.arrow.down');

console.log(upArrow, downArrow);

imgDisplayed[counterImg].classList.add('active');
miniature[counterImg].classList.add('active');

downArrow.addEventListener('click', function(){

  if(counterImg === imgArray.length - 1){
    imgDisplayed[counterImg].classList.remove('active');
    miniature[counterImg].classList.remove('active');
    counterImg = 0;
    imgDisplayed[counterImg].classList.add('active');
    miniature[counterImg].classList.add('active');
  }else{
    imgDisplayed[counterImg].classList.remove('active');
    miniature[counterImg].classList.remove('active');
    counterImg++;
    imgDisplayed[counterImg].classList.add('active');
    miniature[counterImg].classList.add('active');
  }
  
});

upArrow.addEventListener('click', function(){

  if(counterImg === 0){
    imgDisplayed[counterImg].classList.remove('active');
    miniature[counterImg].classList.remove('active');
    counterImg = imgArray.length - 1;
    imgDisplayed[counterImg].classList.add('active');
    miniature[counterImg].classList.add('active');
  }else{
    imgDisplayed[counterImg].classList.remove('active');
    miniature[counterImg].classList.remove('active');
    counterImg--;
    imgDisplayed[counterImg].classList.add('active');
    miniature[counterImg].classList.add('active');
  }

});