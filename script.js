// PASSWORD FEATURE
const correctPassword = "vipin"; // 🔐 change it to whatever you want

function checkPassword(){
  const input = document.getElementById("passwordInput").value;
  if(input === correctPassword){
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    document.getElementById("passwordMsg").textContent = "Wrong password 😿, try again!";
  }
}

// SLIDES LOGIC
let slides = document.querySelectorAll(".slide");
let current = 0;

function nextSlide(){
  slides[current].classList.remove("active");
  current++;
  slides[current].classList.add("active");
}

// YES button music
function yesLove(){
  document.getElementById("music").play();
  alert("I know 😻💖");
  nextSlide();
}

// BOXES LOGIC
let words = ["Kumbhkaran 😴","Husband 💍","Paglu 😜","Chhachhundar 🐭"];
let opened = 0;

function openBox(el){
  if(el.classList.contains("open")) return;
  el.classList.add("open");
  el.textContent = words[opened];
  opened++;
  if(opened === 4){
    document.getElementById("boxNextBtn").style.display = "inline-block";
  }
}
// Floating hearts and cats
const container = document.getElementById("floatingContainer");
const emojis = ["💖","💕","💞","😻","🐾"];

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("floatingEmoji");
  emoji.textContent = emojis[Math.floor(Math.random()*emojis.length)];
  
  // Random starting position
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = (20 + Math.random()*20) + "px";
  emoji.style.animationDuration = (5 + Math.random()*5) + "s";

  container.appendChild(emoji);

  // Remove after animation
  setTimeout(() => {
    container.removeChild(emoji);
  }, 10000); // duration must match animationDuration max
}

// Create new emoji every 500ms
setInterval(createEmoji, 500);
