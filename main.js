// General functions
// rules eventListener

const arrEasy = [
  "./images/icon-scissors.svg",
  "./images/icon-paper.svg",
  "./images/icon-rock.svg",
];

class UI {
  showModal(){
    modal.classList.add("scale-in-center");
    modal.classList.remove("scale-out-center");
    modal.style.display = "block";
  }
  openRulesModal(){
    this.showModal()
    const rules_image =  circle.className.includes('active') ? "./images/image-rules-bonus.svg" : "./images/image-rules.svg";
    rulesImage.src = rules_image
  }
  closeRulesButton(){
    modal.classList.add("scale-out-center");
  }
  generateRandomNumber(arr){
    return Math.floor(Math.random() * arr.length)
  }
  chooseEasyMode(){
    hardMode.style.display = 'none'
    easyMode.style.display = 'block'
    easyMode.classList.add('slide-in-right')
    logo.src = "./images/logo.svg"
  }
  chooseHardMode(){
    easyMode.style.display = 'none'
    hardMode.style.display = 'block'
    hardMode.classList.add('slide-in-right')
    logo.src = './images/logo-bonus.svg'
  } 
  toggleMode(){
    circle.classList.toggle("active");
    score.textContent = 0
  }
  changeMode(){
    if (circle.className.includes('active')) {
      uiHard.playAgainHard()
      this.chooseHardMode()
    } else {
      this.chooseEasyMode()
      this.playAgain()
    } 
  }
  getChoosenOption(option){
    if (option.includes("icon-scissors")){
      return 'scissors'
    } else if(option.includes("icon-rock")){
      return 'rock'
    } else {
      return 'paper'
    }
  }
  bordeStyle(chooseOption,choice){
  const option = this.getChoosenOption(chooseOption);
  if(choice === 'paper'){
    paper.style.border = option === 'scissors' 
    ? "10px solid hsl(39, 89%, 49%)" : option === 'rock'
    ? "10px solid hsl(349,71%, 52%)" : "10px solid hsl(230,89%, 62%)"
  } else if(choice === 'scissors'){
       scissors.style.border = option === 'scissors' 
    ? "10px solid hsl(39, 89%, 49%)" : option === 'rock'
    ? "10px solid hsl(349,71%, 52%)" : "10px solid hsl(230,89%, 62%)"
  }
  }
  stylesEasy(choosen) {
    this.bordeStyle(choosen,'paper')
    rock.classList.add("fade-out");
    paper.classList.add("rotate-in-2-cw");
    scissors.style.display = "none";
    section.style.backgroundImage = "none";
    choiceParagraph.style.display = "block";
    houseParagraph.style.display = "block";
    popup.style.display = "block";
  }
  computerOption(){
    popup.style.display = "none";
    const random = this.generateRandomNumber(arrEasy)
    computerChoice.src = arrEasy[random];
    const choice = computerChoice.src
    scissors.style.display = "flex";
    scissors.classList.add("scale-in-center");
    this.bordeStyle(choice,'scissors')
  }
  status(){
    statusModeEasy.style.display = "block";
    statusModeEasy.classList.add("fade-in");
  }
  updateResult(choice){
    const selected = this.getChoosenOption(choice);
    const computerSelected = this.getChoosenOption(computerChoice.src);
    if (selected === computerSelected) {
      this.status();
      statusEasy.textContent = "DRAW";
     }else if ((selected === "paper" && computerSelected === "rock") 
    ||( selected === "rock" && computerSelected === "scissors")  
    || (selected === "scissors" && computerSelected === "paper")) {
      this.status();
      statusEasy.textContent = "YOU WIN";
      score.textContent = Number(score.textContent) + 1;
     }else {
      this.status();
      statusEasy.textContent = "YOU LOSE";
      score.textContent = Math.max(score.textContent - 1, 0)
     }
  }
  addStyle(){
    myChoice.src = "./images/icon-paper.svg";
    computerChoice.src = "./images/icon-scissors.svg";
    section.style.backgroundImage = "url(./images/bg-triangle.svg)";
    choiceParagraph.style.display = "none";
    houseParagraph.style.display = "none";
    statusModeEasy.style.display = "none";
    paper.style.border = "10px solid hsl(230,89%, 62%)"
    scissors.style.border = "10px solid hsl(39, 89%, 49%)"
  }
  removeStyle(){
    rock.classList.remove("fade-out");
    scissors.classList.remove("scale-in-center");
    paper.classList.remove("rotate-in-2-cw");
  }
  playAgain(){
    this.addStyle()
    this.removeStyle()
  }
}

const ui = new UI
rulesButton.addEventListener("click", ui.openRulesModal.bind(ui));
closeRules.addEventListener("click", ui.closeRulesButton);
circle.addEventListener("click", () =>{
  ui.toggleMode()
  ui.changeMode();
})
images.forEach((image) => {
  image.addEventListener("click", chooseImageEasy);
});


function chooseImageEasy(e)  {
  let choice = e.target.src;
  myChoice.src = choice
  rock.classList.add("fade-out");
  ui.stylesEasy(choice)
  setTimeout(() => {
  images.forEach((image) => {
  image.removeEventListener("click", chooseImageEasy);
});
    ui.computerOption()
    ui.updateResult(choice)
  }, 2000) 
}

playAgainEasy.addEventListener("click", () => {
 ui.playAgain()
  setTimeout(() => {
    images.forEach((image) => {
      image.addEventListener("click", chooseImageEasy);
    });
  });
});


