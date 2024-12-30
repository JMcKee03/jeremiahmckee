document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    const playerChoiceDisplay = document.getElementById("player-choice").querySelector("span");
    const computerChoiceDisplay = document.getElementById("computer-choice").querySelector("span");
    const gameResultDisplay = document.getElementById("game-result");
    const playerWinsDisplay = document.getElementById("player-wins");
    const computerWinsDisplay = document.getElementById("computer-wins");
    const tiesDisplay = document.getElementById("ties");
    const resetButton = document.getElementById("reset-button");

    const choices = ["Rock", "Paper", "Scissors"];
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    function getWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            ties++;
            return "It's a tie!";
        }
        if (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {
            playerWins++;
            return "You win!";
        }
        computerWins++;
        return "You lose!";
    }

    items.forEach(item => {
        item.addEventListener("click", () => {
            const playerChoice = item.dataset.choice;
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            const result = getWinner(playerChoice, computerChoice);

            // Update results
            playerChoiceDisplay.textContent = playerChoice;
            computerChoiceDisplay.textContent = computerChoice;
            gameResultDisplay.innerHTML = `<strong>${result}</strong>`;

            // Update win and tie counters
            playerWinsDisplay.textContent = playerWins;
            computerWinsDisplay.textContent = computerWins;
            tiesDisplay.textContent = ties;
        });
    });

    // Restart button functionality
    resetButton.addEventListener("click", () => {
        playerWins = 0;
        computerWins = 0;
        ties = 0;
        playerChoiceDisplay.textContent = "-";
        computerChoiceDisplay.textContent = "-";
        gameResultDisplay.innerHTML = "<strong>-</strong>";
        playerWinsDisplay.textContent = playerWins;
        computerWinsDisplay.textContent = computerWins;
        tiesDisplay.textContent = ties;
    });
});
