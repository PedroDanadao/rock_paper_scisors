// print a welcome message to the player
console.log("Hello. I want ot play a game");
// print how the player can choose each of the three options
console.log("You choose your option by typing 'rock', 'paper' or 'scissors'");
// make a function to get the computer choice based on a randomly generated number
function get_computer_choice() {
    // generate a number between 0 and 2
    var choice_number = Math.floor(Math.random() * 3);
    // if the number is 0 then return 'rock', if it is 1 'paper' and if it is 2 'scissors'(use a switch case)
    switch (choice_number) {
        case 0: return 'rock';
        case 1: return 'paper';
        default: return 'scissors';
    }
}
// TODO: change the play round to get the player and computer choice instead of using them as parameters
// make a function to compare the player choice with the computer choice
function play_round() {
    // print a message to show the user that the round has started
    console.log("Round Start");
    // get the player choice from the user using the prompt function and put it in a player_choice variable
    var player_choice = prompt("Choose between rock paper and scissors by typing those options in the prompt");
    // get the computer choice by using the function
    var computer_choice = get_computer_choice();
    // check if the user typed a valid option
    if (!(player_choice && check_typing(player_choice))) {
        // if no valid option was types, then just end the function returning 3
        return 3;
    }
    // return the result of the player choice against the computer choice
    return get_result(player_choice, computer_choice);
}
// make a function to get the result between two choices of the game. It will return 1 if the first choice wins,
// -1 if it looses and 0 if they are the same. This function is mostly for testing things out
function get_result(player_choice, computer_choice) {
    // get the strings of the player and the computer and attribute 'rock' to 2, 'paper' to 3 and 'scissors' to 5
    var player_choice_number = get_choice_number(player_choice);
    var computer_choice_number = get_choice_number(computer_choice);
    // make three string variables. One for draws, one for losses and one for wins
    var draw_string = "Draw! Both you and the computer chose " + player_choice;
    var lose_string = "You Lose! " + computer_choice + " beats " + player_choice;
    var win_string = "You Win! " + player_choice + " beats " + computer_choice;
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
    if (2 * computer_choice_number < player_choice_number) {
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
// make a function to check if a passed string in lower case is either 'rock', 'paper', or 'scissors'
function check_typing(option_string) {
    var lower_case_string = option_string.toLowerCase();
    if (lower_case_string === "rock" || lower_case_string === "paper" || lower_case_string === "scissors") {
        return true;
    }
    return false;
}
// make a function to get a number related to a string('rock', 'paper', 'scissors')
function get_choice_number(choice_string) {
    // use a switch case to get the number between 2, 3 and 5
    switch (choice_string) {
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
    var i = 0;
    // make a variable to record the points of the player, one for the points of the computer and 
    // one for the draws
    var player_points = 0;
    var computer_points = 0;
    var draws = 0;
    // make a loop to that will run five times, one for each try
    while (i < 5) {
        // call the function to play a round of rock paper scissors
        var round_result = play_round();
        // check if the round result is three. If so, then play another round without incrementing i
        if (round_result === 3) {
            continue;
        }
        // increment the player score, the computer score or the draw score based on the result of the compare function.
        // For this, use a few math expressions based on the result of the comparison
        player_points += Math.floor((round_result + 1) / 2);
        computer_points += Math.floor((round_result - 1) / -2);
        draws += (round_result * round_result - 1) / -1;
        // print in the console the current score
        console.log("player points: " + player_points + "  |  computer_points: " + computer_points + "  |  draws: " + draws);
        // print in the console that a new match will start
        console.log("New match starting\n\n");
        // increment the variable i in one
        i++;
    }
    // compare the results between the player and the computer and announce the winner(if the results are the same)
    // then announce a draw
    var results_string = '';
    if (player_points > computer_points) {
        results_string = "Congratilations! You win!";
    }
    else if (player_points < computer_points) {
        results_string = "Too Bad. You Lose";
    }
    else {
        results_string = "It's a Draw!";
    }
    console.log(results_string);
}
// make a function just to test what will be done with the score
function test_score(score_number_identifier) {
    // make three variables for the win, lose and draw results their value will be based on the passed 
    // score_number_identifier after running a few math expressions
    var win = (score_number_identifier + 1) / 2;
    win = Math.floor(win);
    var lose = (score_number_identifier - 1) / -2;
    lose = Math.floor(lose);
    var draw = score_number_identifier * score_number_identifier - 1;
    draw = draw / -1;
    return;
}
// make a function to test some stuff
function tester() {
    // A few variables will be created to check their value with the debugger
    var computer_choice = get_computer_choice();
    var choice_number_rock = get_choice_number("rock");
    var choice_number_paper = get_choice_number("paper");
    var choice_number_scissors = get_choice_number("scissors");
    var typing = check_typing("ROCK");
    typing = check_typing("rock");
    typing = check_typing("RoCk");
    typing = check_typing("paper");
    typing = check_typing("scissors");
    // get the result of a few rounds of the game
    var result = 1;
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
    return;
}
game();
