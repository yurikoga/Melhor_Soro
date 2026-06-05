const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const imgBox = card.querySelector('.img-box');
  const img = card.dataset.img;

  // quando passa o mouse
  card.addEventListener('mouseenter', () => {
    imgBox.style.backgroundImage = `url(${img})`;
  });

  // quando sai o mouse
  card.addEventListener('mouseleave', () => {
    imgBox.style.backgroundImage = "none";
  });
});

let qtd = 1;

function aumentar() {
  qtd++;
  document.getElementById("qtd").innerText = qtd;
}

function diminuir() {
  if (qtd > 1) {
    qtd--;
    document.getElementById("qtd").innerText = qtd;
  }
}
