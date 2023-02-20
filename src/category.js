import {createCategory} from "./modelo.js"

document.getElementById("btn_save").onclick = save;
function save() {
    const input_category = document.getElementById("input_category")
    const category_name = input_category.value
    const category = createCategory(category_name)
    input_category.value = ""
    input_category.focus()
    console.log(category)
}
