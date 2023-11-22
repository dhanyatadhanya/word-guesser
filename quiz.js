const complete = document.getElementById("comp");

const questions = [
    { question: "1)What is the capital of France?", answer: "Paris" },
    { question: "2)What is 2 + 2?", answer: "4" },
    { question: "3)What is the value of Pi", answer: "3.14" },
    { question: "4)What is capital of India?", answer: "Delhi" },
   


  
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function checkAnswer() {
    const answerElement = document.getElementById("answer");
    const resultElement = document.getElementById("result");
    const userAnswer = answerElement.value.toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();


// const score=document.getElementById("score");



if (userAnswer === correctAnswer) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong!";
    }
        // resultElement.textContent = "Quiz completed!";


    answerElement.value = "";
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {

        complete.textContent = "Quiz completed!";
    }
}

displayQuestion();

