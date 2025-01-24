document.getElementById("verMaisBtn").addEventListener("click", function () {
    const hiddenItems = document.querySelector(".hidden-items");
  
    // Alterna a exibição dos itens ocultos
    hiddenItems.classList.toggle("show");
  
    // Altera o texto do botão
    if (hiddenItems.classList.contains("show")) {
      this.textContent = "VER MENOS";
    } else {
      this.textContent = "VER TUDO";
    }
  });

  // Adiciona uma pequena interação visual, se desejar
document.querySelectorAll('.audio-btn').forEach(button => {
  button.addEventListener('mouseenter', function() {
      button.style.transform = 'scale(1.1)';
  });

  button.addEventListener('mouseleave', function() {
      button.style.transform = 'scale(1)';
  });
});

