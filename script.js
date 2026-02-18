// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Home hero rotation
const hero = document.getElementById("hero");

// Put your hero images here (we'll upload them next)
const heroImages = [
  "images/hero/hero1.jpg",
  "images/hero/hero2.jpg",
  "images/hero/hero3.jpg"
];

let i = 0;

function setHero(){
  if (!hero) return;
  hero.style.backgroundImage = `url('${heroImages[i]}')`;
  i = (i + 1) % heroImages.length;
}

setHero();
setInterval(setHero, 5000);
