// array
const perguntas = [
    {
        pergunta: "Qual é a capital do Brasil?",
        respostas: [
            "Rio de Janeiro",
            "Brasília",
            "São Paulo",
        ],
        correta: 1
    },
    {
        pergunta: "Quem escreveu 'Dom Quixote'?",
        respostas: [
            "Miguel de Cervantes",
            "William Shakespeare",
            "Friedrich Nietzsche",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o maior oceano do mundo?",
        respostas: [
            "Oceano Índico",
            "Oceano Pacífico",
            "Oceano Atlântico",
        ],
        correta: 1
    },
    {
        pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
        respostas: [
            "Thomas Jefferson",
            "George Washington",
            "Abraham Lincoln",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o símbolo químico do ouro?",
        respostas: [
            "O",
            "Au",
            "Ag",
        ],
        correta: 1
    },
    {
        pergunta: "Quem pintou a 'Mona Lisa'?",
        respostas: [
            "Leonardo da Vinci",
            "Pablo Picasso",
            "Vincent van Gogh",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o país com a maior população do mundo?",
        respostas: [
            "Índia",
            "China",
            "Estados Unidos",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a montanha mais alta do mundo?",
        respostas: [
            "Monte Everest",
            "Monte Kilimanjaro",
            "Monte Fuji",
        ],
        correta: 0
    },
    {
        pergunta: "Quem escreveu 'Romeu e Julieta'?",
        respostas: [
            "William Shakespeare",
            "Charles Dickens",
            "Jane Austen",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital da França?",
        respostas: [
            "Londres",
            "Roma",
            "Paris",
        ],
        correta: 2
    },
];

// Pega o documento para usar o documento
const quiz = document.querySelector('#quiz')
// Função que busca o elemento
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição, pega um item e trabalha com ele
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    
    //Verifica ação na tela (eventos)
    dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta //'==' compara sem considerar o tipo, '===' considera o tipo
        corretas.delete(item)
        if (estaCorreta){
            corretas.add(item)
        }    

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas    
    }
    
    
    quizItem.querySelector('dl').appendChild(dt) //adicona filho
  }
//Remove o elemento (Span)
quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}

