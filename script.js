const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    correct: 0
  },
  {
    question: "Which language is used to structure web pages?",
    options: ["CSS", "HTML", "JavaScript", "Python"],
    correct: 1
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correct: 2
  },
  {
    question: "Which of the following is NOT a programming language?",
    options: ["Python", "Java", "HTML", "C"],
    correct: 2
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Process Unit",
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Unit"
    ],
    correct: 1
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    correct: 2
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!-- -->", "//", "/* */", "#"],
    correct: 1
  },
  {
    question: "Which HTML tag is used to include JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    correct: 2
  },
  {
    question: "Which data type stores true or false values?",
    options: ["String", "Number", "Boolean", "Object"],
    correct: 2
  },
  {
    question: "Which method is used to print output in JavaScript?",
    options: ["print()", "console.log()", "echo()", "display()"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;

  for (let i = 0; i < 4; i++) {
    document.getElementById("label" + i).innerText = q.options[i];
    document.getElementById("opt" + i).checked = false;
  }
}

function nextQuestion() {
  const options = document.getElementsByName("option");

  for (let i = 0; i < options.length; i++) {
    if (options[i].checked && i === quizData[currentQuestion].correct) {
      score++;
    }
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-box").innerHTML =
      `<h2>Quiz Finished</h2>
       <p>Your Score: ${score} / ${quizData.length}</p>`;
  }
}

// Load first question
loadQuestion();
