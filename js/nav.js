const navOverlays = document.querySelectorAll('.nav-overlay');
const navBackgrounds = document.querySelectorAll('.nav-bg');
const navs = document.querySelectorAll('.nav');

function navAppear(){
    navs.forEach(overlay => {
        if(overlay.style.top == "-50px"){
            if(overlay.innerHTML == "HOME"){
                navs[0].style.top = "0px";
                navs[1].style.top = "0px";
                setTimeout(() => {
                    navs[1].classList.add('nav-scroll');
                },1000)
            }
            if(overlay.innerHTML == "INTRO"){
                setTimeout(() => {
                    navs[2].style.top = "0px";
                    navs[3].style.top = "0px";
                },300)
                setTimeout(() => {
                    navs[3].classList.add('nav-scroll');
                },1300)
            }
            if(overlay.innerHTML == "BACKGROUND"){
                setTimeout(() => {
                    navs[4].style.top = "0px";
                    navs[5].style.top = "0px";
                },600)
                setTimeout(() => {
                    navs[5].classList.add('nav-scroll');
                },1600)
            }
            if(overlay.innerHTML == "WORK"){
                setTimeout(() => {
                    navs[6].style.top = "0px";
                    navs[7].style.top = "0px";
                },900)
                setTimeout(() => {
                    navs[7].classList.add('nav-scroll');
                },1900)
            }
            if(overlay.innerHTML == "TOP"){
                setTimeout(() => {
                    navs[8].style.top = "0px";
                    navs[9].style.top = "0px";
                },1200)
                setTimeout(() => {
                    navs[9].classList.add('nav-scroll');
                },2200)
            }
        }
    });
}

function navHide(){
    navs.forEach(overlay => {
           
        if(overlay.style.top != "-50px"){
            if(overlay.innerHTML == "TOP"){
                navs[9].classList.remove('nav-scroll');
                setTimeout(() => {
                    navs[8].style.top = "-50px";
                    navs[9].style.top = "-50px";
                },1000)
            }
            if(overlay.innerHTML == "WORK"){
                setTimeout(() => {
                    navs[7].classList.remove('nav-scroll');
                },300)
                setTimeout(() => {
                    navs[6].style.top = "-50px";
                    navs[7].style.top = "-50px";
                },1300)
            }
            if(overlay.innerHTML == "BACKGROUND"){
                setTimeout(() => {
                    navs[5].classList.remove('nav-scroll');
                },600)
                setTimeout(() => {
                    navs[4].style.top = "-50px";
                    navs[5].style.top = "-50px";
                },1600)
            }
            if(overlay.innerHTML == "INTRO"){
                setTimeout(() => {
                    navs[3].classList.remove('nav-scroll');
                },900)
                setTimeout(() => {
                    navs[2].style.top = "-50px";
                    navs[3].style.top = "-50px";
                },1900) 
            }
            if(overlay.innerHTML == "HOME"){
                setTimeout(() => {
                    navs[1].classList.remove('nav-scroll');
                },1200)
                setTimeout(() => {
                    navs[0].style.top = "-50px";
                    navs[1].style.top = "-50px";
                }, 2200)
            }
        }
      
    });
   
}

window.addEventListener('load', () => {
    navs.forEach(overlay => {
        overlay.style.top = "-50px";
    })
})
navOverlays.forEach(overlay => {
    overlay.addEventListener('mouseover', () => {
        if(overlay.innerHTML == "HOME"){
            navBackgrounds[0].classList.add('bg-hover');
        }
        if(overlay.innerHTML == "INTRO"){
            navBackgrounds[1].classList.add('bg-hover');
        }
        if(overlay.innerHTML == "BACKGROUND"){
            navBackgrounds[2].classList.add('bg-hover');
        }
        if(overlay.innerHTML == "WORK"){
            navBackgrounds[3].classList.add('bg-hover');
        }
        if(overlay.innerHTML == "TOP"){
            navBackgrounds[4].classList.add('bg-hover');
        }
    });
    overlay.addEventListener('mouseout', () => {
        if(overlay.innerHTML == "HOME"){
            navBackgrounds[0].classList.remove('bg-hover');
        }
        if(overlay.innerHTML == "INTRO"){
            navBackgrounds[1].classList.remove('bg-hover');
        }
        if(overlay.innerHTML == "BACKGROUND"){
            navBackgrounds[2].classList.remove('bg-hover');
        }
        if(overlay.innerHTML == "WORK"){
            navBackgrounds[3].classList.remove('bg-hover');
        }
        if(overlay.innerHTML == "TOP"){
            navBackgrounds[4].classList.remove('bg-hover');
        }
    });
})


