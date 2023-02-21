setInterval(setAnalogClock, 1000);
setInterval(setDigitalClock, 1000);
setInterval(changeColor, 200);

//Getting the DOM element from the HTML to change them
const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

const clockHour = document.querySelector(".digital-hour");
const clockMinute = document.querySelector(".digital-minute");
const clockSecond = document.querySelector(".digital-second");
const DAY = document.querySelector(".day");

function setAnalogClock() {
  //The hands of the analog clock should rotate at the right ratio at a certain point in time
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  //calling the setRotation functions for each hand
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setDigitalClock() {
  const currentDate = new Date();
  let digitalHours = currentDate.getHours();
  let digitalMinutes = currentDate.getMinutes();
  let digitalSeconds = currentDate.getSeconds();
  let getDay = currentDate.getDay();
  let dayOfTheWeek = ["MON", "TUES", "WED", "THURS", "FRI", "SAT", "SUN"];

  //if a number is less than 10, it will get a 0 before it
  digitalHours = digitalHours < 10 ? "0" + digitalHours : digitalHours;
  digitalMinutes = digitalMinutes < 10 ? "0" + digitalMinutes : digitalMinutes;
  digitalSeconds = digitalSeconds < 10 ? "0" + digitalSeconds : digitalSeconds;

  //setting the values in the html elements
  clockHour.innerHTML = digitalHours;
  clockMinute.innerHTML = digitalMinutes;
  clockSecond.innerHTML = digitalSeconds;
  DAY.innerHTML = dayOfTheWeek[getDay];
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

function changeColor() {
  //optional, to change the hue of the document
  const hue = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--background")
  );

  document.documentElement.style.setProperty("--background", hue * 0.8);
}

changeColor();
setAnalogClock();
setDigitalClock();
