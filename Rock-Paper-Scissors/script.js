let user = 0;
let PC = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".message");
let uScore = document.querySelector(".uScore");
let pScore = document.querySelector(".pScore");
let newG = document.querySelector(".newGame");
//Adding to repo
const genPCChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};
const playGame = (userId) => {
  let pcID = genPCChoice();
  let userWin = true;
  if (userId === pcID) {
    msg.innerHTML = "Match was drawn ! Make another move";
    msg.style.backgroundColor =  "#c9a2a2";
    msg.style.color = "#000000";
  } else {
    if (userId === "rock") userWin = pcID === "scissors" ? true : false;
    else if (userId === "paper") userWin = pcID === "scissors" ? false : true;
    else userWin = pcID === "paper" ? true : false;

    if (userWin) {
      msg.innerHTML = `You won ! your ${userId} beats ${pcID}`;
      msg.style.backgroundColor = "#04b850";
      msg.style.color =  "#ffffff";
      user++;
      uScore.innerHTML = user;
    } else {
      msg.innerHTML = `You lost ! ${pcID} beats your ${userId}`;
      msg.style.backgroundColor = "#de2a04";
      msg.style.color =  "#ffffff";
      PC++;
      pScore.innerHTML = PC;
    }
  }
};

newG.addEventListener("click",()=>{
    user = 0;
    PC = 0;
    uScore.innerHTML = user;
    pScore.innerHTML = PC;
    msg.innerHTML = "Make Your Move";
    msg.style.backgroundColor =  "#c9a2a2";
    msg.style.color = "#000000";
})
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userId = choice.getAttribute("id");
    playGame(userId);
  });
});
