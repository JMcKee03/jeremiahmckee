function handleFormSubmit(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const ticTacToeRating = document.querySelector('input[name="tic_tac_toe_rating"]:checked')?.value;
    const rockPaperScissorsRating = document.querySelector('input[name="rock_paper_scissors_rating"]:checked')?.value;
    const connect4Rating = document.querySelector('input[name="connect_4_rating"]:checked')?.value;
    const comments = document.getElementById('comments').value;

    // Prepare the alert message
    let alertMessage = `Review Submission:\n\n`;
    alertMessage += `Name: ${name}\n`;
    alertMessage += `Email: ${email}\n`;
    alertMessage += `Tic Tac Toe Rating: ${ticTacToeRating}\n`;
    alertMessage += `Rock Paper Scissors Rating: ${rockPaperScissorsRating}\n`;
    alertMessage += `Connect 4 Rating: ${connect4Rating}\n`;
    alertMessage += `Comments: ${comments}\n`;

    // Show the alert
    alert(alertMessage);
}