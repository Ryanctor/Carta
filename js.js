const envelopeFechado = document.getElementById('envelope');
const envelopeAberto = document.getElementById('envelope-aberto');
const folha = document.getElementById('folha');

envelopeFechado.addEventListener('click', () => {
  envelopeFechado.style.display = 'none';        // Esconde o fechado
  envelopeAberto.style.display = 'block';        // Mostra o aberto
  folha.style.display = 'block';                 // Mostra a folha
});
