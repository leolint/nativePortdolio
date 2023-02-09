const contactsButton = document.getElementById("contactsButton");

const mobileButton = document.getElementById('mobileButton');

const headerNav = document.getElementById('header_nav')

const dropDownMenu = document.getElementById('dropdownMenu')


mobileButton.onclick = function () {
    headerNav.classList.toggle('openMobileMenu')

    if (!headerNav.classList.contains('openMobileMenu') || dropDownMenu.classList.contains('open')  ) {

        headerNav.classList.remove('openMobileMenu')
    }else {
       
    }

    if (!headerNav.classList.contains('openMobileMenu')) {
        dropDownMenu.classList.remove('open')
    } else {
       
    }
}


contactsButton.onclick = function () {
    dropDownMenu.classList.toggle("open")
    contactsButton.classList.toggle("borderColor")
    if (window.innerWidth < 500) {
        contactsButton.classList.remove("borderColor")
    } else {
       
    }
};