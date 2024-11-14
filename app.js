const dailyBoxNode = document.getElementById('daily-info');
const buttonScrollLeft = document.getElementById('btn-scroll-left');
const buttonScollRight = document.getElementById('btn-scroll-right');

function scrollDailyRight() {
    dailyBoxNode.scrollLeft += 200;
}

function scrollDailyLeft() {
    dailyBoxNode.scrollLeft -= 200;
}

buttonScollRight.addEventListener('click', scrollDailyRight);
buttonScrollLeft.addEventListener('click', scrollDailyLeft);