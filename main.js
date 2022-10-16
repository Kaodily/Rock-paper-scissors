const score = document.querySelector(".game_score");
const paperImg = document.querySelector(".paper-img");
const scissorsImg = document.querySelector(".scissors-img");
const rockImg = document.querySelector(".rock-img");
const paper = document.querySelector(".paper-gradient");
const scissors = document.querySelector(".scissors-gradient");
const rock = document.querySelector(".rock-gradient");
const section = document.querySelector(".section");
const images = document.querySelectorAll(".img");
const paragraph = document.querySelector(".p_tag");
const paragraph2 = document.querySelector(".house");
const popup = document.querySelector(".popup");
const button = document.querySelector(".button");
const close = document.querySelector(".closed");
const modal= document.querySelector(".modal");
const arr = [
  "./images/icon-scissors.svg",
  "./images/icon-paper.svg",
  "./images/icon-rock.svg",
];

images.forEach((image) => {
  const random = Math.floor(Math.random() * arr.length);
  image.addEventListener("click", () => {
    paperImg.src = image.src;
    if (paperImg.src.includes('icon-scissors')) {
      paper.style.border = "10px solid hsl(39, 89%, 49%)";
      console.log('hi')
      styled();
    } else if (paperImg.src.includes('icon-rock')) {
      paper.style.border = "10px solid hsl(349,71%, 52%)";
      console.log('hi')

      styled();
    } else {
      paper.style.border = "10px solid hsl(230,89%, 62%)";
      styled();
    }
    setTimeout(() => {
      popup.style.display = "none";
      scissorsImg.src = arr[random];
      scissors.style.display = "flex";
      scissors.classList.add("scale-in-center");
      if (scissorsImg.src.includes('icon-scissors')) {
        scissors.style.border = "10px solid hsl(39, 89%, 49%)";
      } else if (scissorsImg.src.includes('icon-rock')) {
        scissors.style.border = " 10px solid hsl(349, 71%, 52%)";
      } else {
        scissors.style.border = "10px solid  hsl(230, 89%, 62%)";
      }
    }, 2000);
  });
  // setTimeout(() => {
  //      image.removeEventListener('click', choose)
  // },2000)
});

function styled() {
  rock.classList.add("fade-out");
  scissors.style.display = "none";
  section.style.backgroundImage = "none";
  paragraph.style.display = "block";
  paragraph2.style.display = "block";
  popup.style.display = "block";
  paper.classList.add("rotate-in-2-cw");
}
button.addEventListener('click', () => {
  modal.classList.add('scale-in-center')
  modal.classList.remove('scale-out-center')
  modal.style.display = 'block'

})
close.addEventListener('click', () => {
  modal.classList.add('scale-out-center')
})