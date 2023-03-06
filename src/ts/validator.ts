const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
const errorTypes = ["typeMismatch", "tooLong", "tooShort", "valueMissing"];
const errorMessages: any = {
  typeMismatch: "O valor do campo está incorreto",
  tooLong: "Limite ultrapassado",
  tooShort: "Limite não atingido",
  valueMissing: "O campo não pode estar vazio",
};

const showErrorMessage = (input: any): string => {
  let message: string = "";
  errorTypes.forEach((error: string) => {
    if (input[error]) {
      message = errorMessages[error];
    }
  });
  return message;
};

const validate = (input: HTMLInputElement): void => {
  if (input.validity.valid) {
    input.parentElement!.children[0].classList.remove("text-danger");
    input.classList.remove("border-danger");
    input.parentElement!.children[2].classList.add("visually-hidden");
  } else {
    input.classList.add("border-danger");
    input.parentElement!.children[2].classList.remove("visually-hidden");
    input.parentElement!.children[2].innerHTML = showErrorMessage(
      input.validity
    );
  }
};

inputs.forEach((input) => {
  input.addEventListener("blur", (event: any) => {
    validate(event.target);
  });
});