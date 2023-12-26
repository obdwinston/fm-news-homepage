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
