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
    const res = await fetch(`${api.point}forecast?q=${data}&units=metric&lang=ru&appid=${api.key}`);
    const result = await res.json();
    console.log(result)
    displayShow(result);
}

function displayShow(result) {
    let city = document.querySelector('#city');
    city.textContent = `${result.city.name}, ${result.city.country}`;

    getShow();

    let temp = document.querySelector('#temp');
    temp.innerHTML = `${Math.round(result.list[0].main.temp)}<span>℃</span>`;

    let sunny = document.querySelector('#sunny');
    sunny.textContent = `${result.list[0].weather[0].description}`;

    let maxMin = document.querySelector('#maxMin');
    maxMin.innerHTML = `Макс: ${Math.round(result.list[0].main.temp_max)}<span>℃</span>    Мин: ${Math.round(result.list[0].main.temp_min)}<span>℃</span>`;

    let wind = document.querySelector('#wind');
    wind.innerHTML = `<img src="wind.png" alt="" width="15"> Ветер: ${result.list[0].wind.speed} <span>м/с</span>`;

    let feelsLike = document.querySelector('#feelsLike');
    feelsLike.innerHTML = `${Math.round(result.list[0].main.feels_like)}<span>℃</span>`;

    let water = document.querySelector('#water');
    water.innerHTML = `${result.list[0].main.humidity}<span>％</span>`;

    let sunnyTwo = document.querySelector('#sunnyTwo');
    sunnyTwo.textContent = `${result.list[11].weather[0].description}`;

    let tempTwo = document.querySelector('#tempTwo');
    tempTwo.innerHTML = `${Math.round(result.list[11].main.temp)}<span>℃</span>`;

    let windTwo = document.querySelector('#windTwo');
    windTwo.innerHTML = `${result.list[11].wind.speed} <span>м/с</span>`;

    let sunnyThree = document.querySelector('#sunnyThree');
    sunnyThree.textContent = `${result.list[19].weather[0].description}`;

    let tempThree = document.querySelector('#tempThree');
    tempThree.innerHTML = `${Math.round(result.list[19].main.temp)}<span>℃</span>`;

    let windThree = document.querySelector('#windThree');
    windThree.innerHTML = `${result.list[19].wind.speed} <span>м/с</span>`;

    let sunnyFour = document.querySelector('#sunnyFour');
    sunnyFour.textContent = `${result.list[27].weather[0].description}`;

    let tempFour = document.querySelector('#tempFour');
    tempFour.innerHTML = `${Math.round(result.list[27].main.temp)}<span>℃</span>`;

    let windFour = document.querySelector('#windFour');
    windFour.innerHTML = `${result.list[27].wind.speed} <span>м/с</span>`;

    let sunnyFive = document.querySelector('#sunnyFive');
    sunnyFive.textContent = `${result.list[35].weather[0].description}`;

    let tempFive = document.querySelector('#tempFive');
    tempFive.innerHTML = `${Math.round(result.list[35].main.temp)}<span>℃</span>`;

    let windFive = document.querySelector('#windFive');
    windFive.innerHTML = `${result.list[35].wind.speed} <span>м/с</span>`;


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
