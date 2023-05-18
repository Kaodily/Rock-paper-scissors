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



