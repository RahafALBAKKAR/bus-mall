'use strict';
let arrayImg = [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'tauntaun.jpg',
    'water-can.jpg',
    'wine-glass.jpg',
]
//     Name of the product
//     File path of image
//     Times the image has been shown
// const Img =document.createElementById('Img');
let all = [];
let imgList = document.getElementById('imgList');
let firstImg = document.getElementById('firstImg');
 let sndImg = document.getElementById('sndImg');
let thdImg = document.getElementById('thdImg');
function show(namePro, srcOfImg,) {
    this.namePro = namePro;
    this.imgSrc = srcOfImg;
    this.provide = 0;
    this.reslut = 0;
    show.all.push(this);
}
show.all = [];
for (let i = 0; i < arrayImg.length; i++) {
    new show(arrayImg[i].split('.')[0], arrayImg[i]);
}
console.log(show.all)
// Create an algorithm that will randomly generate three unique product 
// images from the images directory and
//  display them side-by-side-by-side in the browser window.
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let firstRandom ;
    let sndRandom ;
    let thdRandom ;
function play() {
    firstRandom = random(0, arrayImg.length - 1);
    sndRandom = random(0, arrayImg.length - 1);
    thdRandom = random(0, arrayImg.length - 1);
    firstImg.src = 'img/' + show.all[firstRandom].imgSrc;
    sndImg.src = 'img/' + show.all[sndRandom].imgSrc;
    thdImg.src = 'img/' + show.all[thdRandom ].imgSrc;
    show.all[firstRandom].provide++;
    show.all[sndRandom].provide++;
    show.all[thdRandom].provide++;
}
play();
let counter = 0;
let numRoll = 25;
imgList.addEventListener('click', imgClick);
function imgClick(event)  {
    if ((event.target.id === "firstImg" || event.target.id === 'sndImg' || event.target.id === 'thdImg')
        && counter < numRoll) {
        if (event.target.id = 'firstImg') {
            show.all[firstRandom].reslut++;
        }
        if (event.target.id = 'sndImg') {
            show.all[sndRandom].reslut++;
        }
        if (event.target.id = 'thdImg') {
            show.all[thdRandom].reslut++;
        }
        play();
        counter++;
    }
  }
 clickHere.addEventListener('click', printList);
function printList() {
    const ul = document.createElement('ul');
     reslutDiv.appendChild(ul);
    for (let i = 0; i < show.all.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${show.all[i].namePro} had ${show.all[i].provide} votes, 
        and was seen ${show.all[i].reslut} times.`
        ul.appendChild(li);
    }
}
if (counter >= numRoll) {
    imgList.removeEventListener('click', changeImg);
}