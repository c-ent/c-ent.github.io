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




var typed2 = new Typed('#greetings', {
  strings: ["<span style='color:rgb(34, 211, 238)'>Hej,</span>", "<span style='color:rgb(250, 204, 21)'>Bonjour,</span>",  "<span style='color:rgb(74, 222, 128))'>Hello,</span>","<span style='color:rgb(52, 211, 153)'>Hola,</span>","<span style='color:rgb(251, 113, 133)'>Ciao,</span>","<span style='color:rgb(250, 204, 21)'>Hallo,</span>"],
  typeSpeed: 80,
  backSpeed: 50,
  showCursor: false,
  loop: true
});





