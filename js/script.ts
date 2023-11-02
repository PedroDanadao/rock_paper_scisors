// get the DOM elements
const buttonsList = document.querySelector(".buttons_list") as HTMLUListElement;
const scoreSpan = document.querySelector(".score") as HTMLSpanElement;
const logDiv = document.querySelector(".log") as HTMLDivElement;

// These variables will be used to record the score between the player and the
// computer
let playerPoints = 0;
let computerPoints = 0;
let draws = 0;

// make the eventListeners
buttonsList.addEventListener("click", game);

function get_computer_choice() {
    const choice_number = Math.floor(Math.random() * 3)

    switch (choice_number) {
        case 0: return 'rock';
        case 1: return 'paper';
        default: return 'scissors';
    }
}

function playRound(player_choice: string) {
    console.log("Round Start")

    const computer_choice = get_computer_choice();

    return get_result(player_choice, computer_choice);
}

function get_result(playerChoice: string, computerChoice: string) {
    const playerChoiceNumber = get_choice_number(playerChoice);
    const computerChoiceNumber = get_choice_number(computerChoice);

    const drawString = `\nDraw! Both you and the computer chose ${playerChoice}`;
    const loseString = `\nYou Lose! ${computerChoice} beats ${playerChoice}`;
    const winString = `\nYou Win! ${playerChoice} beats ${computerChoice}`;

    if (playerChoiceNumber === computerChoiceNumber) {
        logDiv.innerText += drawString;
        return 0;
    }

    if (2 * playerChoiceNumber < computerChoiceNumber) {
        logDiv.innerText += winString;
        return 1;
    }

    if (2 * computerChoiceNumber < playerChoiceNumber) {
        logDiv.innerText += loseString
        return -1;
    }

    if (playerChoiceNumber > computerChoiceNumber) {
        logDiv.innerText += winString;
        return 1;
    }

    logDiv.innerText += loseString;
    return -1;
}

function check_typing(option_string: string) {
    const lower_case_string = option_string.toLowerCase();
    if (lower_case_string === "rock" || lower_case_string === "paper" || 
        lower_case_string === "scissors") {
        return true;
    }

    return false;
}

function get_choice_number(choice_string: string) {
    switch (choice_string) {
        case 'rock': return 2;
        case 'paper': return 3;
        default: return 5;
    }
}

function game(event: Event) {
    // Plays a round of the game and check if the player or the computer reached
    // a score of five. If one has reached the score, then the game announces 
    // the winner

    // There will be a check for the scores at the beginning. If all three are 
    // zero then that means that a new game is being played, in that case the 
    // log must be emptied
    if (! (playerPoints | computerPoints | draws)) {
        logDiv.innerText = '';
    }

    const eventTarget = event.target as HTMLButtonElement;
    const playerChoice = eventTarget.innerText.toLowerCase();

    const result = playRound(playerChoice);

    // This is a way to increment the point without relying on switch case. It 
    // is a simple logic that adds 1 to one of the results and 0 to the others.
    // Just have in mind that when the player wins the result is 1, when he 
    // loses the result is -1 and when it is a draw the result is 0
    playerPoints += Math.floor( (result + 1) / 2 );
    computerPoints += Math.floor( (result -1) / -2 );
    draws += ( (result * result) - 1 ) / -1;

    scoreSpan.innerText = `Player: ${playerPoints}`;
    scoreSpan.innerText += `\nComputer: ${computerPoints}`;
    scoreSpan.innerText += `\nDraws: ${draws}`;

    if (playerPoints === 5) {
        endGame("     Congratulations. You Won!      \n");
    }
    
    else if(computerPoints === 5) {
        endGame("          Too bad. You Lost        \n");
    }
}

function endGame(gameEndString: string) {
    logDiv.innerText = "\n-------------------------------------\n";
    logDiv.innerText += gameEndString;
    logDiv.innerText += "-------------------------------------\n";

    logDiv.innerText += "To play another game, just choose one of the three options again";
    
    zeroScores();
}

function zeroScores() {
    playerPoints = 0;
    computerPoints = 0;
    draws = 0;
}

function test_score(score_number_identifier: number) {
    let win = (score_number_identifier + 1) / 2;
    win = Math.floor(win);

    let lose = (score_number_identifier - 1) / -2;
    lose = Math.floor(lose);

    let draw = score_number_identifier * score_number_identifier - 1;
    draw = draw / -1;

    return
}

function tester() {
    let computer_choice = get_computer_choice();

    let choice_number_rock = get_choice_number("rock");
    let choice_number_paper = get_choice_number("paper");
    let choice_number_scissors = get_choice_number("scissors");

    let typing = check_typing("ROCK");
    typing = check_typing("rock");
    typing = check_typing("RoCk");

    typing = check_typing("paper");
    typing = check_typing("scissors");

    // get the result of a few rounds of the game
    let result = 1;
    result = get_result("rock", "scissors");
    result = get_result("rock", "paper");
    result = get_result("rock", "rock");

    result = get_result("paper", "rock");
    result = get_result("paper", "scissors");
    result = get_result("paper", "paper");

    result = get_result("scissors", "paper");
    result = get_result("scissors", "rock");
    result = get_result("scissors", "scissors");

    test_score(1);
    test_score(-1);
    test_score(0);

    return
}