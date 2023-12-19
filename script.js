const popupBtn = document.querySelector('.js--btn--popup');
const popup = document.querySelector('.js--popup');

popupBtn.addEventListener('click', (e) => {
    popup.classList.add('is-active');
});


popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('js--popup')) {
        popup.classList.remove('is-active');
    }
});


const blockVideos = document.querySelectorAll('.js--popup--video'),
    popupVideoSecon = document.querySelector('.js--popup--season'),
    iframeVideoSecon = document.querySelector('.js--popup-secon--video');

blockVideos.forEach(element => {
    element.addEventListener('click', () => {
        popupVideoSecon.classList.add('is-active');
        const srcVideo = element.getAttribute('data-id');
        iframeVideoSecon.setAttribute('src', srcVideo);
    })
});

popupVideoSecon.addEventListener('click', (e) => {
    if (e.target.classList.contains('js--popup--season')) {
        popupVideoSecon.classList.remove('is-active');
    }
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});