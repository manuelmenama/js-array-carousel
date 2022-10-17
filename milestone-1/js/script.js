const imgArray = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg'
];

let imgStamp = '';

const imgContainer = document.querySelector('.img-container');

for(let i = 0; i < imgArray.length; i++){
  imgStamp += `<img class="img-displayed" src="img/${imgArray[i]}" alt="${imgArray[i]}">`;
  console.log(imgStamp);
}

imgContainer.innerHTML += imgStamp;

let counterImg = 0;

const imgDisplayed = document.getElementsByClassName('img-displayed');
const upArrow = document.querySelector('.arrow.up');
const downArrow = document.querySelector('.arrow.down');

console.log(upArrow, downArrow);

imgDisplayed[counterImg].classList.add('active');

upArrow.addEventListener('click', function(){

  if(counterImg === imgArray.length - 1){
    imgDisplayed[counterImg].classList.remove('active');
    counterImg = 0;
    imgDisplayed[counterImg].classList.add('active');
  }else{
    imgDisplayed[counterImg].classList.remove('active');
    counterImg++;
    imgDisplayed[counterImg].classList.add('active');
  }
  
});

downArrow.addEventListener('click', function(){

  if(counterImg === 0){
    imgDisplayed[counterImg].classList.remove('active');
    counterImg = imgArray.length - 1;
    imgDisplayed[counterImg].classList.add('active');
  }else{
    imgDisplayed[counterImg].classList.remove('active');
    counterImg--;
    imgDisplayed[counterImg].classList.add('active');
  }

});