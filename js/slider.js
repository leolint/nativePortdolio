
const images = document.querySelectorAll('.slider_wrapper img');
const sliderLine = document.getElementById('slider_wrapper');
const nextButton = document.getElementById('slider-next');
const prevButton = document.getElementById('slider-prev');
const item = document.getElementsByClassName('slider_wrapper-item');




let width = item[0].offsetWidth * images.length;
let oneItemWidth = item[1].offsetWidth



let count = 0;



nextButton.onclick = function () {
    ++count
    if (count >= images.length) {
        count = 0;
    }
    roll()
}
prevButton.onclick = function () {
    --count
    if (count < 0) {
        count = images.length - 1;
    }
    roll()
}

function roll () {
    sliderLine.style.transform = 'translate(-'+ count * oneItemWidth +'px)';
}



