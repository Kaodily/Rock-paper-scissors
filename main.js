const score = document.querySelector(".game_score");
const myChoice = document.querySelector(".paper-img");
const computerChoice = document.querySelector(".scissors-img");
const myChoiceHard = document.querySelector(".spock-img-hard");
const rockImgHard = document.querySelector(".rock-img-hard");
const scissorsImgHard = document.querySelector(".scissors-img-hard");
const lizardImgHard = document.querySelector(".lizard-img-hard");
const computerChoiceHard = document.querySelector(".paper-img-hard");
const rockImg = document.querySelector(".rock-img");
const paper = document.querySelector(".paper-gradient");
const spockHard = document.querySelector(".spock-gradient-hard");
const scissorsHard = document.querySelector(".scissors-gradient-hard");
const rockHard = document.querySelector(".rock-gradient-hard");
const paperHard= document.querySelector(".paper-gradient-hard");
const lizardHard = document.querySelector(".lizard-gradient-hard");
const scissors = document.querySelector(".scissors-gradient");
const rock = document.querySelector(".rock-gradient");
const section = document.querySelector(".section");
const images = document.querySelectorAll(".img");
const paragraph = document.querySelector(".p_tag");
const paragraph2 = document.querySelector(".house");
const popup = document.querySelector(".popup");
const popupHard = document.querySelector(".popupHard");
const button = document.querySelector(".rules");
const close = document.querySelector(".closed");
const modal = document.querySelector(".modal");
const statuss = document.querySelector(".status");
const statusMode = document.querySelector(".statusMode");
const playAgain = document.querySelector(".playAgainButton");
const circle = document.querySelector(".circle");
const level = document.querySelector(".levelMode");
const easyMode = document.querySelector(".easyMode");
const hardMode = document.querySelector(".hardMode");
const imagesHard = document.querySelectorAll(".img-hard");
const sectionHard = document.querySelector(".section-hard");

const arr = [
  "./images/icon-scissors.svg",
  "./images/icon-paper.svg",
  "./images/icon-rock.svg",
];
const arrHard = [
  "./images/icon-scissors.svg",
  "./images/icon-paper.svg",
  "./images/icon-rock.svg",
  "./images/icon-spock.svg",
  "./images/icon-lizard.svg",
];
function random(id) {
  return Math.floor(Math.random() * id.length);
}

images.forEach((image) => {
  image.addEventListener("click", chooseImageEasy);
});

function styled() {
  rock.classList.add("fade-out");
  paper.classList.add("rotate-in-2-cw");
  scissors.style.display = "none";
  section.style.backgroundImage = "none";
  paragraph.style.display = "block";
  paragraph2.style.display = "block";
  popup.style.display = "block";
}
button.addEventListener("click", () => {
  modal.classList.add("scale-in-center");
  modal.classList.remove("scale-out-center");
  modal.style.display = "block";
});
close.addEventListener("click", () => {
  modal.classList.add("scale-out-center");
});
function playAgainMode() {
  myChoice.src = "./images/icon-paper.svg";
  section.style.backgroundImage = "url(./images/bg-triangle.svg)";
  paragraph.style.display = "none";
  paragraph2.style.display = "none";
  statusMode.style.display = "none";
  paper.style.border =
    window.innerWidth <= 760
      ? "10px solid hsl(230,89%, 62%)"
      : "15px solid hsl(230,89%, 62%)";
  computerChoice.src = "./images/icon-scissors.svg";
  scissors.style.border =
    window.innerWidth <= 760
      ? "10px solid hsl(39, 89%, 49%)"
      : "15px solid hsl(39, 89%, 49%)";
  rock.classList.remove("fade-out");
  scissors.classList.remove("scale-in-center");
  paper.classList.remove("rotate-in-2-cw");
}

