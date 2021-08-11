'use strict';
// localStorage.clear();

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
let counter = 0;
let numRoll = 24;

let imgList = document.getElementById('imgList');
let firstImg = document.getElementById('firstImg');
let sndImg = document.getElementById('sndImg');
let thdImg = document.getElementById('thdImg');

function show(namePro, srcOfImg,provide=0,reslut=0) {
    this.namePro = namePro;
    this.imgSrc = srcOfImg;
    this.provide= provide;
    this.reslut = reslut;
    show.all.push(this);
}
show.all = [];
getData();
console.log(show.all)
// for (let i = 0; i < arrayImg.length; i++) {
//     new show(arrayImg[i].split('.')[0], arrayImg[i]);
// }

// Create an algorithm that will randomly generate three unique product 
// images from the images directory and
//  display them side-by-side-by-side in the browser window.
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let firstRandom;
let sndRandom;
let thdRandom;
let previousArray = [];
function play() {
    do {
        firstRandom = random(0, arrayImg.length - 1);
        sndRandom = random(0, arrayImg.length - 1);
        thdRandom = random(0, arrayImg.length - 1);
    } while (firstRandom === sndRandom
    || firstRandom === thdRandom
    || sndRandom === thdRandom
    || previousArray.includes(firstRandom)
    || previousArray.includes(sndRandom)
        || previousArray.includes(thdRandom));

    previousArray = [firstRandom, sndRandom, thdRandom];

    firstImg.src = 'img/' + show.all[firstRandom].imgSrc;
    sndImg.src = 'img/' + show.all[sndRandom].imgSrc;
    thdImg.src = 'img/' + show.all[thdRandom].imgSrc;

    show.all[firstRandom].provide++;

    if (firstRandom === sndRandom && sndRandom === thdRandom) {
        show.all[sndRandom].provide++;
    }
    else {
        show.all[thdRandom].provide++;
        
    }
    localStorage.data = JSON.stringify(show.all);
    console.log(show.all);

}

play();

imgList.addEventListener('click', imgClick);
function imgClick(event) {
    if ((event.target.id === "firstImg" || event.target.id === 'sndImg' ||
     event.target.id === 'thdImg')
        && counter <= numRoll) {
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
    } else {
        busMallChart();
    }
}
show.prototype.getName = function () {
    console.log('test')
}

clickHere.addEventListener('click', printList);
function printList() {
    if (counter > numRoll) {
        const ul = document.createElement('ul');
        reslutDiv.appendChild(ul);
        for (let i = 0; i < show.all.length; i++) {
            let li = document.createElement('li');
            li.textContent = `${show.all[i].namePro} had ${show.all[i].provide} votes, 
        and was seen ${show.all[i].reslut} times.`
            ul.appendChild(li);
        }
    }
}
 if (counter >= numRoll) {
     imgList.removeEventListener('click', changeImg);
}
////////// create chart

function busMallChart() {
    let nameArry = [];
    let resultArray = [];
    let provideArray = [];
    for (let i = 0; i < show.all.length; i++) {
        nameArry.push(show.all[i].namePro);
        provideArray.push(show.all[i].provide);
        resultArray.push(show.all[i].reslut);
        
    }
    let ctx = document.getElementById('myChart').getContext('2d');

    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: nameArry,
        datasets: [{
          label: '# click',
          data: provideArray,
          backgroundColor:
            '#3C8DAD',
          borderColor:
            '#F5A962',
          // backgroundColor:
          //         '#125D98',
  
          // borderColor: 
          //   '#DDDDDD'
  
          borderWidth: 2,
          order: 2,
          font: {
            size: 30
          }
        }, {
          label: '# shown',
          data: resultArray,
          hoverBackgroundColor: '#125D98',
          hoverBorderColor: '#DDDDDD',
  
          borderWidth: 2,
          // type: 'line',
          // this dataset is drawn on top
          order: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 20
              }, color: 'black'
              ,
            }
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "black",
              stepSize: 1,
              beginAtZero: true
            }
          }]
        }
      }
    });}


function getData() {
    if (localStorage.data) {
        let data = JSON.parse(localStorage.data);
        for (let i = 0; i < arrayImg.length ; i++) {
            new show( data[i].namePro, data[i].imgSrc, data[i].provide,data[i].reslut);
        }
    }
    else {
        for (let i = 0; i < arrayImg.length; i++) {
            new show(arrayImg[i].split('.')[0], arrayImg[i]);

        }
    }
}
