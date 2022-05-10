let quizContainer = document.getElementById('quiz')
let resultContainer = document.getElementById('results')
let submitButton = document.getElementById('submit')
let myQuestions = [
    {
        question: 'Which of the statuses listed below is not a status in squiz matrix?',
        answers: {
            a: 'Being Built',
            b: 'Pending Approval',
            c: 'Live',
            d: 'Safe Edit'
        },
        correctAnswer: 'd'
    },
    {
        question: 'Which of these is an asset within Squiz Matrix?',
        answers: {
            a: 'Web Page',
            b: 'Pop Quiz',
            c: 'Link',
            d: 'Status Listing'
        },
        correctAnswer: 'd'
    },
    {
        question: 'There is only one Root User in Squiz Matrix?',
        answers: {
            a: 'True',
            b: 'False',
        },
        correctAnswer: 'a'
    },
    {
        question: 'A standard Page is a type of asset in Squiz Matrix',
        answers: {
            a: 'True',
            b: 'False',
        },
        correctAnswer: 'b'
    }
]

function generateQuiz(questions, quizContainer, resultContainer, submitButton) {
    function showQuestions(questions, quizContainer) {
        let output = []
        let answers
        for (let i=0; i<questions.length; i++) {
            answers = []
            for (letter in questions[i].answers) {
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + questions[i].answers[letter]
                    + '</label>'
                )
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            )
        }
        quizContainer.innerHTML= output.join('')
    }
    function showResults(questions, quizContainer, resultContainer) {
        let answerContainers = quizContainer.querySelectorAll('.answers')
        let userAnswer = ''
        let numCorrect = 0
        for (let i = 0; i<questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value
            if(userAnswer===questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].style.backgroundColor = 'green'
            }
            else {
                answerContainers[i].style.backgroundColor = 'red'
            }
        }
        resultContainer.innerHTML = numCorrect + ' out of ' + questions.length
    }
    showQuestions(questions, quizContainer)
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultContainer)
    }    
}

generateQuiz(myQuestions, quizContainer, resultContainer, submitButton)