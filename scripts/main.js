document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('questions');
    questions.forEach((q, index) => {
        questionsContainer.appendChild(createQuestionElement(q, index));
    });
});

function createQuestionElement(questionObj, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-card bg-white p-6 rounded-lg shadow-md';
    questionDiv.innerHTML = `
        <h2 class="text-xl font-semibold mb-4">Questão ${index + 1}</h2>
        <p class="mb-4 whitespace-pre-wrap">${questionObj.question}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onclick="toggleAnswer(${index})">Revelar/Ocultar Resposta</button>
        <div id="answer-${index}" class="answer-content mt-4">
            <p class="whitespace-pre-wrap"></p>
        </div>
    `;
    return questionDiv;
}

function toggleAnswer(index) {
    const answerDiv = document.getElementById(`answer-${index}`);
    const answerContent = answerDiv.querySelector('p');

    if (answerDiv.classList.contains('show')) {
        answerDiv.classList.remove('show');
    } else {
        answerContent.textContent = questions[index].answer();
        answerDiv.classList.add('show');
    }
}