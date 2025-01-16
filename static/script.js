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

const mp = new MercadoPago('APP_USR-00addd67-f823-493e-bd42-a28ad486adc1', {
  locale: 'pt-BR',
});

// Função para criar o checkout
document.getElementById('pay-button').addEventListener('click', function() {
  const preference = {
    items: [
      {
        title: 'Produto Exemplo',
        quantity: 1,
        currency_id: 'BRL',
        unit_price: 10.0,
      },
    ],
  };

  // Criar a preferência de pagamento
  mp.checkout({
    preference: {
      items: preference.items,
    },
    autoOpen: true,  // Abrir o checkout automaticamente
  });
});