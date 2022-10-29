// General functions
// rules eventListener
button.addEventListener("click", () => {
  modal.classList.add("scale-in-center");
  modal.classList.remove("scale-out-center");
  modal.style.display = "block";
  if (circle.className.includes('active')) {
    rulesImage.src = "./images/image-rules-bonus.svg"
    

  } else {
    rulesImage.src = "./images/image-rules.svg"
  }
});
// Generate random images
function random(arr) {
  return Math.floor(Math.random() * arr.length);
}
//eventlistener to close modal
close.addEventListener("click", () => {
  modal.classList.add("scale-out-center");
});

//event listener to choose level
circle.addEventListener("click", () => {
  circle.classList.toggle("active");
  score.textContent = 0
  if (circle.className.includes('active')) {
    easyMode.style.display = 'none'
    hardMode.style.display = 'block'
    hardMode.classList.add('slide-in-right')
    logo.src = './images/logo-bonus.svg'

  } else {
    playAgainEasy
    hardMode.style.display = 'none'
    easyMode.style.display = 'block'
    easyMode.classList.add('slide-in-right')
    logo.src = "./images/logo.svg"

  }
});

// General functions ends here



// Easymode functions
const arrEasy = [
  "./images/icon-scissors.svg",
  "./images/icon-paper.svg",
  "./images/icon-rock.svg",
];

images.forEach((image) => {
  image.addEventListener("click", chooseImageEasy);
});

function stylesEasy() {
  rock.classList.add("fade-out");
  paper.classList.add("rotate-in-2-cw");
  scissors.style.display = "none";
  section.style.backgroundImage = "none";
  paragraph.style.display = "block";
  paragraph2.style.display = "block";
  popup.style.display = "block";
}


function playAgainMode() {
  myChoice.src = "./images/icon-paper.svg";
  section.style.backgroundImage = "url(./images/bg-triangle.svg)";
  paragraph.style.display = "none";
  paragraph2.style.display = "none";
  statusModeEasy.style.display = "none";
  paper.style.border = "10px solid hsl(230,89%, 62%)"
  computerChoice.src = "./images/icon-scissors.svg";
  scissors.style.border = "10px solid hsl(39, 89%, 49%)"
  rock.classList.remove("fade-out");
  scissors.classList.remove("scale-in-center");
  paper.classList.remove("rotate-in-2-cw");
}

playAgainEasy.addEventListener("click", () => {
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
    paper.style.border = "10px solid hsl(39, 89%, 49%)"
    stylesEasy();
  } else if (myChoice.src.includes("icon-rock")) {
    paper.style.border = "10px solid hsl(349,71%, 52%)"
    stylesEasy();
  } else {
    paper.style.border = "10px solid hsl(230,89%, 62%)"
    stylesEasy();
  }
  setTimeout(() => {
    images.forEach((image) => {
      image.removeEventListener("click", chooseImageEasy);
    });
    popup.style.display = "none";
    computerChoice.src = arrEasy[random(arrEasy)];
    scissors.style.display = "flex";
    scissors.classList.add("scale-in-center");
    if (computerChoice.src.includes("icon-scissors")) {
      scissors.style.border =   "10px solid hsl(39, 89%, 49%)"
    } else if (computerChoice.src.includes("icon-rock")) {
      scissors.style.border =   " 10px solid hsl(349, 71%, 52%)"
    } else {
      scissors.style.border =   "10px solid  hsl(230, 89%, 62%)"
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
      statusEasy.textContent = "DRAW";
    } else if (
      (myChoice.src.includes("icon-paper") &&
        computerChoice.src.includes("icon-rock")) ||
      (myChoice.src.includes("icon-rock") &&
        computerChoice.src.includes("icon-scissors")) ||
      (myChoice.src.includes("icon-scissors") &&
        computerChoice.src.includes("icon-paper"))
    ) {
      statusModes();
      statusEasy.textContent = "YOU WIN";
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
      statusEasy.textContent = "YOU LOSE";
      score.textContent = score.textContent <= 0 ? 0 : score.textContent - 1;
    }
  }, 2000);
}

function statusModes() {
  statusMode.style.display = "block";
  statusMode.classList.add("fade-in");
}



// HardMode functions
const arrHard = [
  "./images/icon-scissors.svg",
  "./images/icon-paper.svg",
  "./images/icon-rock.svg",
  "./images/icon-spock.svg",
  "./images/icon-lizard.svg",
];
imagesHard.forEach(image => {
  image.addEventListener('click', chooseImageHard)
})

function chooseImageHard(e) {
  myChoiceHard.src = e.target.src;
  if (myChoiceHard.src.includes("icon-scissors")) {
    spockHard.style.border = "10px solid hsl(39, 89%, 49%)"
    stylesHard();
  } else if (myChoiceHard.src.includes("icon-rock")) {
    spockHard.style.border = "10px solid hsl(349,71%, 52%)"
    stylesHard();
  } else if (myChoiceHard.src.includes("icon-spock")) {
    spockHard.style.border = "10px solid hsl(189, 59%, 53%)"
    stylesHard();
  } else if (myChoiceHard.src.includes("icon-lizard")) {
    spockHard.style.border = "10px solid hsl(261, 73%, 60%)"
    stylesHard();
  }else {
    spockHard.style.border = "10px solid hsl(230,89%, 62%)"
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
      paperHard.style.border = "10px solid hsl(39, 89%, 49%)"
    } else if (computerChoiceHard.src.includes("icon-rock")) {
      paperHard.style.border = "10px solid hsl(349, 71%, 52%)"
    }else if (computerChoiceHard.src.includes("icon-spock")) {
      paperHard.style.border = "10px solid  hsl(189, 59%, 53%)"
    }else if (computerChoiceHard.src.includes("icon-lizard")) {
      paperHard.style.border = "10px solid hsl(261, 73%, 60%)"
    } else {
      paperHard.style.border = "10px solid hsl(230, 89%, 62%)"
    }

    if (
      (myChoiceHard.src.includes("icon-paper") &&
        computerChoiceHard.src.includes("icon-paper")) ||
      (myChoiceHard.src.includes("icon-scissors") &&
        computerChoiceHard.src.includes("icon-scissors")) ||
      (myChoiceHard.src.includes("icon-rock") &&
        computerChoiceHard.src.includes("icon-rock"))
      (myChoiceHard.src.includes("icon-rock") &&
        computerChoiceHard.src.includes("icon-rock"))
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




