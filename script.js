// Exemplo básico de uma estrutura de história com cenas e escolhas
const story = {
  start: {
    text: "Você está em uma sala escura e vê duas portas à sua frente. Qual você escolhe?",
    choices: [
      { text: "Porta 1", nextScene: "door1" },
      { text: "Porta 2", nextScene: "door2" }
    ]
  },
  door1: {
    text: "Você entrou na primeira porta e encontrou um tesouro! Fim do jogo.",
    choices: []
  },
  door2: {
    text: "Você entrou na segunda porta e encontrou um monstro! Fim do jogo.",
    choices: []
  }
};

// Função para exibir uma cena
function showScene(sceneKey) {
  const scene = story[sceneKey];
  const sceneText = document.getElementById("scene-text");
  const choicesDiv = document.getElementById("choices");

  // Exibe o texto da cena
  sceneText.textContent = scene.text;

  // Limpa as escolhas anteriores
  choicesDiv.innerHTML = "";

  // Cria botões para cada escolha
  scene.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.onclick = () => showScene(choice.nextScene);
    choicesDiv.appendChild(button);
  });
}

// Inicia o jogo na primeira cena
showScene("start");
