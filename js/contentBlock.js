const blocks = document.querySelectorAll('.block');
const tab = document.querySelectorAll('.inside-tab');
const tabBlock = document.querySelectorAll('.tab-container');
const tabOverlay = document.querySelectorAll('.tab-content')
const spanBot = document.querySelectorAll('.span-one');
const spanRight = document.querySelectorAll('.span-two');
const parallax = document.querySelectorAll('.parallax-image');
const carouselImages = document.querySelectorAll('.slick-slide');
const tabOne = document.querySelector('.tab-content-one');
const tabTwo = document.querySelector('.tab-content-two');
const tabThree = document.querySelector('.tab-content-three');
const tabButton = document.querySelectorAll('.fa-angle-right');
const overlay = document.querySelector('.overlay');

let scroll = window.scrollY;


function display() {
  
  if(carouselImages[0].classList.contains('slick-active')){
    tabOne.classList.add('display')
    carouselImages[0].focus();
  } 
  if (carouselImages[1].classList.contains('slick-active')) {
    tabTwo.classList.add('display')
    carouselImages[1].focus();
  }
  if (carouselImages[2].classList.contains('slick-active')) {
    tabThree.classList.add('display')
    carouselImages[2].focus();
  }
}

function removeTab(){
  tabOverlay.forEach(function(){
    tabBlock.forEach(function(b){
      b.classList.remove("tab-container-click");
      tabOverlay.forEach(function(c){
        c.classList.remove('display');
      });
      spanBot.forEach(function(a){
        a.classList.remove("border-bot");
      });
      spanRight.forEach(function(a){
        a.classList.remove("border-right");
      });
    });
  });
}


function addColour() {
  parallax.forEach(parallaxImage => {
    parallaxImage.classList.add('parallax-colour');
  });
}

function removeColour() {
  parallax.forEach(parallaxImage => {
    parallaxImage.classList.remove('parallax-colour');
  });
}

function checkSlide(e) {
    blocks.forEach(slideImage => {
        const imageTop = slideImage.offsetTop;
        const isBelowHeader = window.scrollY+300 <= imageTop;
        const isAboveBottom = window.scrollY+300 >= imageTop;
        if (isAboveBottom && isBelowHeader) {
         document.body.classList.add("stop-scrolling");
          slideImage.classList.add('slide');
          addColour();
          setTimeout(function(){ document.body.classList.remove("stop-scrolling"); }, 5000);
        } else {
          if (slideImage.classList.contains('slide')){
            removeColour();
          }
          slideImage.classList.remove('slide');
        }
    });
}




tab.forEach(function(el){
  el.addEventListener('click', function (e) {
    if (e.target && e.target.matches(".inside-tab")) {
      tabBlock.forEach(function(a){
        a.classList.add("tab-container-click");
        spanBot.forEach(function(a){
          a.classList.add("border-bot");
        });
        spanRight.forEach(function(a){
          a.classList.add("border-right");
        });
      if(e.target && e.target.matches('.i-t-carousel')){
        display();
      }
      overlay.classList.add('display');
      document.body.classList.add("stop-scrolling");
    });
    }
  });
});

tabButton.forEach(function(el){
  el.addEventListener('click', function(e){
    if (e.target && e.target.matches(".fa-angle-right")) {
      tabBlock.forEach(function(a){
        a.classList.add("tab-container-click");
        spanBot.forEach(function(a){
          a.classList.add("border-bot");
        });
        spanRight.forEach(function(a){
          a.classList.add("border-right");
        });
      if(e.target && e.target.matches('.i-t-carousel')){
        display();
      }
      overlay.classList.add('display');
      document.body.classList.add("stop-scrolling");
    });
    }
  });
});

window.addEventListener('scroll', checkSlide);

overlay.addEventListener('click', () => {
  removeTab();
  overlay.classList.remove('display');
  document.body.classList.remove("stop-scrolling");
});