let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
   
    // Pegar o valor digitado no input
    let valorInput = input.value;

    // Se não for vazio, nem nulo, nem indefinido
    if ((valorInput !== '') && (valorInput !== null) && (valorInput !== undefined)){

        ++contador;

        let novoItem = `<div class="item" id="${contador}">
            <div class="item-icone" onclick="marcarTarefa(${contador})">                
                <i class="material-symbols-outlined circle" id="icone_${contador}">circle</i>
            </div>
            <div class="item-nome" onclick="marcarTarefa(${contador})">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><i class="material-symbols-outlined">delete</i>Deletar</button>
            </div>
        </div>`;

        //Adicionar novo item no main
        main.innerHTML += novoItem;
        // Limpar input area
        input.value = '';
        input.focus();
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");
    console.log(classe);

    if (classe == 'item'){
        item.classList.add('clicado')
        var icone = document.getElementById('icone_' + id);
        // icone.classList.remove('circle');
        // icone.classList.add('check_circle');
        icone.innerHTML = 'check_circle';
        item.parentNode.appendChild(item);

    } else {
        item.classList.remove('clicado')
        var icone = document.getElementById('icone_' + id);
        icone.innerHTML = 'circle';
    }
}

input.addEventListener("keyup", function (event){
    
    //Se teclou o ENTER
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})