playAgain.addEventListener("click", () => {
  playAgainMode();
  setTimeout(() => {
    images.forEach((image) => {
      image.addEventListener("click", chooseImageEasy);
    });
  });
});
function chooseImageEasy(e) {
  myChoice.src = e.target.src;
  rock.classList.add("fade-out");
  if (myChoice.src.includes("icon-scissors")) {
    paper.style.border =
      window.innerWidth <= 760
        ? "10px solid hsl(39, 89%, 49%)"
        : "15px solid hsl(39, 89%, 49%)";
    styled();
  } else if (myChoice.src.includes("icon-rock")) {
    paper.style.border =
      window.innerWidth <= 760
        ? "10px solid hsl(349,71%, 52%)"
        : "15px solid hsl(349,71%, 52%)";
    styled();
  } else {
    paper.style.border =
      window.innerWidth <= 760
        ? "10px solid hsl(230,89%, 62%)"
        : "15px solid hsl(230,89%, 62%)";
    styled();
  }
  setTimeout(() => {
    images.forEach((image) => {
      image.removeEventListener("click", chooseImageEasy);
    });
    popup.style.display = "none";
    computerChoice.src = arr[random(arr)];
    scissors.style.display = "flex";
    scissors.classList.add("scale-in-center");
    if (computerChoice.src.includes("icon-scissors")) {
      scissors.style.border =
        window.innerWidth <= 760
          ? "10px solid hsl(39, 89%, 49%)"
          : "15px solid hsl(39, 89%, 49%)";
    } else if (computerChoice.src.includes("icon-rock")) {
      scissors.style.border =
        window.innerWidth <= 760
          ? " 10px solid hsl(349, 71%, 52%)"
          : "15px solid hsl(349, 71%, 52%)";
    } else {
      scissors.style.border =
        window.innerWidth <= 760
          ? "10px solid  hsl(230, 89%, 62%)"
          : "15px solid  hsl(230, 89%, 62%)";
    }
    if (
      (myChoice.src.includes("icon-paper") &&
        computerChoice.src.includes("icon-paper")) ||
      (myChoice.src.includes("icon-scissors") &&
        computerChoice.src.includes("icon-scissors")) ||
      (myChoice.src.includes("icon-rock") &&
        computerChoice.src.includes("icon-rock"))
    ) {
      statusModes();
      statuss.textContent = "DRAW";
    } else if (
      (myChoice.src.includes("icon-paper") &&
        computerChoice.src.includes("icon-rock")) ||
      (myChoice.src.includes("icon-rock") &&
        computerChoice.src.includes("icon-scissors")) ||
      (myChoice.src.includes("icon-scissors") &&
        computerChoice.src.includes("icon-paper"))
    ) {
      statusModes();
      statuss.textContent = "YOU WIN";
      score.textContent = Number(score.textContent) + 1;
    } else if (
      (myChoice.src.includes("icon-paper") &&
        computerChoice.src.includes("icon-scissors")) ||
      (myChoice.src.includes("icon-scissors") &&
        computerChoice.src.includes("icon-rock")) ||
      (myChoice.src.includes("icon-rock") &&
        computerChoice.src.includes("icon-paper"))
    ) {
      statusModes();
      statuss.textContent = "YOU LOSE";
      score.textContent = score.textContent <= 0 ? 0 : score.textContent - 1;
    }
  }, 2000);
}

function statusModes() {
  statusMode.style.display = "block";
  statusMode.classList.add("fade-in");
}
circle.addEventListener("click", () => {
  circle.classList.toggle("active");
  if (circle.className.includes('active')) {
    easyMode.style.display = 'none'
    hardMode.style.display = 'block'
    hardMode.classList.add('slide-in-right')

  } else {
    hardMode.style.display = 'none'
    easyMode.style.display = 'block'
    easyMode.classList.add('slide-in-right')

  }
});


// HardMode functions
imagesHard.forEach(image => {
  image.addEventListener('click', chooseImageHard)
})

