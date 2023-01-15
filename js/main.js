const homeButton = document.querySelector('#home')

const button = document.querySelector('#projects');

const projects = document.querySelector('.projects')

const main = document.querySelector('.main')

const contactsButton = document.getElementById("contacts");

const mobileButton = document.getElementById('mobileButton');

const headerNav = document.getElementById('header_nav')

const dropDownMenu = document.getElementById('dropdownMenu')



contactsButton.onclick = function () {
    dropDownMenu.classList.toggle("open")
    document.getElementById("contacts").classList.toggle("borderColor")
};

mobileButton.onclick = function () {
    headerNav.classList.toggle('openMobileMenu')

    if (!headerNav.classList.contains('openMobileMenu') || dropDownMenu.classList.contains('open')  ) {

        headerNav.classList.remove('openMobileMenu')
    }else {
        console.log();
    }

    if (!headerNav.classList.contains('openMobileMenu')) {
        dropDownMenu.classList.remove('open')
    } else {
        console.log('1');
    }
}


//SCROLLS

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth",
    })
};


button.addEventListener('click', () => {
    scrollTo(projects)
});

homeButton.addEventListener('click', () => {
    scrollTo(main)
});


window.addEventListener('scroll', () => {
    const scrolled = window.scrollY + 150;
    console.log(scrolled);
    if (scrolled < main.clientHeight ) {
        document.getElementById('home').classList.add('borderColor');
    } else {
        document.getElementById('home').classList.remove('borderColor');
    }
    if (scrolled > main.clientHeight) {
        document.getElementById('projects').classList.add('borderColor');
    } else {
        document.getElementById('projects').classList.remove('borderColor');
    }
});

//ASIDE MENU

function allMenuLogic() {
    let observsStack = [];
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const alreadyInStack = observsStack.some(item => item === entry.target.id);
            const isLast = observsStack.length - 1 === observsStack.findIndex(item => item === entry.target.id);
            if (entry.isIntersecting && !alreadyInStack) {
                let technologies;
                observsStack.push(entry.target.id);
                technologies = document.getElementById(`${entry.target.id}_step`);
                technologies.classList.add("openText");
            }
            if (!entry.isIntersecting && alreadyInStack && isLast) {
                observsStack.pop();
                technologies = document.getElementById(`${entry.target.id}_step`);
                technologies.classList.remove("openText");
            }
            if (!entry.isIntersecting && alreadyInStack) {
                observsStack.shift();
                technologies = document.getElementById(`${entry.target.id}_step`);
                technologies.classList.remove("openText");
            }
        }
        );
    });

    const main_wrapper = document.getElementById('main_wrapper');
    const projects_wrapper = document.getElementById('projects_wrapper');
    const slider_wrapper = document.getElementById('slider_wrapper');
    const feedback_wrapper = document.getElementById('feedback_wrapper');
    observer.observe(main_wrapper);
    observer.observe(projects_wrapper);
    observer.observe(slider_wrapper); 
    observer.observe(feedback_wrapper);
}

allMenuLogic();


