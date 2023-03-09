const inputFields: NodeListOf<HTMLInputElement> = document.querySelectorAll("[data-type=input]")

const errorTypes: Array<string>= ["typeMismatch", "tooLong", "tooShort", "valueMissing"];
const errorMessages: any = {
  typeMismatch: "O valor do campo está incorreto",
  patternMismatch: "URL invalida",
  tooLong: "Limite ultrapassado",
  tooShort: "Limite não atingido",
  valueMissing: "O campo não pode estar vazio",
};

function addErrorMessage(field: HTMLInputElement, message: string): void {
    field.parentNode!.querySelector('.invalid-feedback')!.textContent = message;
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
}

function addValidMessage(field: HTMLInputElement): void {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
}

function setErrorMessage(field: any): string {
    let message = "";
    errorTypes.forEach((error) => {
        if(field.validity[error]) {
            message = errorMessages[error];
        }
    })
    return message;
}

inputFields.forEach((input) => {
    validity(input)
})

function validity(field: HTMLInputElement): any {
    field.addEventListener("blur", () => {
        if(!field.validity.valid) {
            addErrorMessage(field, setErrorMessage(field))
        } else {
            addValidMessage(field)
        }
    })

}

