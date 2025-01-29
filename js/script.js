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
         document.addEventListener("DOMContentLoaded", () => {
            const iconCards = document.querySelectorAll('.midia-social-tudo');

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Para de observar após a animação
                    }
                });
            }, { threshold: 0.1 });

            iconCards.forEach(card => observer.observe(card));
        });

        document.addEventListener("DOMContentLoaded", () => {
            const sectionApoie = document.querySelector('.apoie');

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible'); // Adiciona a animação
                        observer.unobserve(entry.target); // Para de observar após animar
                    }
                });
            }, { threshold: 0.2 });

            observer.observe(sectionApoie);
        });

