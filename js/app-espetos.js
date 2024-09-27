// Seleciona a seção com o id 'espetos'
const espetosSection = document.getElementById('espetos');

// Cria uma string HTML a partir dos dados da lista
let htmlContent = '';

espetos.forEach(item => {
    htmlContent += `<div class="item-container">
                        <h2>${item.espeto}</h2>
                        <span></span>
                        <p>${item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>`;
});

// Insere o conteúdo gerado na seção
espetosSection.innerHTML = htmlContent;
