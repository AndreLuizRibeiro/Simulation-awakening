const story = {
  start: {
    text: "Você está em uma sala escura e vê duas portas à sua frente. Qual você escolhe?",
    image: "images/sala-escura.jpg",
    choices: [
      { text: "Porta 1", nextScene: "door1" },
      { text: "Porta 2", nextScene: "door2" }
    ]
  },
  door1: {
    text: "Você entrou na primeira porta e encontrou um tesouro! Fim do jogo.",
    image: "images/tesouro.jpg",
    choices: []
  },
  door2: {
    text: "Você entrou na segunda porta e encontrou um monstro! Fim do jogo.",
    image: "images/monstro.jpg",
    choices: []
  }
};

// Função para exibir uma cena
function showScene(sceneKey) {
  const scene = story[sceneKey];
  const sceneText = document.getElementById("scene-text");
  const choicesDiv = document.getElementById("choices");
  const sceneImage = document.getElementById("scene-image");

  // Exibe o texto da cena
  sceneText.textContent = scene.text;

  // Atualiza a imagem da cena, se existir
  if (scene.image) {
    sceneImage.src = scene.image;
    sceneImage.style.display = "block";
  } else {
    sceneImage.style.display = "none";
  }

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
