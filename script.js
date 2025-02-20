
// ===== responsive navbar button code ======//

const mobile_navbar_btn = document.querySelector(".mobile-navbar-btn");

const nav = document.querySelector("nav");
nav.classList.remove("active")


const toggle_nav_bar = () => {

  nav.classList.toggle("active");

};

mobile_navbar_btn.addEventListener("click", () => toggle_nav_bar());

 

//==================    ======================================//


