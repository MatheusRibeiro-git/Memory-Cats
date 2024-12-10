// Jogo da Memória
// Este código implementa um jogo de memória simples, onde o jogador precisa encontrar pares de cartas idênticas.

// Array de emojis que serão usados no jogo
const emojis = [
    "🐱‍👤", "🐱‍👤",
    "🐱‍🏍", "🐱‍🏍",
    "🐱‍💻", "🐱‍💻",
    "🐱‍🐉", "🐱‍🐉",
    "🐱‍👓", "🐱‍👓",
    "🐱‍🚀", "🐱‍🚀",
    "🐱", "🐱",
    "🐯", "🐯"
];

// Array para armazenar as cartas atualmente abertas
let openCards = [];

// Embaralha a ordem dos emojis aleatoriamente
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Cria elementos div para cada emoji e adiciona ao DOM
for (let i = 0; i < emojis.length; i++) {
    // Cria um novo elemento div para representar uma carta
    let box = document.createElement("div");
    // Adiciona a classe 'item' para estilização
    box.className = "item";
    // Define o conteúdo da carta como o emoji atual
    box.innerHTML = shuffleEmojis[i];
    // Adiciona um evento de clique à carta
    box.onclick = handleClick;
    // Adiciona a carta ao elemento pai com a classe 'game'
    document.querySelector(".game").appendChild(box);
}

// Função chamada quando uma carta é clicada
function handleClick() {
    // Se menos de duas cartas estão abertas
    if (openCards.length < 2) {
        // Mostra a carta virando-a
        this.classList.add("boxOpen");
        // Adiciona a carta clicada ao array de cartas abertas
        openCards.push(this);
    }

    // Se duas cartas estão abertas
    if (openCards.length === 2) {
        // Verifica se as cartas são um par após 500ms
        setTimeout(checkMatch, 500);
    }
}

// Função para verificar se as duas cartas abertas são um par
function checkMatch() {
    // Se as cartas são iguais
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        // Marca as cartas como correspondentes
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        // Se as cartas são diferentes, esconde-as novamente
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    // Limpa o array de cartas abertas para a próxima jogada
    openCards = [];

    // Verifica se todas as cartas foram encontradas
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        // Exibe uma mensagem de vitória
        alert("Você venceu!");
    }
}
