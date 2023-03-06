const inputs = document.querySelectorAll("input");
const errorTypes = ["typeMismatch", "tooLong", "tooShort", "valueMissing"];
const errorMessages = {
  typeMismatch: "O valor do campo está incorreto",
  tooLong: "Limite ultrapassado",
  tooShort: "Limite não atingido",
  valueMissing: "O campo não pode estar vazio",
};

const showErrorMessage = (input) => {
  let message = "";
  errorTypes.forEach((error) => {
    if (input[error]) {
      message = errorMessages[error];
    }
  });
  return message;
};

const validate = (input) => {
  if (input.validity.valid) {
    input.parentElement.children[0].classList.remove("text-danger");
    input.classList.remove("border-danger");
    input.parentElement.children[2].classList.add("visually-hidden");
  } else {
    input.classList.add("border-danger");
    input.parentElement.children[2].classList.remove("visually-hidden");
    input.parentElement.children[2].innerHTML = showErrorMessage(
      input.validity
    );
  }
};

inputs.forEach((input) => {
  // // Mascara para o valor monetário.
  // if(input.dataset.input === 'price') {
  //   SimpleMaskMoney.setMask("#product-price", {
  //     negativeSignAfter: false,
  //     prefix: "R$: ",
  //     suffix: "",
  //     fixed: true,
  //     fractionDigits: 2,
  //     decimalSeparator: ",",
  //     thousandsSeparator: ".",
  //     cursor: "end",
  //   });
  // }
  input.addEventListener("blur", (event) => {
    validate(event.target);
  });
});