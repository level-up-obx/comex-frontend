import {createCategory} from "./modelo.js"

const input_category = document.getElementById("input_category")

document.getElementById("btn_save").onclick = save;
function save() {
    const category = createCategory(input_category.value)
    input_category.value = ""
    input_category.focus()
    console.log(category)
}