const arrHard = [
  "./images/icon-scissors.svg",
  "./images/icon-paper.svg",
  "./images/icon-rock.svg",
  "./images/icon-spock.svg",
  "./images/icon-lizard.svg",
];
class UIHARD{
  generateRandomNumber(arr){
      return Math.floor(Math.random() * arr.length)
    }
  getChoosenOptionHard(option){
      if (option.includes("icon-scissors")){
        return 'scissors'
      } else if(option.includes("icon-rock")){
        return 'rock'
      } else if(option.includes("icon-spock")){
        return 'spock'
      } else if(option.includes("icon-lizard")){
        return 'lizard'
      }
      else{
          return 'paper'
      }
    }
    bordeStyleHard(chooseOption,choice){
      const option = this.getChoosenOptionHard(chooseOption);
      if(choice === 'spock'){
        spockHard.style.border = option === 'scissors' 
        ? "10px solid hsl(39, 89%, 49%)" : option === 'rock'
        ? "10px solid hsl(349,71%, 52%)" : option === 'spock'
        ? "10px solid  hsl(189, 59%, 53%)" : option === 'lizard'
        ? "10px solid   hsl(261, 73%, 60%)" :"10px solid hsl(230,89%, 62%)"
      } else if(choice === 'paper'){
           paperHard.style.border = option === 'scissors' 
        ? "10px solid hsl(39, 89%, 49%)" : option === 'rock'
        ? "10px solid hsl(349,71%, 52%)" : option === 'spock'
        ? "10px solid hsl(189, 59%, 53%)" : option === 'lizard'
        ? "10px solid hsl(261, 73%, 60%)" : "10px solid hsl(230,89%, 62%)"
      }
      }
      stylesHard(choosen) {
          this.bordeStyleHard(choosen,'spock')
          scissorsHard.classList.add("fade-out");
          lizardHard.classList.add("fade-out");
          rockHard.classList.add("fade-out");
          spockHard.classList.add("rotate-in-2-cw");
          paperHard.style.display = "none";
          sectionHard.style.backgroundImage = "none";
          popupHard.style.display = "block";
          // choiceParagraph.style.display = "block";
          // houseParagraph.style.display = "block";
        }
        computerOptionHard(){
          popupHard.style.display = "none";
          const random = this.generateRandomNumber(arrHard)
          computerChoiceHard.src = arrHard[random];
          const choice = computerChoiceHard.src
          paperHard.style.display = "flex";
          paperHard.classList.add("scale-in-center");
          this.bordeStyleHard(choice,'paper')
        }
        statusHard(){
          statusModeHard.style.display = "block";
          statusModeHard.classList.add("fade-in");
        }
        updateResultHard(choice){
          const selected = this.getChoosenOptionHard(choice);
          const computerSelected = this.getChoosenOptionHard(computerChoiceHard.src);
          if (selected === computerSelected) {
            this.statusHard();
            statusHard.textContent = "DRAW";
           }else if ((selected === "paper" && computerSelected === "rock") 
          ||( selected === "rock" && computerSelected === "scissors")  
          || (selected === "scissors" && computerSelected === "paper")
          ||(selected === "rock" && computerSelected === "lizard")
          ||(selected === "lizard" && computerSelected === "spock")
          ||(selected === "spock" && computerSelected === "rock")
          ||(selected === "spock" && computerSelected === "scissors")
          ||(selected === "scissors" && computerSelected === "lizard")
          ||(selected === "lizard" && computerSelected === "paper")
          ||(selected === "paper" && computerSelected === "spock")){
            this.statusHard();
            statusHard.textContent = "YOU WIN";
            score.textContent = Number(score.textContent) + 1;
           }else {
            this.statusHard();
            statusHard.textContent = "YOU LOSE";
            score.textContent = Math.max(score.textContent - 1, 0)
           }
        }
        addStyle(){
          myChoiceHard.src = "./images/icon-spock.svg";
          computerChoiceHard.src = "./images/icon-paper.svg";
          // choiceParagraph.style.display = "none";
          // houseParagraph.style.display = "none";
          sectionHard.style.backgroundImage = "url(./images/bg-pentagon.svg)";
          statusModeHard.style.display = "none";
          spockHard.style.border = "10px solid hsl(189, 59%, 53%)"
          paperHard.style.border = "10px solid hsl(230,89%, 62%)"
        }
        removeStyle(){
          scissorsHard.classList.remove("fade-out");
          lizardHard.classList.remove("fade-out");
          rockHard.classList.remove("fade-out");
          spockHard.classList.remove("rotate-in-2-cw");
        }
        playAgainHard(){
          this.addStyle()
          this.removeStyle()
        }
}

const uiHard = new UIHARD
imagesHard.forEach(image => {
image.addEventListener('click', chooseImageHard)
})

function chooseImageHard(e)  {
  let choice = e.target.src;
  myChoiceHard.src = choice;
  uiHard.stylesHard(choice)
  setTimeout(() => {
  images.forEach((image) => {
    image.removeEventListener("click", chooseImageHard);
});
    uiHard.computerOptionHard()
    uiHard.updateResultHard(choice)
  }, 2000) 
}

playAgainHard.addEventListener("click", () => {
  uiHard.playAgainHard()
   setTimeout(() => {
     images.forEach((image) => {
       image.addEventListener("click", chooseImageEasy);
     });
   });
 });



