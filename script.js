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

// cursor options
let acOptions = {
  color: '#fff',
  outerAlpha: 0.4,
  size: {
    inner: 8,
    outer: 38
  },
  hoverScale: {
    mixBlendMode: 'exclusion',
    inner: 0.5,
    outer: 1.4
  },
  clickScale: {
    inner: 1.4,
    outer: 0.1,
    mixBlendMode: 'exclusion'
  }
}


document.addEventListener('DOMContentLoaded', function() {
  
let blendOpts = {
  cursorInnerSelector: '#cursor-inner',
  cursorOuterSelector: '#cursor-outer',
  cursorInnerStyles: {
    backgroundColor: '#fff',
    mixBlendMode: 'exclusion'
  },
  cursorOuterStyles: {
    backgroundColor: 'var(--cursor-color)',
    mixBlendMode: 'exclusion'
  },
  size: {
    inner: 8,
    outer: 35
  },
  hoverScale: {
    inner: 0.5,
    outer: 1.7
  },
  clickScale: {
    inner: 1.4,
    outer: 0.1
  }
}

const ac = window.animatedCursor(acOptions)

ac.init() 
});




var typed2 = new Typed('#greetings', {
  strings: ["<span style='color:rgb(34, 211, 238)'>Hej,</span>", "<span style='color:rgb(250, 204, 21)'>Bonjour,</span>",  "<span style='color:rgb(74, 222, 128))'>Hello,</span>","<span style='color:rgb(52, 211, 153)'>Hola,</span>","<span style='color:rgb(251, 113, 133)'>Ciao,</span>","<span style='color:rgb(250, 204, 21)'>Hallo,</span>"],
  typeSpeed: 80,
  backSpeed: 50,
  showCursor: false,
  loop: true
});












