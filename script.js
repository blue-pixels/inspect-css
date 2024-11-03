function checkAnswer(questionNum, correctAnswer) {
    const userAnswer = document.getElementById(`q${questionNum}`).value.trim().toLowerCase();
    const resultDiv = document.getElementById(`result${questionNum}`);
    
    if (userAnswer === correctAnswer.toLowerCase()) {
        resultDiv.textContent = "Correct!";
        resultDiv.className = "result correct";
    } else {
        resultDiv.textContent = "Incorrect";
        resultDiv.className = "result incorrect";
    }
}