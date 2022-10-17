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

imgDisplayed[counterImg].classList.add('active');

