

const hourE1 = document.querySelector(".hour");

const minuteE1 = document.querySelector(".minute");

const secondE1 = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date();
    setTimeout(updateClock, 1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    console.log(hour + " " + minute + " " + second);

    const hourDeg = (hour / 12) * 360;

    hourE1.style.transform = `rotate(${hourDeg}deg)`;

    const minDeg = (minute / 60) * 360;

    minuteE1.style.transform = `rotate(${minDeg}deg)`;

    const secDeg = (second / 60) * 360;

    secondE1.style.transform = `rotate(${secDeg}deg)`;
}

updateClock();
