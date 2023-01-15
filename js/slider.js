
const images = document.querySelectorAll('.slider_wrapper img');
const sliderLine = document.getElementById('slider_wrapper');
const nextButton = document.getElementById('slider-next');
const prevButton = document.getElementById('slider-prev');
const item = document.getElementById('item');


let width = item.offsetWidth * images.length;
let itemWidth = item.offsetWidth;

console.log(itemWidth);
let count = 0;

nextButton.onclick = function () {
    ++count
    console.log(count);
    if (count >= images.length) {
        count = 0;
    }
    roll()
}
prevButton.onclick = function () {
    --count
    console.log(count);
    if (count < 0) {
        count = images.length - 1;
    }
    roll()
}

function roll () {
    sliderLine.style.transform = 'translate(-'+ count * itemWidth +'px)';
}





console.log(width);
console.log(images);