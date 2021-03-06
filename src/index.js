import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import batmanBackground from './images/batman-background.jpg'
import meBackground from './images/mass-effect-background.jpg'
import destinyBackground from './images/destiny-background.jpg'
import skyrimBackground from './images/skyrim-background.jpg'
import transformersBackground from './images/transformers-background.jpg'
import ps4Background from './images/PS4-background.jpg'
import blueTransBackground from './images/blue-transparent-background.png'
import greenTransBackground from './images/green-transparent-background.png'
import pinkTransBackground from './images/pink-transparent-background.png'
import redTransBackground from './images/red-transparent-background.png'
import darkTransStripeBackground from './images/dark-transparent-stripe-background.png'
import darkTransBackground from './images/dark-transparent-background.png'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// const logos = document.getElementsByClassName("logo-caption");
// This is required to give the background a starting position for all the functions to behave properly.
document.body.style.backgroundImage = `url(${blueTransBackground}), ` +
                                      `url(${darkTransStripeBackground}), ` +
                                      `url(${darkTransBackground}), ` +
                                      `url(${ps4Background})`;

// console.log(document.body.style.backgroundImage);
const logos = document.querySelectorAll('.logo-caption');
const logoColor = document.querySelectorAll('.logo');
// this for the logo that sits on top of the sticker
const stickerLogo = document.querySelector('#sticker-logos');
// console.log(stickerLogo);
//console.log(logos);
//console.log(logos[0]);

const highlight = document.createElement('span');
const footer = document.querySelector('.footer');

highlight.classList.add('highlight');

// document.body.append(highlight);
footer.append(highlight);


function highlightLink() {
  const footerCoords = footer.getBoundingClientRect();
  const linkCoords = this.getBoundingClientRect();

  // media query for highlight dimentions on smaller screens
  if (window.innerWidth < 768) {

    highlight.style.width = `${linkCoords.width+40}px`;
    highlight.style.height = `${linkCoords.height+10}px`;

    // compensate for if window has been scrolled
    highlight.style.left = `${linkCoords.left-20 + window.scrollX}px`;
    highlight.style.top = `${linkCoords.top-10 - footerCoords.top + window.scrollY}px`;
    highlight.style.display = `block`;

  } else {

  highlight.style.width = `${linkCoords.width+40}px`;
  highlight.style.height = `${linkCoords.height+30}px`;

  // compensate for if window has been scrolled
  highlight.style.left = `${linkCoords.left-20 + window.scrollX}px`;
  highlight.style.top = `${linkCoords.top-15 - footerCoords.top + window.scrollY}px`;
  highlight.style.display = `block`;
  }
}

// To prevent the highlight from being out of place when user rotates phone or general window resize:
window.addEventListener('resize', function(event){
  highlight.style.display = "none";
});

const addButton = document.querySelector('#AddToBasket');
const addButtonIcon = document.querySelector('#AddToBasketIcon');
const emptyButton = document.querySelector('#EmptyBasket');
let numItems = 0;
let cartDollars = 0;

addButton.addEventListener('click', clickAdd);

function clickAdd() {
  if (addButton.className === "btn btn-primary") {
    addButton.className = "btn btn-secondary";
    // addButton.style.border = "none";
    addButton.innerHTML =  '&nbsp;&nbsp;&nbsp;<i id="AddToBasketIcon" class="fas fa-chevron-circle-down"></i> &nbsp; Select sticker';
    numItems += 1;
    cartDollars += 5;
    emptyButton.innerHTML = `$${cartDollars} &nbsp; Basket &nbsp;<span class="badge pull-right">${numItems}</span>`;
  }
}



