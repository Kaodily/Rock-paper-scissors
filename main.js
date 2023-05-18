// General functions
// rules eventListener
rulesButton.addEventListener("click", () => {
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
closeRules.addEventListener("click", () => {
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
    playAgainEasy()
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
  // paragraph.style.display = "block";
  // paragraph2.style.display = "block";
  popup.style.display = "block";
}


function playAgainMode() {
  myChoice.src = "./images/icon-paper.svg";
  section.style.backgroundImage = "url(./images/bg-triangle.svg)";
  // paragraph.style.display = "none";
  // paragraph2.style.display = "none";
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
  statusModeEasy.style.display = "block";
  statusModeEasy.classList.add("fade-in");
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


// General functions
// // rules eventListener

// const arrEasy = [
//   "./images/icon-scissors.svg",
//   "./images/icon-paper.svg",
//   "./images/icon-rock.svg",
// ];

//   function showModal(){
//     modal.classList.add("scale-in-center");
//     modal.classList.remove("scale-out-center");
//     modal.style.display = "block";
//   }
//   function openRulesModal(){
//     showModal()
//     const rules_image =  circle.className.includes('active') ? "./images/image-rules-bonus.svg" : "./images/image-rules.svg";
//     rulesImage.src = rules_image
//   }
//    function closeRulesButton(){
//     modal.classList.add("scale-out-center");
//   }
//    function generateRandomNumber(arr){
//     return Math.floor(Math.random() * arr.length)
//   }
//    function chooseEasyMode(){
//     hardMode.style.display = 'none'
//     easyMode.style.display = 'block'
//     easyMode.classList.add('slide-in-right')
//     logo.src = "./images/logo.svg"
//   }
//    function chooseHardMode(){
//     easyMode.style.display = 'none'
//     hardMode.style.display = 'block'
//     hardMode.classList.add('slide-in-right')
//     logo.src = './images/logo-bonus.svg'
//   } 
//    function toggleMode(){
//     circle.classList.toggle("active");
//     score.textContent = 0
//   }
   
//   function getChoosenOption(option){
//     if (option.includes("icon-scissors")){
//       return 'scissors'
//     } else if(option.includes("icon-rock")){
//       return 'rock'
//     } else {
//       return 'paper'
//     }
//   }
//  function bordeStyle(chooseOption,choice){
//   const option = getChoosenOption(chooseOption);
//   if(choice === 'paper'){
//     paper.style.border = option === 'scissors' 
//     ? "10px solid hsl(39, 89%, 49%)" : option === 'rock'
//     ? "10px solid hsl(349,71%, 52%)" : "10px solid hsl(230,89%, 62%)"
//   } else if(choice === 'scissors'){
//        scissors.style.border = option === 'scissors' 
//     ? "10px solid hsl(39, 89%, 49%)" : option === 'rock'
//     ? "10px solid hsl(349,71%, 52%)" : "10px solid hsl(230,89%, 62%)"
//   }
//   }
//   function stylesEasy(choosen) {
//     bordeStyle(choosen,'paper')
//     rock.classList.add("fade-out");
//     paper.classList.add("rotate-in-2-cw");
//     scissors.style.display = "none";
//     section.style.backgroundImage = "none";
//     choiceParagraph.style.display = "block";
//     houseParagraph.style.display = "block";
//     popup.style.display = "block";
//   }
//   function computerOption(){
//     popup.style.display = "none";
//     const random = generateRandomNumber(arrEasy)
//     computerChoice.src = arrEasy[random];
//     const choice = computerChoice.src
//     scissors.style.display = "flex";
//     scissors.classList.add("scale-in-center");
//     this.bordeStyle(choice,'scissors')
//   }
//   function statusMode(){
//     statusModeEasy.style.display = "block";
//     statusModeEasy.classList.add("fade-in");
//   }
//   function updateResult(choice){
//     const selected = getChoosenOption(choice);
//     const computerSelected = getChoosenOption(computerChoice.src);
//     if (selected === computerSelected) {
//       statusMode();
//       statusEasy.textContent = "DRAW";
//      }else if ((selected === "paper" && computerSelected === "rock") 
//     ||( selected === "rock" && computerSelected === "scissors")  
//     || (selected === "scissors" && computerSelected === "paper")) {
//       statusMode();
//       statusEasy.textContent = "YOU WIN";
//       score.textContent = Number(score.textContent) + 1;
//      }else {
//       statusMode();
//       statusEasy.textContent = "YOU LOSE";
//       score.textContent = Math.max(score.textContent - 1, 0)
//      }
//   }
//   function addStyle(){
//     myChoice.src = "./images/icon-paper.svg";
//     computerChoice.src = "./images/icon-scissors.svg";
//     section.style.backgroundImage = "url(./images/bg-triangle.svg)";
//     choiceParagraph.style.display = "none";
//     houseParagraph.style.display = "none";
//     statusModeEasy.style.display = "none";
//     paper.style.border = "10px solid hsl(230,89%, 62%)"
//     scissors.style.border = "10px solid hsl(39, 89%, 49%)"
//   }
//   function removeStyle(){
//     rock.classList.remove("fade-out");
//     scissors.classList.remove("scale-in-center");
//     paper.classList.remove("rotate-in-2-cw");
//   }
//   function playAgain(){
//   addStyle()
//    removeStyle()
//   }
//   function changeMode(){
//     if (circle.className.includes('active')) {
//       playAgainHard()
//      chooseHardMode()
//     } else {
//        chooseEasyMode()
//        playAgain()
//     } 
//   }


// rulesButton.addEventListener("click", openRulesModal);
// closeRules.addEventListener("click", closeRulesButton);
// circle.addEventListener("click", () =>{
//   toggleMode()
//   changeMode();
// })
// images.forEach((image) => {
//   image.addEventListener("click", chooseImageEasy);
// });


// function chooseImageEasy(e)  {
//   let choice = e.target.src;
//   myChoice.src = choice
//   rock.classList.add("fade-out");
//   stylesEasy(choice)
//   setTimeout(() => {
//   images.forEach((image) => {
//     image.removeEventListener("click", chooseImageEasy);
// });
//     computerOption()
//     updateResult(choice)
//   }, 2000) 
// }

// playAgainEasy.addEventListener("click", () => {
//  playAgain()
//   setTimeout(() => {
//     images.forEach((image) => {
//       image.addEventListener("click", chooseImageEasy);
//     });
//   });
// });


// const arrHard = [
//   "./images/icon-scissors.svg",
//   "./images/icon-paper.svg",
//   "./images/icon-rock.svg",
//   "./images/icon-spock.svg",
//   "./images/icon-lizard.svg",
// ];
// class UIHARD{
//   generateRandomNumber(arr){
//       return Math.floor(Math.random() * arr.length)
//     }
//   getChoosenOptionHard(option){
//       if (option.includes("icon-scissors")){
//         return 'scissors'
//       } else if(option.includes("icon-rock")){
//         return 'rock'
//       } else if(option.includes("icon-spock")){
//         return 'spock'
//       } else if(option.includes("icon-lizard")){
//         return 'lizard'
//       }
//       else{
//           return 'paper'
//       }
//     }
//     bordeStyleHard(chooseOption,choice){
//       const option = this.getChoosenOptionHard(chooseOption);
//       if(choice === 'spock'){
//         spockHard.style.border = option === 'scissors' 
//         ? "10px solid hsl(39, 89%, 49%)" : option === 'rock'
//         ? "10px solid hsl(349,71%, 52%)" : option === 'spock'
//         ? "10px solid  hsl(189, 59%, 53%)" : option === 'lizard'
//         ? "10px solid   hsl(261, 73%, 60%)" :"10px solid hsl(230,89%, 62%)"
//       } else if(choice === 'paper'){
//            paperHard.style.border = option === 'scissors' 
//         ? "10px solid hsl(39, 89%, 49%)" : option === 'rock'
//         ? "10px solid hsl(349,71%, 52%)" : option === 'spock'
//         ? "10px solid hsl(189, 59%, 53%)" : option === 'lizard'
//         ? "10px solid hsl(261, 73%, 60%)" : "10px solid hsl(230,89%, 62%)"
//       }
//       }
//       stylesHard(choosen) {
//           this.bordeStyleHard(choosen,'spock')
//           scissorsHard.classList.add("fade-out");
//           lizardHard.classList.add("fade-out");
//           rockHard.classList.add("fade-out");
//           spockHard.classList.add("rotate-in-2-cw");
//           paperHard.style.display = "none";
//           sectionHard.style.backgroundImage = "none";
//           popupHard.style.display = "block";
//           // choiceParagraph.style.display = "block";
//           // houseParagraph.style.display = "block";
//         }
//         computerOptionHard(){
//           popupHard.style.display = "none";
//           const random = this.generateRandomNumber(arrHard)
//           computerChoiceHard.src = arrHard[random];
//           const choice = computerChoiceHard.src
//           paperHard.style.display = "flex";
//           paperHard.classList.add("scale-in-center");
//           this.bordeStyleHard(choice,'paper')
//         }
//         statusHard(){
//           statusModeHard.style.display = "block";
//           statusModeHard.classList.add("fade-in");
//         }
//         updateResultHard(choice){
//           const selected = this.getChoosenOptionHard(choice);
//           const computerSelected = this.getChoosenOptionHard(computerChoiceHard.src);
//           if (selected === computerSelected) {
//             this.statusHard();
//             statusHard.textContent = "DRAW";
//            }else if ((selected === "paper" && computerSelected === "rock") 
//           ||( selected === "rock" && computerSelected === "scissors")  
//           || (selected === "scissors" && computerSelected === "paper")
//           ||(selected === "rock" && computerSelected === "lizard")
//           ||(selected === "lizard" && computerSelected === "spock")
//           ||(selected === "spock" && computerSelected === "rock")
//           ||(selected === "spock" && computerSelected === "scissors")
//           ||(selected === "scissors" && computerSelected === "lizard")
//           ||(selected === "lizard" && computerSelected === "paper")
//           ||(selected === "paper" && computerSelected === "spock")){
//             this.statusHard();
//             statusHard.textContent = "YOU WIN";
//             score.textContent = Number(score.textContent) + 1;
//            }else {
//             this.statusHard();
//             statusHard.textContent = "YOU LOSE";
//             score.textContent = Math.max(score.textContent - 1, 0)
//            }
//         }
//         addStyle(){
//           myChoiceHard.src = "./images/icon-spock.svg";
//           computerChoiceHard.src = "./images/icon-paper.svg";
//           // choiceParagraph.style.display = "none";
//           // houseParagraph.style.display = "none";
//           sectionHard.style.backgroundImage = "url(./images/bg-pentagon.svg)";
//           statusModeHard.style.display = "none";
//           spockHard.style.border = "10px solid hsl(189, 59%, 53%)"
//           paperHard.style.border = "10px solid hsl(230,89%, 62%)"
//         }
//         removeStyle(){
//           scissorsHard.classList.remove("fade-out");
//           lizardHard.classList.remove("fade-out");
//           rockHard.classList.remove("fade-out");
//           spockHard.classList.remove("rotate-in-2-cw");
//         }
//         playAgainHard(){
//           this.addStyle()
//           this.removeStyle()
//         }
// }

// const uiHard = new UIHARD
// imagesHard.forEach(image => {
// image.addEventListener('click', chooseImageHard)
// })

// function chooseImageHard(e)  {
//   let choice = e.target.src;
//   myChoiceHard.src = choice;
//   uiHard.stylesHard(choice)
//   setTimeout(() => {
//   images.forEach((image) => {
//     image.removeEventListener("click", chooseImageHard);
// });
//     uiHard.computerOptionHard()
//     uiHard.updateResultHard(choice)
//   }, 2000) 
// }

// playAgainHard.addEventListener("click", () => {
//   uiHard.playAgainHard()
//    setTimeout(() => {
//      images.forEach((image) => {
//        image.addEventListener("click", chooseImageEasy);
//      });
//    });
//  });



