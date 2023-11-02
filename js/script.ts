// get the DOM elements
const buttonsList = document.querySelector(".buttons_list") as HTMLUListElement;
const scoreSpan = document.querySelector(".score") as HTMLSpanElement;

function get_computer_choice() {
    const choice_number = Math.floor(Math.random() * 3)

    switch (choice_number) {
        case 0: return 'rock';
        case 1: return 'paper';
        default: return 'scissors';
    }
}

function play_round() {
    console.log("Round Start")

    const player_choice = prompt("Choose between rock paper and scissors by typing those options in the prompt");
    const computer_choice = get_computer_choice();

    if (!(player_choice && check_typing(player_choice))) {
        return 3;
    }

    return get_result(player_choice, computer_choice);
}

function get_result(player_choice: string, computer_choice: string) {
    const player_choice_number = get_choice_number(player_choice);
    const computer_choice_number = get_choice_number(computer_choice);

    const draw_string = `Draw! Both you and the computer chose ${player_choice}`;
    const lose_string = `You Lose! ${computer_choice} beats ${player_choice}`;
    const win_string = `You Win! ${player_choice} beats ${computer_choice}`;

    if (player_choice_number === computer_choice_number) {
        console.log(draw_string);
        return 0;
    }

    if (2 * player_choice_number < computer_choice_number) {
        console.log(win_string);
        return 1;
    }

    if (2 * computer_choice_number < player_choice_number) {
        console.log(lose_string);
        return -1;
    }

    if (player_choice_number > computer_choice_number) {
        console.log(win_string);
        return 1;
    }

    console.log(lose_string);
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

function game() {
    let i = 0;

    let player_points = 0;
    let computer_points = 0;
    let draws = 0;

    while (i < 5) {
        const round_result = play_round();

        if (round_result === 3) {
            continue;
        }

        player_points += Math.floor((round_result + 1) / 2);
        computer_points += Math.floor((round_result - 1) / -2);
        draws += (round_result * round_result - 1) / -1;

        console.log(`player points: ${player_points}  |  computer_points: ${computer_points}  |  draws: ${draws}`);

        if (i != 4) {
            console.log("New match starting\n\n");
        }

        i++;

    }
    let results_string = '';
    if (player_points > computer_points) {
        results_string = "Congratulations! You Won The Game!";
    }
    else if (player_points < computer_points) {
        results_string = "Too Bad. You Lost The Game.";
    }
    else {
        results_string = "It's a Draw!";
    }

    console.log(results_string);
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

game();
