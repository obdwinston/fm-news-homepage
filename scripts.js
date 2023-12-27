var menu = document.querySelector(".mobile-menu");

menu.addEventListener("click", function () {
  var links = document.querySelector(".mobile-links");
  links.style.width = "65%";

  var body = document.querySelector("body");
  body.style.background = "rgba(0,0,0,0.5)";

  var close = document.querySelector(".mobile-close");
  close.addEventListener("click", function () {
    links.style.width = "0";
    body.style.background = "rgba(0,0,0,0.0)";
  });
});

anime({
  targets: ".header",
  opacity: [0, 1],
  duration: 1000,
  easing: "easeInOutQuad",
});

anime({
  targets: ".left-image",
  opacity: [0, 1],
  translateY: [-15, 0],
  duration: 500,
  easing: "easeInOutQuad",
});

anime({
  targets: ".left-title, .left-subtitle, .right",
  opacity: [0, 1],
  translateY: [15, 0],
  duration: 500,
  delay: 100,
  easing: "easeInOutQuad",
});

anime({
  targets: ".footer",
  opacity: [0, 1],
  translateY: [15, 0],
  duration: 500,
  delay: 300,
  easing: "easeInOutQuad",
});