function chooseImageHard(e) {
  myChoiceHard.src = e.target.src;
  // rock.classList.add("fade-out");
  if (myChoiceHard.src.includes("icon-scissors")) {
    spockHard.style.border =
      window.innerWidth <= 760
        ? "10px solid hsl(39, 89%, 49%)"
        : "15px solid hsl(39, 89%, 49%)";
    stylesHard();
  } else if (myChoiceHard.src.includes("icon-rock")) {
    spockHard.style.border =
      window.innerWidth <= 760
        ? "10px solid hsl(349,71%, 52%)"
        : "15px solid hsl(349,71%, 52%)";
    stylesHard();
  } else if (myChoiceHard.src.includes("icon-spock")) {
    spockHard.style.border =
      window.innerWidth <= 760
        ? "10px solid hsl(189, 59%, 53%)"
        : "15px solid hsl(189, 59%, 53%)";
    stylesHard();
  } else if (myChoiceHard.src.includes("icon-lizard")) {
    spockHard.style.border =
      window.innerWidth <= 760
        ? "10px solid hsl(261, 73%, 60%)"
        : "15px solid hsl(261, 73%, 60%)";
    stylesHard();
  }else {
    spockHard.style.border =
      window.innerWidth <= 760
        ? "10px solid hsl(230,89%, 62%)"
        : "15px solid hsl(230,89%, 62%)";
    stylesHard();
  }
  setTimeout(() => {
    popupHard.style.display ='none'
    imagesHard.forEach((image) => {
      image.removeEventListener("click", chooseImageHard);
    });
    computerChoiceHard.src = arrHard[random(arrHard)];
    paperHard.style.display = "flex";
    paperHard.classList.add("scale-in-center");
    if (computerChoiceHard.src.includes("icon-scissors")) {
      paperHard.style.border =
        window.innerWidth <= 760
          ? "10px solid hsl(39, 89%, 49%)"
          : "15px solid hsl(39, 89%, 49%)";
    } else if (computerChoiceHard.src.includes("icon-rock")) {
      paperHard.style.border =
        window.innerWidth <= 760
          ? " 10px solid hsl(349, 71%, 52%)"
          : "15px solid hsl(349, 71%, 52%)";
    }else if (computerChoiceHard.src.includes("icon-paper")) {
      paperHard.style.border =
        window.innerWidth <= 760
          ? " 10px solid hsl(349, 71%, 52%)"
          : "15px solid hsl(349, 71%, 52%)";
    }else if (computerChoiceHard.src.includes("icon-lizard")) {
      paperHard.style.border =
        window.innerWidth <= 760
          ? " 10px solid hsl(349, 71%, 52%)"
          : "15px solid hsl(349, 71%, 52%)";
    } else {
      paperHard.style.border =
        window.innerWidth <= 760
          ? "10px solid  hsl(230, 89%, 62%)"
          : "15px solid  hsl(230, 89%, 62%)";
    }

    if (
      (myChoice.src.includes("icon-paper") &&
        computerChoice.src.includes("icon-paper")) ||
      (myChoice.src.includes("icon-scissors") &&
        computerChoice.src.includes("icon-scissors")) ||
      (myChoice.src.includes("icon-rock") &&
        computerChoice.src.includes("icon-rock"))
    ) {
      statusModes();
      statuss.textContent = "DRAW";
    } else if (
      (myChoice.src.includes("icon-paper") &&
        computerChoice.src.includes("icon-rock")) ||
      (myChoice.src.includes("icon-rock") &&
        computerChoice.src.includes("icon-scissors")) ||
      (myChoice.src.includes("icon-scissors") &&
        computerChoice.src.includes("icon-paper"))
    ) {
      statusModes();
      statuss.textContent = "YOU WIN";
      score.textContent = Number(score.textContent) + 1;
    } else if (
      (myChoice.src.includes("icon-paper") &&
        computerChoice.src.includes("icon-scissors")) ||
      (myChoice.src.includes("icon-scissors") &&
        computerChoice.src.includes("icon-rock")) ||
      (myChoice.src.includes("icon-rock") &&
        computerChoice.src.includes("icon-paper"))
    ) {
      statusModes();
      statuss.textContent = "YOU LOSE";
      score.textContent = score.textContent <= 0 ? 0 : score.textContent - 1;
    }
  }, 2000);
}
function stylesHard() {
  scissorsHard.classList.add("fade-out");
  lizardHard.classList.add("fade-out");
  rockHard.classList.add("fade-out");
  spockHard.classList.add("rotate-in-2-cw");
  paperHard.style.display = "none";
  sectionHard.style.backgroundImage = "none";
  popupHard.style.display = "block";
  // paragraph.style.display = "block";
  // paragraph2.style.display = "block";

}




