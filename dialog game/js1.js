Startscript=()=>{
    let user=confirm("Do u Like to Play");
    user? playGame():alert("Okay, may be next time");
};
playGame=()=>{
    while(true){
        let User1=getPlayerChoice();
        User1=handlespaces(User1);
        //Does not write code to handle error and null as I doesnot understand properly

        let playerone=checkvalid(User1);
        if(!playerone){
            invalidchoice();
            continue;
        }
        const computer=getComputerChoice();
        let winner=determineWinner(playerone,computer);
        display(winner);
        
        willing=confirm("Do u like to play again");
        if(willing){
            continue;
        }
        else{
            thanksforPlaying();
            break;
        }
    }
};
display=(winner)=>{
    alert(winner);
};
determineWinner=(playerone,computer)=>{
    let winner=
    playerone===computer?
    "Tie game":
    playerone==="rock"&& computer=="paper"?
    ` Player 1: ${playerone}\n player 2: ${computer}\n Computer Wins`
    :playerone==="paper"&& computer=="scissor"?
    ` Player 1: ${playerone}\n player 2: ${computer}\n Computer Wins`
    :playerone==="scissor"&& computer=="rock"?
    ` Player 1: ${playerone}\n player 2: ${computer}\n Computer Wins`
    :` Player 1: ${playerone}\n player 2: ${computer}\n Playone Wins!`;

    return winner;
}
thanksforPlaying=()=>{
    return alert("THANKS FOR PLAYING");
};
checkvalid=(User1)=>{
    if(User1==="rock" || User1==="paper" || User1==="scissors"){
        return User1;
    }
    else{
        return false;
    }
};
getComputerChoice=()=>{
    let random=Math.floor(Math.random()*3);
    const arr=["rock","paper","scissor"];
    return arr[random];
};
invalidchoice=()=>{
    return alert("You may not choose rock, paper, scissors");
};
handlespaces=(playerChoice)=>{
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
      }
    else {
        return false;
      }
};
getPlayerChoice=()=>{
    return prompt("Enter rock,paper,scissors"); 
};
Startscript();
