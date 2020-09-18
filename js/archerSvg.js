const arrow = document.querySelector('.arrow')



function checkScroll(e) {
    let scroll = window.scrollY;
    switch (scroll) {
        case 1600:
            arrow.style.transform = "translateX(0px)";
            break;
        case 1700:
            arrow.style.transform = "translateX(300px)";
            break;
        case 1800:
            arrow.style.transform = "translateX(600px)";
            break;
        case 1900:
            arrow.style.transform = "translateX(900px)";
            break;
        case 2000:
            arrow.style.transform = "translateX(1200px)";
            break;
        case 2100:
            arrow.style.transform = "translateX(1500px)";
            break;
        default:
            break;
    }
}


window.addEventListener('scroll', checkScroll);