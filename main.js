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
