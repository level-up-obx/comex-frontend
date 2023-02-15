import { criaCategoria } from '../modelo.js'

const campoNome = document.querySelector("#nome")
const form = document.querySelector("#formCategoria")

function formattedDataCurrent() {
    const date = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    const formattedData = `${year}-${month}-${day}`;
    return formattedData // exemplo de saída: "2023-02-15"
}


form.addEventListener("submit", function (event) {
    event.preventDefault();

    let novaCategoria = criaCategoria(campoNome.value)
    console.log(novaCategoria)

    campoNome.value = ''
    campoNome.focus()
});


