let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");
let progressStartValue = 0,    
progressEndValue = 90,    
speed = 100;

let progress = setInterval(() => {
progressStartValue++;
progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nava');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')

}

const navbarLinks = document.querySelectorAll('.navbar a');
function setActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // 80px voor header hoogte
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}
