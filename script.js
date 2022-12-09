// setTimeout(function () {
  
//   document.getElementById('intro-id').style.display = 'none'
// }, 3000)
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#loading").style.visibility = "visible";
  } else {
      document.querySelector(
        "#loading").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
  }
};

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(typeWriter, 1000);

});
function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "You disturbed the doggo " + localStorage.clickcount + " times.";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


var i = 0;
var txt = 'A web/software developer student from Philippines. I aim to deepen my understanding in various areas of technology and product development.';
var speed = 15;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

