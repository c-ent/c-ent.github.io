setTimeout(function () {
  
  document.getElementById('intro-id').style.display = 'none'
}, 3000)


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