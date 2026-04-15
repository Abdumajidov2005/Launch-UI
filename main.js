window.addEventListener("load", function () {
  let loader = document.getElementById("loader");
  loader.classList.add("fade");

  setTimeout(() => {
    loader.style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 500);
});


