'use strict';

let arrayImg =[
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-dcuk.jpg',
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
let all =[];

let imgList =document.getElementById('imgList');
let firstImg=document.getElementById('firstImg');
let sndImg=document.getElementById('sndImg');
let thdImg=document.getElementById('thdImg');



function show (namePro, srcOfImg){
    this.namePro = namePro;
    this.imgSrc = srcOfImg;
    this.provide=0;
    show.all.push(this);
}
show.all=[ ];

for(let i=0; i< arrayImg.length ;i++){
new show(arrayImg[i].split('.')[0],arrayImg[i]);
}
// Create an algorithm that will randomly generate three unique product 
// images from the images directory and
//  display them side-by-side-by-side in the browser window.
function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function play(){
    let firstRandom=random(0, arrayImg.length-1);
    let sndRandom=random(0,arrayImg.length-1);
    let thdRandom=random(0,arrayImg.length-1);

    firstImg.src ='../img/'+ show.all[firstRandom].imgSrc;
     sndImg.src='../img/'+show.all[sndRandom].imgSrc;
     thdImg.src='../img/'+show.all[thdRandom].imgSrc;

    show.all[firstRandom].provide++;
    show.all[sndRandom].provide++;
    show.all[thdRandom].provide++;
}
play();



// For each of the three images, increment its
//  property of times it has been shown by one

let counter=0;
imgList.addEventListener('click', imgClick);
function imgClick(event){
    let numRoll=25;
    if((event.target.id === "firstImg" || event.target.id === 'sndImg' || event.target.id ==='thdImg')
     && counter<numRoll){
play();
counter++;
console.log(counter);
  } 
  console.log(event)

     for (let i =0 ; i <numRoll;i++){
        if (event.target.id = play() ){
            document.getElementById("submit").onclick = displayDate;
              function displayDate() {
              //  banana had 3 votes, and was seen 5 times.
               return[`${namePro} had ${track} votes, and was seen ${provide} times.`]}}
     }
    }
            