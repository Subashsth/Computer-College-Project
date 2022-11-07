document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});



const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }
        else {
            counter.innerText = target;
        }
    };
    updateCounter();
})


// var carouselWidth = $('.carousel-inner')[0].scrollWidth;
// var cardWidth = $('.carousel-item').width();

// var scrollPosition = 0;
// $('.carousel-control-next').on('click', function () {
//     if (scrollPosition < (carouselWidth - (cardWidth * 3))) {
//         scrollPosition = scrollPosition + cardWidth;
//         $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
//     }
// });
// $('.carousel-control-prev').on('click', function () {
//     if (scrollPosition > 0) {
//         scrollPosition = scrollPosition - cardWidth;
//         $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
//     }
// });