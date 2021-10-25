const refs = {
    img: document.querySelectorAll('img'),
    slider: document.querySelector('.slider'), 
    sliderLine: document.querySelector('.slider-line'),
    btnPrev: document.querySelector('.slider-prev'),
    btnNext: document.querySelector('.slider-next'),
}

let count = 0;
let width;

function init() {
    console.log('resize');
    width = refs.slider.offsetWidth;
    refs.sliderLine.style.width = width * refs.img.length + 'px';
    refs.img.forEach(items => {
        items.style.width = width + 'px';
        items.style.height = 'auto';
    });
    console.log(width);
}
window.addEventListener('resize', init);

refs.btnNext.addEventListener('click', onClickNext);
refs.btnPrev.addEventListener('click', onClickPrev);

function onClickNext() {
    count++;
    if (count >= refs.img.length) {
        count = 0;
    }
    refs.sliderLine.style.transform = `translate(-${count * width}px)`;
    console.log(count);
}
function onClickPrev() {
    count--;
    if (count < 0) {
        count = refs.img.length - 1;
    }
    refs.sliderLine.style.transform = `translate(-${count * width}px)`;
    console.log(count);
}