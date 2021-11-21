/*====================CHANGE BACKGROUND================*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
// FORM DISCOUNT
const openFormDiscount = document.querySelector(".form-discount-toggle");
const formApply = document.querySelector(".form-apply__discount");

try {
  openFormDiscount.addEventListener("click", () => {
    formApply.classList.toggle("active");
  });
}catch (e) {
  console.log("not discount active");
}

// TAB function
function openCity(evt, containerName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(containerName).style.display = "block";
  evt.currentTarget.className += " active";
}

try {
  document.getElementById("defaultOpen").click();
}catch {
  console.log("payment page");
}

// MENU BTN 

const menuToggle = document.querySelector('#menu-hidden-btn')
const menu = document.querySelector('.nav__menu')

try {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('nav__menu-block');
  })
}catch {
  console.log("error");
}


