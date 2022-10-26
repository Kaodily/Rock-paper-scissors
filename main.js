const score = document.querySelector(".game_score");
const myChoice= document.querySelector(".paper-img");
const computerChoice = document.querySelector(".scissors-img");
const rockImg = document.querySelector(".rock-img");
const paper = document.querySelector(".paper-gradient");
const scissors = document.querySelector(".scissors-gradient");
const rock = document.querySelector(".rock-gradient");
const section = document.querySelector(".section");
const images = document.querySelectorAll(".img");
const paragraph = document.querySelector(".p_tag");
const paragraph2 = document.querySelector(".house");
const popup = document.querySelector(".popup");
const button = document.querySelector(".rulesButton");
const close = document.querySelector(".closed");
const modal= document.querySelector(".modal");
const statuss = document.querySelector(".status");
const statusMode = document.querySelector(".statusMode");
const playAgain = document.querySelector(".playAgainButton");




const arr = [
  "./images/icon-scissors.svg",
  "./images/icon-paper.svg",
  "./images/icon-rock.svg",
];
function random() {
  return Math.floor(Math.random() * arr.length);
}

images.forEach((image) => {
  image.addEventListener("click",chooseImage )
});

function styled() {
  rock.classList.add("fade-out");
  scissors.style.display = "none";
  section.style.backgroundImage = "none";
  paragraph.style.display = "block";
  paragraph2.style.display = "block";
  popup.style.display = "block";
}
button.addEventListener('click', () => {
  modal.classList.add('scale-in-center')
  modal.classList.remove('scale-out-center')
  modal.style.display = 'block'

})
close.addEventListener('click', () => {
  modal.classList.add('scale-out-center')
})
function playAgainMode() {
  myChoice.src = "./images/icon-paper.svg"
  section.style.backgroundImage = "url(./images/bg-triangle.svg)";
  paragraph.style.display = "none";
  paragraph2.style.display = "none";
  statusMode.style.display ='none'
  paper.style.border = "10px solid hsl(230,89%, 62%)"
  computerChoice.src = "./images/icon-scissors.svg"
  scissors.style.border = "10px solid hsl(39, 89%, 49%)"
  rock.classList.remove('fade-out')
}

playAgain.addEventListener('click', () => {
  playAgainMode()
  setTimeout(() => {
    images.forEach((image) => {
      image.addEventListener("click",chooseImage )
    });
})

 })
function chooseImage(e) {
  myChoice.src = e.target.src;
  rock.classList.add('fade-out')
  paper.classList.add("rotate-in-2-cw");
    if (myChoice.src.includes('icon-scissors')) {
      paper.style.border = "10px solid hsl(39, 89%, 49%)";
      styled();
    } else if (myChoice.src.includes('icon-rock')) {
      paper.style.border = "10px solid hsl(349,71%, 52%)";
      styled();
    } else {
      paper.style.border = "10px solid hsl(230,89%, 62%)";
      styled();
    }
  setTimeout(() => {
    images.forEach((image) => {
      image.removeEventListener("click",chooseImage )
    });
      popup.style.display = "none";
      computerChoice.src = arr[random()];
      scissors.style.display = "flex";
      scissors.classList.add("scale-in-center");
      if (computerChoice.src.includes('icon-scissors')) {
        scissors.style.border = "10px solid hsl(39, 89%, 49%)";
        
      } else if (computerChoice.src.includes('icon-rock')) {
        scissors.style.border = " 10px solid hsl(349, 71%, 52%)";
      } else {
        scissors.style.border = "10px solid  hsl(230, 89%, 62%)";
    }
    if (myChoice.src.includes('icon-paper') &&
      computerChoice.src.includes('icon-paper') || 
      myChoice.src.includes('icon-scissors') &&
      computerChoice.src.includes('icon-scissors') ||
      myChoice.src.includes('icon-rock') &&
      computerChoice.src.includes('icon-rock')) {
        statusModes() 
        statuss.textContent = 'DRAW'
    } else if (myChoice.src.includes('icon-paper') &&
      computerChoice.src.includes('icon-rock') ||
      myChoice.src.includes('icon-rock') &&
      computerChoice.src.includes('icon-scissors')||
      myChoice.src.includes('icon-scissors') &&
      computerChoice.src.includes('icon-paper')) {
        statusModes() 
      statuss.textContent = 'YOU WIN'
      score.textContent = Number(score.textContent) + 1
      
    }else if(myChoice.src.includes('icon-paper') &&
      computerChoice.src.includes('icon-scissors') ||
      myChoice.src.includes('icon-scissors') &&
      computerChoice.src.includes('icon-rock') ||
      myChoice.src.includes('icon-rock') &&
      computerChoice.src.includes('icon-paper') 
    ) {
        statusModes() 
      statuss.textContent = 'YOU LOSE'
      score.textContent = score.textContent <=0 ? 0 :score.textContent - 1

      
      
    }
  }, 2000);


} 


function statusModes() {
  statusMode.style.display ='block'
  statusMode.classList.add('fade-in')
}




