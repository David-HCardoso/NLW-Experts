// array
const perguntas = [
    {
        // Objeto
        pergunta: "O que significa a sigla HTML?",
        respostas: [
            "Hyper Text Markup Language",
            "High-Level Text Management Language",
            "Hyperlink and Text Markup Language",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação estrita",
            "Atribuição",
            "Comparação solta",
        ],
        correta: 0
    },
    {
        pergunta: "Como você declara uma variável em JavaScript?",
        respostas: [
            "let myVar = 5;",
            "const myVar = 5;",
            "var myVar = 5;",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
        respostas: [
            "console.log()",
            "print()",
            "log.console()",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Uma estrutura de controle de fluxo",
            "Um tipo de dado que armazena elementos",
            "Um tipo de função",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a finalidade do comando 'if' em JavaScript?",
        respostas: [
            "Definir uma função",
            "Executar código condicionalmente",
            "Declarar uma variável",
        ],
        correta: 1
    },
    {
        pergunta: "Como você escreve um comentário em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "<!-- Este é um comentário -->",
        ],
        correta: 0
    },
    {
        pergunta: "O que faz o método 'toUpperCase()' em uma string?",
        respostas: [
            "Converte a string para maiúsculas",
            "Converte a string para minúsculas",
            "Remove espaços em branco",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Document Object Model - uma representação da estrutura de uma página HTML",
            "Dynamic Object Management - uma técnica de gerenciamento de objetos",
            "Data Output Model - um modelo de saída de dados",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador lógico 'OU' em JavaScript?",
        respostas: [
            "&&",
            "||",
            "!",
        ],
        correta: 1
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

