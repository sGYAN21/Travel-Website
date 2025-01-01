const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {

  menus.classList.add("display"); // Show the menu
  menuBtn.style.display = "none"; // Hide the menu button
  closeBtn.style.display = "block"; // Show the close button
});

closeBtn.addEventListener("click", () => {
  menus.classList.remove("display"); // Hide the menu
  closeBtn.style.display = "none"; // Hide the close button
  menuBtn.style.display = "block"; // Show the menu button

});

//scroll sticky navbar start
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    header.classList.add("sticky");
  }
  // console.log(document.documentElement.scrollTop);
  else {
    header.classList.remove("sticky");
  }
});
//scroll sticky navbar end

// static numbers start

const countersEL = document.querySelectorAll(".numbers");
countersEL.forEach((counters) => {
  counters.textContent = 0;

  increamentCounters();

  function increamentCounters() {
    let currentNum = +counters.textContent;
    const dataCeil = counters.getAttribute("data-ceil");

    const increament = dataCeil / 100;

    currentNum = Math.ceil(currentNum + increament);
    if (currentNum < dataCeil) {
      counters.textContent = currentNum;
      setTimeout(increamentCounters, 70);
    }
    else {
      counters.textContent = dataCeil;
    }
  }
});
// static numbers end
