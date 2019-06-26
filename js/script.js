//event listeners
const mask = document.querySelector('#mask');



// countdown
let target_date = new Date("2019-08-19 00:00").getTime();
let days, hours, minutes, seconds;
let countdown = document.getElementById("countdown");

setInterval(function() {
  let current_date = new Date().getTime();
  let seconds_left = (target_date - current_date) / 1000;

  days = parseInt(seconds_left / 86400);
  seconds_left = seconds_left % 86400;

  hours = parseInt(seconds_left / 3600);
  seconds_left = seconds_left % 3600;

  minutes = parseInt(seconds_left / 60);
  seconds = parseInt(seconds_left % 60);

  countdown.innerHTML =
   "&nbsp;" + days + " Days " + hours + "h " + minutes + "m " + seconds + "s &nbsp;";
}, 1000);
