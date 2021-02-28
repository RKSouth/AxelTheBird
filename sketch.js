


function preload() {
  //pictures
  imgFlybird = loadImage('Images/Fly.png');
  imgAxelTheBird = loadImage('Images/AxelTheBird.png')
  imgLake = loadImage('Images/Lake.png');
  imgNeighborhood = loadImage('Images/Neighborhood.png');
  imgForestFloor = loadImage('Images/ForestFloor.png');
  imgSadAxel = loadImage('Images/SadAxel.png');
  imgTheFly = loadImage('Images/TheFly.png');
  imgWorm = loadImage('Images/Worm.png');
  imgWindow1 = loadImage('Images/WINDOW1.png');
  imgTheGround = loadImage('Images/TheGround.png');
  imgTheForest = loadImage('Images/TheForest.png');
  imgNest = loadImage('Images/Nest.png')
  imgBirdHead =loadImage('Images/BirdHead.png');
  imgBirdBody =loadImage('Images/BirdBody.png');
}

var Location = 'Intro'
var mySound;
var slider;
var button;
function setup() {
  createCanvas(600, 600);
  background(200, 245, 245);
  frameRate(0.7);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  slider = createSlider(0,1,0.5,0.01);
mySound = loadSound('Recording.mp3',loaded); //the sound isn't loading everytime

//music I made on my keyboard
}
function loaded(){
  console.log("loaded");
}
function togglePlaying() {
  if (!mySound.isPlaying()) {
    mySound.play();
    mySound.setVolume(0.3);
    button.html("pause");
  } else {
    mySound.pause();
    button.html("play");
  }
}
function draw() {
let imgHeight = 500;
let imgWidth = 500;
let imgLocX = 50;
let imgLocY = 50;
mySound.setVolume(slider.value());



switch (Location) {//BEGINNING OF SWITCH

//Introduction

case 'Intro':
  image(imgAxelTheBird, imgLocX, imgLocY,imgHeight,imgWidth)
  if (random(1) > 0.5) {
    Location = 'AxelTheBird';
  } else {
    Location = 'Nest';
  }
  break;

    //MAIN PAGE
    case 'AxelTheBird':
      image(imgFlybird,  imgLocX, imgLocY,imgHeight,imgWidth)
      if (random(1) > 0.5) {
        Location = 'TheForest';
      } else {
        Location = 'Neighborhood';
      }
      break;

      //FOREST TREE
    case 'TheForest':
      image(imgTheForest,  imgLocX, imgLocY,imgHeight,imgWidth)
      if (random(1) > 0.5) {
        Location = 'ForestFloor';
      } else {
        Location = 'Lake';
      }
      break;

    case 'ForestFloor':
      image(imgForestFloor,  imgLocX, imgLocY,imgHeight,imgWidth)
      if (random(1) > 0.5) {
        Location = 'FindWorms';
      } else {
        Location = 'CryBaby';
      }
      break;

    case 'Lake':
      image(imgLake,  imgLocX, imgLocY,imgHeight,imgWidth)
      if (random(1) > 0.5) {
        Location = 'FindBugs';
      } else {
        Location = 'CryBaby';
      }
      break;

//results
      case 'FindBugs':
        image(imgTheFly,  imgLocX, imgLocY,imgHeight,imgWidth)
        if (random(1) > 0.5) {
          Location = 'AxelTheBird';
        } else {
          Location = 'Nest';
        }
        break;

      case 'CryBaby':
        image(imgSadAxel, imgLocX, imgLocY,imgHeight,imgWidth)

        if (random(1) > 0.5) {
          Location = 'AxelTheBird';
        } else {
          Location = 'AxelTheBird';
        }
        break;

        case 'FindWorms':
          image(imgWorm,  imgLocX, imgLocY,imgHeight,imgWidth)
          if (random(1) > 0.5) {
            Location = 'AxelTheBird';
          } else {
            Location = 'Nest';
          }
          break;
          case 'Nest':
          push();
            image(imgNest,  imgLocX, imgLocY,imgHeight,imgWidth)
            image(imgBirdBody,230,200,100,100)
           rotate(0.7)
            image(imgBirdHead,360,-100,70,70)
            pop();
            if (random(1) > 0.5) {
              Location = 'AxelTheBird';
            } else {
              Location = 'AxelTheBird';
            }
            break;

      //NEIGHBORHOOD TREE
      case 'Neighborhood':
        image(imgNeighborhood, imgLocX, imgLocY,imgHeight,imgWidth)
        if (random(1) > 0.5) {
          Location = 'TheGround';
        } else {
          Location = 'Window';
        }
        break;
        case 'TheGround':
          image(imgTheGround,  imgLocX, imgLocY,imgHeight,imgWidth)
          if (random(1) > 0.5) {
            Location = 'FindWorms';
          } else {
            Location = 'CryBaby';
          }
          break;
          case 'Window':
            image(imgWindow1, imgLocX, imgLocY,imgHeight,imgWidth)
            if (random(1) > 0.5) {
              Location = 'FindBugs';
            } else {
              Location = 'CryBaby';
            }
            break;
////////DEFAULT!!!!!!
    default:
      Location = 'AxelTheBird';


  } //end of switch
}  //end of draw
