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


let URL = 'https://api.open-meteo.com/v1/forecast?latitude=-6.1818&longitude=106.8223&current=temperature_2m,relative_humidity_2m,precipitation,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max'

async function getWeatherData() {
    try {
        const req = await fetch(URL);
        const  data = await req.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

getWeatherData();