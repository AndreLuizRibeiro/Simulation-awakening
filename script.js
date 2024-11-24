// Objeto com os cenários e caminhos possíveis
const caminhos = {
  inicio: {
    descricao: "Você está em uma sala branca.",
    opcoes: [
      { texto: "Explorar o terminal", proximo: "terminal" },
      { texto: "Ignorar o terminal e tentar a porta", proximo: "porta_inicial" },
    ],
  },
  terminal: {
    descricao: "Você encontrou um terminal. O que deseja fazer?",
    opcoes: [
      { texto: "Continuar explorando o terminal", proximo: "mensagens_enigmaticas" },
      { texto: "Voltar para a sala inicial", proximo: "inicio" },
    ],
  },
  mensagens_enigmaticas: {
    descricao: "O terminal exibe mensagens enigmáticas sobre a 'realidade'.",
    opcoes: [
      { texto: "Investigar profundamente", proximo: "erro_terminal" },
      { texto: "Ignorar e tentar outra porta", proximo: "sala_com_glitches" },
    ],
  },
  erro_terminal: {
    descricao: "O terminal apresenta um erro. Você encontra uma porta secreta.",
    opcoes: [
      { texto: "Entrar na porta secreta", proximo: "nova_sala_terminal" },
      { texto: "Voltar e investigar melhor a sala inicial", proximo: "inicio" },
    ],
  },
  nova_sala_terminal: {
    descricao: "Você entrou em uma nova sala com outro terminal.",
    opcoes: [
      { texto: "Interagir com o terminal", proximo: "porta_saida" },
      { texto: "Voltar para a sala inicial", proximo: "inicio" },
    ],
  },
  porta_saida: {
    descricao: "Você encontrou uma porta marcada como 'Saída'.",
    opcoes: [
      { texto: "Entrar na porta 'Saída'", proximo: "inicio" },
    ],
  },
  porta_inicial: {
    descricao: "Você tentou a porta, mas ela está trancada.",
    opcoes: [
      { texto: "Voltar para explorar o terminal", proximo: "terminal" },
    ],
  },
  sala_com_glitches: {
    descricao: "Você está em uma sala com glitches visuais por toda parte.",
    opcoes: [
      { texto: "Tocar no glitch", proximo: "inicio" },
      { texto: "Ignorar e continuar explorando", proximo: "observador" },
    ],
  },
  observador: {
    descricao: "Você encontrou o Observador. Ele apresenta um enigma.",
    opcoes: [
      { texto: "Seguir a dica do Observador", proximo: "saida_definitiva" },
      { texto: "Ignorar o Observador", proximo: "sala_com_glitches" },
    ],
  },
  saida_definitiva: {
    descricao: "Você resolveu o enigma e encontrou a saída definitiva.",
    opcoes: [
      { texto: "Reiniciar o jogo", proximo: "inicio" },
    ],
  },
};

// Função para renderizar um cenário
function renderizarCenario(cenarioAtual) {
  const cenario = caminhos[cenarioAtual];
  const cenarioDiv = document.getElementById("cenario");

  // Atualizar a descrição
  cenarioDiv.innerHTML = `<h1>${cenario.descricao}</h1>`;

  // Adicionar as opções
  cenario.opcoes.forEach((opcao) => {
    const botao = document.createElement("button");
    botao.innerText = opcao.texto;
    botao.onclick = () => renderizarCenario(opcao.proximo);
    cenarioDiv.appendChild(botao);
  });
}

// Inicializar o jogo
document.addEventListener("DOMContentLoaded", () => renderizarCenario("inicio"));
