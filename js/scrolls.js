const homeButton = document.querySelector('#homeButton')
const projectsButton = document.querySelector('#projectsButton');
const projects = document.querySelector('.projects')
const main = document.querySelector('.main')


function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth",
    })
};


projectsButton.addEventListener('click', () => {
    scrollTo(projects)
});

homeButton.addEventListener('click', () => {
    scrollTo(main)
});


window.addEventListener('scroll', () => {
    const scrolled = window.scrollY + 150;
    if (scrolled < main.clientHeight ) {
        homeButton.classList.add('borderColor');
    } else {
        homeButton.classList.remove('borderColor');
    }
    if (window.innerWidth < 500) {
        homeButton.classList.remove("borderColor")
    } else {
       
    }
    if (scrolled > main.clientHeight) {
        projectsButton.classList.add('borderColor');
    } else {
        projectsButton.classList.remove('borderColor');
    }
    if (window.innerWidth < 500) {
        projectsButton.classList.remove("borderColor")
    } else {
       
    }
});