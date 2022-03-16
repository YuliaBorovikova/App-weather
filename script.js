const api = {
    point: 'https://api.openweathermap.org/data/2.5/',
    key: '3b6996d7ae3300468403b6a76abc0aed'
}

const input = document.querySelector('#input');
input.addEventListener('keypress', enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value); 
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.point}weather?q=${data}&lang=ru&units=metric&appID=${api.key}`);
    const result = await res.json();
    console.log(result)
    displayShow(result);
}

function displayShow(result) {
    let city = document.querySelector('#city');
    city.textContent = `${result.name}, ${result.sys.country}`;

    getShow();

    let temp = document.querySelector('#temp');
    temp.innerHTML = `${Math.round(result.main.temp)}<span>℃</span>`;

    let sunny = document.querySelector('#sunny');
    sunny.textContent = `${result.weather[0].description}`;

    let maxMin = document.querySelector('#maxMin');
    maxMin.innerHTML = `Макс: ${Math.round(result.main.temp_max)}<span>℃</span>    Мин: ${Math.round(result.main.temp_min)}<span>℃</span>`;

    let wind = document.querySelector('#wind');
    wind.innerHTML = `<img src="wind.png" alt="" width="15"> Ветер:${result.wind.speed} <span>м/с</span>`;

    let feelsLike = document.querySelector('#feelsLike');
    feelsLike.innerHTML = `${Math.round(result.main.feels_like)}<span>℃</span>`;

    let water = document.querySelector('#water');
    water.innerHTML = `${result.main.humidity}<span>％</span>`;


}




function getShow() {
    const day = new Date();
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let dayli = days[day.getDay()];
    let dat = day.getDate();
    const month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let months = month[day.getMonth()];
    let year = day.getFullYear();
    document.querySelector('#data').innerHTML = `${dayli}  ${dat}  ${months}  ${year}`;
}






