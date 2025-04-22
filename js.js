const envelopeFechado = document.getElementById('envelope');
const envelopeAberto = document.getElementById('envelope-aberto');
const folha = document.getElementById('folha');
const mensagemContainer = document.getElementById('mensagem-container');
const botaoSim = document.querySelector('.botao-normal');
const respostaSim = document.getElementById('resposta-sim');

// Ao clicar no envelope fechado
envelopeFechado.addEventListener('click', () => {
  envelopeFechado.style.display = 'none';        // Esconde o fechado
  mensagemContainer.style.display = 'block';     // Mostra o container
  envelopeAberto.style.display = 'block';        // Mostra o envelope aberto
  folha.style.display = 'block';                 // Mostra a folha
});

// Ao clicar no botão "Sim"
botaoSim.addEventListener('click', () => {
  mensagemContainer.style.display = 'none';      // Esconde o envelope aberto + folha
  respostaSim.style.display = 'block';           // Mostra a resposta com coração
});
