// array
const perguntas = [
    {
        pergunta: "Qual é o objetivo principal da psicologia hospitalar?",
        respostas: [
            "Ajudar os médicos a prescrever tratamentos",
            "Fornecer suporte psicológico aos pacientes e suas famílias",
            "Administrar os recursos financeiros do hospital",
        ],
        correta: 1
    },
    {
        pergunta: "Quais são algumas das áreas de atuação da psicologia hospitalar?",
        respostas: [
            "Aconselhamento familiar, terapia de grupo, psicoterapia individual",
            "Cirurgia, neurologia, ortopedia",
            "Pediatria, obstetrícia, geriatria",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a importância da comunicação na psicologia hospitalar?",
        respostas: [
            "É importante apenas para os médicos se comunicarem entre si",
            "Ajuda na compreensão das necessidades emocionais dos pacientes e na construção de um vínculo terapêutico",
            "Não tem impacto significativo no tratamento dos pacientes",
        ],
        correta: 1
    },
    {
        pergunta: "Quais são alguns desafios enfrentados pelos psicólogos hospitalares?",
        respostas: [
            "Baixa demanda por serviços de saúde mental",
            "Comunicação eficaz com equipes médicas e pacientes",
            "Falta de treinamento em técnicas de intervenção psicológica",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o burnout do profissional de saúde?",
        respostas: [
            "Um tipo de infecção hospitalar",
            "Um fenômeno que envolve esgotamento físico e emocional devido ao estresse no trabalho",
            "Um tipo de tratamento para pacientes com queimaduras",
        ],
        correta: 1
    },
    {
        pergunta: "Quais são algumas estratégias para lidar com o estresse no ambiente hospitalar?",
        respostas: [
            "Ignorar os sentimentos para se concentrar no trabalho",
            "Buscar apoio social, praticar atividades de relaxamento, e cuidar da própria saúde",
            "Trabalhar mais horas para se distrair do estresse",
        ],
        correta: 1
    },
    {
        pergunta: "O que é a humanização da assistência hospitalar?",
        respostas: [
            "Um procedimento cirúrgico avançado",
            "Um programa de treinamento para médicos",
            "Uma abordagem que enfatiza o respeito, a empatia e a dignidade no cuidado ao paciente",
        ],
        correta: 2
    },
    {
        pergunta: "O que significa a sigla SUS?",
        respostas: [
            "Sistema Universal de Saúde",
            "Sistema Único de Saúde",
            "Serviço Universal de Saúde",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o papel do psicólogo hospitalar na equipe multidisciplinar?",
        respostas: [
            "Fornecer diagnósticos médicos",
            "Coordenar o fluxo de pacientes",
            "Oferecer suporte emocional e psicológico aos pacientes, familiares e equipe médica",
        ],
        correta: 2
    },
    {
        pergunta: "Como a psicologia hospitalar pode contribuir para a recuperação dos pacientes?",
        respostas: [
            "Fornecendo medicação psiquiátrica",
            "Ajudando os pacientes a entender a doença e seu impacto emocional, e fornecendo estratégias de enfrentamento",
            "Realizando cirurgias psicológicas",
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

