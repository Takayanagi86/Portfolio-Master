const menu = document.querySelector('#drawing2');
const cards = document.querySelectorAll('.card');
const test = document.querySelector('#rect3727-8');
const test2 = document.querySelector('.cMatrix');

const card1 = cards[0] 
const card2 = cards[1] 
const card3 = cards[2] 
const card4 = cards[3] 

const option1 = document.querySelector('.option-1');
const option2 = document.querySelector('.option-2');
const option3 = document.querySelector('.option-3');



menu.style.position = 'relative';

menu.addEventListener('focus', () => {
    card1.classList.add("card-1-focus");
    card2.classList.add("card-2-focus");
    card3.classList.add("card-3-focus");
});
menu.addEventListener('blur', () => {
    card1.classList.remove("card-1-focus");
    card2.classList.remove("card-2-focus");
    card3.classList.remove("card-3-focus");
});

card3.addEventListener('mouseover', () => {
    const hasClass = card3.classList.contains("card-3-focus");
    if (hasClass == true){
        card3.classList.add("card-3-hover");
    option1.style.display = "block";
    }
});
card3.addEventListener('mouseout', () => {
    card3.classList.remove("card-3-hover");
    option1.style.display = "none";
});
card2.addEventListener('mouseover', () => {
    const hasClass = card2.classList.contains("card-2-focus");
    if (hasClass == true){
        card2.classList.add("card-2-hover");
    option2.style.display = "block";
    }
});
card2.addEventListener('mouseout', () => {
    card2.classList.remove("card-2-hover");
    option2.style.display = "none";
});
card1.addEventListener('mouseover', () => {
    const hasClass = card1.classList.contains("card-1-focus");
    if (hasClass == true){
        card1.classList.add("card-1-hover");
    option3.style.display = "block";
    }
   
});
card1.addEventListener('mouseout', () => {
    card1.classList.remove("card-1-hover");
    option3.style.display = "none";
});

    card3.addEventListener('click',  () => {
        const block = document.querySelector('.content-one-block');
        window.scrollTo(0,2000);
        document.body.classList.add("stop-scrolling");
        block.classList.add('slide');
        setTimeout(function(){ document.body.classList.remove("stop-scrolling"); }, 5000);
    });

    card2.addEventListener('click',  () => {
        const block = document.querySelector('.content-two-block');
        window.scrollTo(0, 2700);
        document.body.classList.add("stop-scrolling");
        block.classList.add('slide');
        setTimeout(function(){ document.body.classList.remove("stop-scrolling"); }, 5000);
    });

    card1.addEventListener('click',  () => {
 
        const block = document.querySelector('.content-three-block');
        window.scrollTo(0, 3700);
        document.body.classList.add("stop-scrolling");
        block.classList.add('slide');
        setTimeout(function(){ document.body.classList.remove("stop-scrolling"); }, 5000);
    });

   
