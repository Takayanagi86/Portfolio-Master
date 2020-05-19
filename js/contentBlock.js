const blocks = document.querySelectorAll('.block');
const tab = document.querySelectorAll('.inside-tab');
const tabBlock = document.querySelectorAll('.tab-container');
const spanBot = document.querySelectorAll('.span-one');
const spanRight = document.querySelectorAll('.span-two');

let scroll = window.scrollY;


function checkSlide(e) {
    blocks.forEach(slideImage => {
        const imageTop = slideImage.offsetTop;
        const isBelowHeader = window.scrollY+300 <= imageTop;
        const isAboveBottom = window.scrollY+300 >= imageTop;
        if (isAboveBottom && isBelowHeader) {
         document.body.classList.add("stop-scrolling");
          slideImage.classList.add('slide');
          setTimeout(function(){ document.body.classList.remove("stop-scrolling"); }, 5000);
        } else {
          slideImage.classList.remove('slide');
        }
    });
}


window.addEventListener('scroll', checkSlide);

tab.forEach(function(el){
  el.addEventListener('click', function (e) {
    tabBlock.forEach(function(a){
      a.classList.add("tab-container-click");
      spanBot.forEach(function(a){
        a.classList.add("border-bot");
      });
      spanRight.forEach(function(a){
        a.classList.add("border-right");
      });
    });
    if (e.target && e.target.matches(".tab-container")) {
      tabBlock.forEach(function(b){
        b.classList.remove("tab-container-click");
        spanBot.forEach(function(a){
          a.classList.remove("border-bot");
        });
        spanRight.forEach(function(a){
          a.classList.remove("border-right");
        });
      });
    }
  });
});