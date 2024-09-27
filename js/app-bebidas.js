// Seleciona a seção com o id 'bebidas'
const bebidasSection = document.getElementById('bebidas');

// Cria uma string HTML a partir dos dados da lista
let bebidaContent = '';

bebidas.forEach(item => {
    bebidaContent += `<div class="item-container">
                        <h2>${item.bebida}</h2>
                        <span></span>
                        <p>${item.bebidaPreco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>`;
});

// Insere o conteúdo gerado na seção
bebidasSection.innerHTML = bebidaContent;
