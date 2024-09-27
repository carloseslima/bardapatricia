// Seleciona a seção com o id 'porcoes'
const porcoesSection = document.getElementById('porcoes');

// Cria uma string HTML a partir dos dados da lista
let porcaoContent = '';

porcoes.forEach(item => {
    porcaoContent += `<div class="item-container">
                        <h2>${item.porcao}</h2>
                        <span></span>
                        <p>${item.porcaoPreco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>`;
});

// Insere o conteúdo gerado na seção
porcoesSection.innerHTML = porcaoContent;
