//establish data for questions, answers, and correct answers
const quizData = [
    {
        question: 'A form that ask for or gives a response of true or false would be considered a:',
        a: 'Good or Bad',
        b: 'True or False',
        c: 'Online or Offline',
        d: 'Based or Unbased',
        correrct: "b"
    }, {
        question: 'A variable can take a value type of:',
        a: 'Boolean, Integer, Phrase',
        b: 'String, Boolean, Integer',
        c: 'String, Yarn, Thread',
        d: 'Integer, String, Bottle',
        correct: 'b',
    }, {
        question: 'What tag is used to call on a .js file in an html file?',
        a: '<h1>',
        b: '<body>',
        c: '<link>',
        d: '<script>',
        correct: 'd',
    }, {
        question: 'An array in javascript can be used to store all of the following except:',
        a: 'Strings and arrays',
        b: 'Booleans',
        c: 'Integers',
        d: 'Furniture',
        correct: 'd',
    }, {
        question: 'In and if/else statement, how are the decalarations separated?',
        a: '{}',
        b: '[]',
        c: '()',
        d: '||',
        correct: 'a',
    },

];
//establish variables to grab html positions
var question = document.getElementById("question");
var aText = document.getElementById("a-text");
var bText = document.getElementById("b-text");
var cText = document.getElementById("c-text");
var dText = document.getElementById("d-text");
var submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

//function to make the quiz run
startQuiz();

function startQuiz() {
    //change the question data to match the current question
    //and answers based on position of quiz
    var currentQuizData = quizData[currentQuestion];

    question.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;


};

//compare selected answers to correct answers to allow progression in quiz
//allow progression with correct answer
//wrong answer gives prompt
//record score as time left on timer
function itemSelected() {
    const answerEls = document.querySelectorAll(".choice");

    answerEls.forEach((answer) function () {
        if (answerEl.checked) {
            return answerEl.id;
        }
    });

    return undefined;

};

submit.addEventListener("click", function () {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        startQuiz();
    } else {
        //alert of score and option to save high score
        alert("Congratulations!");
    };
});
