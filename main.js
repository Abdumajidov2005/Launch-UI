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

const planet_card = document.querySelector(".planet_card");
const planet_circle1 = document.querySelector(".planet_circle1");
const planet_circle2 = document.querySelector(".planet_circle2");
const planet_animation = document.querySelector(".planet_animation");
const planet_animation2 = document.querySelector(".planet_animation2");

planet_card.addEventListener("click", () => {
  if (planet_circle1.classList.contains("planet_animation")) {
    planet_circle1.classList.remove("planet_animation");
  } else {
    planet_circle1.classList.add("planet_animation");
  }
});
planet_card.addEventListener("click", () => {
  if (planet_circle2.classList.contains("planet_animation2")) {
    planet_circle2.classList.remove("planet_animation2");
  } else {
    planet_circle2.classList.add("planet_animation2");
  }
});

let rockets = document.querySelectorAll(".rocket");
let rocket_card = document.querySelector(".rocket_card");

rocket_card.addEventListener("click", () => {
  rockets.forEach((rocket) => {
    rocket.classList.toggle("rocket_animation");
  });
});

let tools = document.querySelectorAll(".tool");
let tech_stack = document.querySelector(".tech_stack");

tech_stack.addEventListener("click", () => {
  tools.forEach((tool) => {
    tool.classList.toggle("tool_animation");
  });
});

// 1. kvadrat shaklidagi bog'ning tomoni 10m. Bog'ning yuzini topadigan dastur tuzilsin.

// var a = prompt("1-masala- bog'ni tomnini yoz, men senga yuzini topib beraman");
// 2. Foydalanuvchidan Ismi va yoshi so'ralsin va console da "Assalomu alaykum ISM. Siz falonchi yilda tug'ilgansiz" deb chiqsin.
// 3. foydalanuvchidan 3 ta son so'ralsin bu sonlarning yig'indisi va ko'paytmasining o'rta arifmetigi hisoblansin.
// 4. kvadrat shaklidagi bog'ning tomoni 8m. Bog'ning yuzi va perimetrini topadigan dastur tuzilsin.
// 5. Foydalanuvchidan Ismi va  yoshi va kasbi so'ralsin va console da "Assalomu alaykum ISM. Siz falonchi yilda tug'ilgansiz kasbingiz ——" deb chiqsin
// 6. foydalanuvchidan 3 ta son so'ralsin bu sonlarning yig'indisi va ko'paytmasining o'rta arifmetigi hisoblansin.
// 7. ikkita ixtiyoriy sonlarni yig'indisi, ko'paytmasi va har bir sonning kvadratlari aniqlansin.
// 8. 2 ta uchburchak berilgan. uchburchaklarning perimetrlari o'rta arifmetigi topilsin.
// 1-uchburchak tomonlari 3, 4, 5
// 2-uchburchak tomonlari 6, 8 , 10
// 9. foydalanuvchidan yoshi so'ralsin va unga siz 50 ga kirishizga falon yil bor deb chqarib bersin.
// 10. let yordamida o‘z ismingizni saqlang va alert orqali ekranga chiqaring.
// 11. Foydalanuvchidan bitta son so‘rang va uning kvadratini alert bilan chiqaring.
// 12. Foydalanuvchidan ism va familiyasini alohida prompt bilan so‘rab, "Familiya Ism" shaklida alert bilan chiqaring.
