const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));


let slideIndex = 1;
let headings = ["Discover innovative ways to decorate", " We are available all across the globe", "Manufactured with the best materials"]; 
let descriptions = [

"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love." ,

"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office." ,

"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", 
 
];
  

const showSlide = n => {
  const slides = document.getElementsByClassName("hero-img");
  const heroHead = document.getElementById("hero-heading");
  const heroText = document.getElementById("hero-description");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  heroHead.innerHTML = headings[slideIndex - 1];
  heroText.innerHTML = descriptions[slideIndex - 1];
};

const nextSlide = () => {
  showSlide(slideIndex += 1);
};

const prevSlide = () => {
  showSlide(slideIndex -= 1);
};

showSlide(slideIndex);