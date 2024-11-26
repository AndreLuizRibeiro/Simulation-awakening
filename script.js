const cenarios = {
  introducao: {
    descricao: "Algo deu errado no carregamento da simulação, aprese-se antes que seja tarde. Boa Sorte!",
    Escolhas: [
       { texto: "Acordar", proximo: "inicio" },
      { texto: "Creditos", proximo: "creditos" },
    ],
  },
  creditos: {
    descricao: "Jogo desenvolvido por alguem",
    Escolhas: [
       { texto: "Voltar", proximo: "introducao" },
      { texto: "Sair", proximo: "introducao" },
    ],
  }, 
  inicio: {
    descricao: "Você está em uma sala branca. O que deseja fazer?",
    escolhas: [
      { texto: "Explorar o terminal", proximo: "explorar_terminal" },
      { texto: "Tentar a porta", proximo: "tentar_porta" },
    ],
  },
  explorar_terminal: {
    descricao:
      "Você se aproxima do terminal e vê uma tela piscando com linhas de código. O que fazer?",
    escolhas: [
      { texto: "Continuar explorando", proximo: "continuar_explorando_terminal" },
      { texto: "Ignorar e tentar outra porta", proximo: "tentar_porta" },
    ],
  },
  continuar_explorando_terminal: {
    descricao:
      "O terminal revela mensagens enigmáticas sobre a 'realidade'. Uma linha exibe 'Erro no Sistema'.",
    escolhas: [
      { texto: "Investigar profundamente", proximo: "porta_secreta" },
      { texto: "Ignorar e voltar", proximo: "inicio" },
    ],
  },
  porta_secreta: {
    descricao:
      "O terminal desliga e voce nota que uma pequena porta apareceu atrás de você. O que fazer?",
    escolhas: [
      { texto: "Entrar na porta misteriosa", proximo: "inicio" },
      { texto: "Ignorar e tentar outra porta", proximo: "tentar_porta" },
    ],
  },
  tentar_porta: {
    descricao:
      "A porta leva a uma sala com um objeto estranho. O que você faz?",
    escolhas: [
      { texto: "Inspecionar o objeto", proximo: "inspecionar_objeto" },
      { texto: "Ignorar e seguir em frente", proximo: "sala_com_glitch" },
    ],
  },
  inspecionar_objeto: {
    descricao:
      "O objeto contém uma mensagem: 'Você não pertence aqui'. O que fazer?",
    escolhas: [
      { texto: "Continuar explorando", proximo: "sala_com_glitch" },
      { texto: "Voltar para a sala inicial", proximo: "inicio" },
    ],
  },
  sala_com_glitch: {
    descricao:
      "A sala começa a distorcer. Você vê um glitch pulsando na parede.",
    escolhas: [
      { texto: "Tocar no glitch", proximo: "inicio" },
      { texto: "Ignorar e continuar", proximo: "observador" },
    ],
  },
  observador: {
    descricao:
      "Você encontra o Observador. Ele fala enigmas sobre a simulação. O que fazer?",
    escolhas: [
      { texto: "Seguir o enigma", proximo: "saida" },
      { texto: "Ignorar o Observador", proximo: "inicio" },
    ],
  },
  saida: {
    descricao:
      "Você parece ter quebrado o loop... Mas será mesmo o fim? Reiniciar o jogo?",
    escolhas: [
      { texto: "Sim", proximo: "inicio" },
    ],
  },
};

// Referências
const cenarioDiv = document.getElementById("cenario");

// Função para atualizar o cenário
function atualizarCenario(cenarioId) {
  const cenario = cenarios[cenarioId];
  cenarioDiv.innerHTML = `
    <h1>${cenario.descricao}</h1>
    ${cenario.escolhas
      .map(
        (escolha, index) =>
          `<button onclick="escolher('${cenarioId}', ${index})">${escolha.texto}</button>`
      )
      .join("")}
  `;
}

// Função para gerenciar escolhas
function escolher(cenarioAtual, escolhaIndex) {
  const proximoCenario = cenarios[cenarioAtual].escolhas[escolhaIndex].proximo;
  atualizarCenario(proximoCenario);
}

// Iniciar o jogo
function iniciarJogo() {
  // Esconde o botão "Acordar" e exibe o primeiro cenário
  document.getElementById("cenarios").innerHTML = "";
  atualizarCenario("introducao");
}
