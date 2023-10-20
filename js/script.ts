// print a welcome message to the player
console.log("Hello. I want ot play a game")
// print how the player can choose each of the three options
console.log("You choose your option by typing 'rock', 'paper' or 'scissors'")

// make a variable to record the points of the player, one for the points of the computer and 
// one for the draws
let player_points = 0;
let computer_points = 0;
let draws = 0;

// make a function to get the computer choice based on a randomly generated number
function get_computer_choice() {
    // generate a number between 0 and 2
    const choice_number = Math.floor(Math.random() * 3)
    // if the number is 0 then return 'rock', if it is 1 'paper' and if it is 2 'scissors'(use a switch case)
    switch(choice_number) {
        case 0: return 'rock';
        case 1: return 'paper';
        default: return 'scissors';
    }
}

// TODO: change the play round to get the player and computer choice instead of using them as parameters
// make a function to compare the player choice with the computer choice
function play_round(player_choice: string, computer_choice: string) {
    // get the strings of the player and the computer and attribute 'rock' to 2, 'paper' to 3 and 'scissors' to 5
    const player_choice_number = get_choice_number(player_choice);
    const computer_choice_number = get_choice_number(computer_choice);

    // make three string variables. One for draws, one for losses and one for wins
    const draw_string = `Draw! Both you and the computer chose ${player_choice}`;
    const lose_string = `You Lose! ${computer_choice_number} beats ${player_choice_number}`;
    const win_string = `You Win! ${player_choice_number} beats ${computer_choice_number}`;

    // check if both numbers are equal, if so then announce it to the user and return a 'draw' value(0)
    if (player_choice_number === computer_choice_number) {
        console.log(draw_string);
        return 0;
    }

    // check if the double of the first number is less then the second number. If so then it is the case where the
    // user chose a rock and the computer chose scissors. In that case, announce it to the user and return 
    // the win value(1)
    if (2 * player_choice_number < computer_choice_number) {
        console.log(win_string);
        return 1;
    }

    // check the opposite now. If the double of the second number is less that the first number. If so then announce
    // that the user lost and return the loose value(0)
    if (2 * computer_choice_number < computer_choice_number) {
        console.log(lose_string);
        return -1;
    }

    // check if the first number is more than the second number. If so then return a win value.
    // if not then return a loose value(-1). I each case, announce it to the user
    if (player_choice_number > computer_choice_number) {
        console.log(win_string);
        return 1;
    }

    console.log(lose_string);
    return -1;
}

// make a function to get a number related to a string('rock', 'paper', 'scissors')
function get_choice_number(choice_string: string) {
    // use a switch case to get the number between 2, 3 and 5
    switch(choice_string) {
        case 'rock': return 2;
        case 'paper': return 3;
        default: return 5;
    }
}

// make a function game to play five matches of rock, paper, scissors
function game() {
    // create a variable(i) to increment the number of matches between the user and the computer.
    // It will be necessary to use it alongside a while loop to deal with possible misspells
    // of the user. The variable will only increment when the user types a valid option
    let i = 0;
    
    // make a loop to that will run five times, one for each try
    while(i < 5) {
        // get the player choice from the console and put it in a variable
    
        // check if the player choice is valid(rock, paper or scissor)
            // if the player choice is not valid, then warn the user about it and
            // redo the loop without incrementing the variable i
    
        // get the computer choice
    
        // print both choices in the console
    
        // compare the computer choice with the player choice
    
        // increment the player score, the computer score or the draw score based on the result of the compare function.
        // For this, use a few math expressions based on the result of both choices
    
        // print in the console the current score
    
        // print in the console that a new match will start
    
        // increment the variable i in one
    
    // compare the results between the player and the computer and announce the winner(if the results are the same)
    // then announce a draw
    }
}