// THIS FUNCTION CHANGES THE STICKER LOGO AND THE BACKGROUND IMAGE
function grabElementId() {
  console.time("run")
  // let start = new Date().getTime().toFixed(3);
  // childNode[1] is used because the img is the second child inside the p element of class 'logo-caption'
  let logoId = this.childNodes[1].id;
  let game = logoId.slice(0,(logoId.length - 8));

  let new_background
  switch(game) {
    case 'batman':
      new_background = batmanBackground
      break;
    case 'destiny':
      new_background = destinyBackground
      break;
    case 'mass-effect':
      new_background = meBackground
      break;
    case 'skyrim':
      new_background = skyrimBackground
      break;
    case 'transformers':
      new_background = transformersBackground
      break;
    default:
      new_background = ps4Background
      break;
  }

  // sticker.src = `media/images/sticker-${game}-blue.png`;
  let current_background = document.body.style.backgroundImage.split(",");
  current_background[current_background.length-1] = `url(${new_background})`;

  document.body.style.backgroundImage = current_background.join(",");
// this for the logo that sits on top of the sticker
  stickerLogo.src = require(`./images/${game}-logo.png`);
  stickerLogo.style.visibility = "visible";

  let sticker = document.getElementById('sticker');
  sticker.style.visibility = "visible";

  addButton.className = "btn btn-primary";
  addButton.innerHTML = '&nbsp;&nbsp;&nbsp;<i id="AddToBasketIcon" class="fas fa-shopping-basket"></i> &nbsp; Add To Basket';

  // addButtonIcon.className = "fas fa-shopping-basket";
  // let end = new Date().getTime().toFixed(3);
  // console.log((end - start).toFixed(3));
  console.timeEnd("run");
}

const colors = document.querySelectorAll('.colors');

// THIS FUNCTION CHANGES THE COLOR OF THE LOGOS, THE STICKER LOGOS & THE BACKGROUND GRADIENT
function changeColor() {
  let color = this.id;
  colors.forEach(element => {
      element.style.height = "1.0em";
      element.style.width = "1.0em";
      // element.style.borderColor = "grey";
  });
  this.style.height = "1.3em";
  this.style.width = "1.3em";
  // this.style.borderColor = "white";

  let current_background = document.body.style.backgroundImage.split(",");

  // if (current_background.length > 3) {

  let newColorBackground
  switch(color) {
    case 'blue':
      newColorBackground = blueTransBackground;
      break;
    case 'green':
      newColorBackground = greenTransBackground;
      break;
    case 'pink':
      newColorBackground = pinkTransBackground;
      break;
    case 'red':
      newColorBackground = redTransBackground;
      break;
  }

  current_background[0] = `url(${newColorBackground})`;
  // } else {
    // current_background.unshift(`url('media/images/${color}-transparent-background.png')`);
  // }

  document.body.style.backgroundImage = current_background.join(",");

  // topColor bar element:
  let topShade;
  switch (color) {
    case "pink":
      topShade = "rgb(201,54,242)";
      break;
    case "blue":
      topShade = "rgb(0,113,244)";
      break;
    case "red":
      topShade = "rgb(255,48,80)";
      break;
    case "green":
      topShade = "rgb(0,152,27)";
      break;
    // default:
  }
  let topColor = document.getElementById('topColor');
  topColor.style.backgroundColor = `${topShade}`;
  // topColor.style.height = "3px";
  // topColor.style.width = "100%";


  let hue_degree;
  switch (color) {
    case "pink":
      hue_degree = 70;
      break;
    case "blue":
      hue_degree = 0;
      break;
    case "red":
      hue_degree = 130;
      break;
    case "green":
      hue_degree = 280;
      break;
    // default:
  }
  // stickerLogo.style.-webkit-filter = ` hue-rotate(${hue-degree}deg)`;
  stickerLogo.style.webkitFilter = `hue-rotate(${hue_degree}deg)`;
  // logoColor.forEach(element => element.style.webkitFilter = `hue-rotate(${hue_degree}deg)`);
  let controller = document.getElementById('controller');
  controller.style.webkitFilter = `hue-rotate(${hue_degree}deg)`;
}

colors.forEach(event => event.addEventListener('click', changeColor));


// when mouse moves over each element in "logos"
logos.forEach(event => event.addEventListener('mouseenter', highlightLink));
// this changes background and sticker when user clicks on any of the logos (or captions)
logos.forEach(event => event.addEventListener('click', grabElementId));
