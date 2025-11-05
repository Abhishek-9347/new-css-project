const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "Technology",
    question: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    category: "Sports",
    question: "How many players are there in a football (soccer) team on the field?",
    choices: ["9", "10", "11"],
    answer: "11"
  }
];

// ✅ Step 2: Function to get a random question
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// ✅ Step 3: Function to get a random computer choice from the available choices
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// ✅ Step 4: Function to compare and return the result
function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

// ✅ Step 5: Example usage
const randomQuestion = getRandomQuestion(questions);
console.log("Category:", randomQuestion.category);
console.log("Question:", randomQuestion.question);
console.log("Choices:", randomQuestion.choices);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer's choice:", computerChoice);

const result = getResults(randomQuestion, computerChoice);
console.log(result);