window.addEventListener("load", function () {
  let loader = document.getElementById("loader");
  loader.classList.add("fade");

  setTimeout(() => {
    loader.style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 500);
});

let button = document.querySelector(".light_button");

button.addEventListener("click", () => {
  document.body.classList.toggle("lightmode");

  if (document.body.classList.contains("lightmode")) {
    button.innerHTML = "☀️ Mode";
  } else {
    button.innerHTML = "🌙 Mode";
  }
});

let btn = document.querySelector(".mode-btn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("neon");
});

let blood_btn = document.querySelector(".blood_btn");

blood_btn.addEventListener("click", () => {
  document.body.classList.toggle("blood");
});

let hack_btn = document.querySelector(".hack_btn");

hack_btn.addEventListener("click", () => {
  document.body.classList.toggle("hack");
});

// let border_button = document.querySelector(".border_button");
// let cards = document.querySelectorAll(".card");

// border_button.addEventListener("click", () => {
//   cards.forEach((card) => {
//     card.classList.toggle("big-border");
//   });
// });

const planet_card = document.querySelector(".planet_card");
const planet_circle1 = document.querySelector(".planet_circle1");
const planet_circle2 = document.querySelector(".planet_circle2");
const planet_animation = document.querySelector(".planet_animation");
const planet_animation2 = document.querySelector(".planet_animation2");


planet_card.addEventListener("click", () => {
  if (planet_circle1.classList.contains("planet_animation")) {
    planet_circle1.classList.remove("planet_animation");
  }else{
    planet_circle1.classList.add("planet_animation");
  }
});
planet_card.addEventListener("click", () => {
  if (planet_circle2.classList.contains("planet_animation2")) {
    planet_circle2.classList.remove("planet_animation2");
  }else{
    planet_circle2.classList.add("planet_animation2");
  }
});
