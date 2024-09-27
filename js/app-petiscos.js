// Seleciona a seção com o id 'petiscos'
const petiscosSection = document.getElementById('petiscos');

// Cria uma string HTML a partir dos dados da lista
let petiscoContent = '';

petiscos.forEach(item => {
    petiscoContent += `<div class="item-container">
                        <h2>${item.petisco}</h2>
                        <span></span>
                        <p>${item.petiscoPreco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>`;
});

// Insere o conteúdo gerado na seção
petiscosSection.innerHTML = petiscoContent;
