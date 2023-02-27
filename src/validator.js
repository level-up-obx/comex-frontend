const inputs = document.querySelectorAll("input");



inputs.forEach((input) => {
  if(input.dataset.input === 'price') {
    const input = SimpleMaskMoney.setMask("#product-price", {
      afterFormat(e) {
        // console.log("afterFormat", e);
      },
      allowNegative: false,
      beforeFormat(e) {
        // console.log("beforeFormat", e);
      },
      negativeSignAfter: false,
      prefix: "R$: ",
      suffix: "",
      fixed: true,
      fractionDigits: 2,
      decimalSeparator: ",",
      thousandsSeparator: ".",
      cursor: "end",
    });
    input.formatToNumber();
  }
  input.addEventListener("blur", (event) => {
    validate(event.target);
  });
});

const validate = (input) => {
  if (input.validity.valid) {
    input.parentElement.children[0].classList.remove("form__message__error");
    input.classList.remove("form__input__error");
    input.parentElement.children[2].classList.add("hidden");
  } else {
    input.parentElement.children[0].classList.add("form__message__error");
    input.classList.add("form__input__error");
    input.parentElement.children[2].classList.remove("hidden");
    input.parentElement.children[2].innerHTML = showErrorMessage(
      input.validity
    );
  }
};

const errorTypes = ["typeMismatch", "tooLong", "tooShort", "valueMissing"];

const showErrorMessage = (input) => {
  let message = "";
  errorTypes.forEach((error) => {
    if (input[error]) {
      message = errorMessages[error];
    }
  });
  return message;
};

const errorMessages = {
  typeMismatch: "O valor do campo esta incorreto",
  tooLong: "Limite ultrapassado",
  tooShort: "Limite nao atingido",
  valueMissing: "O campo nao pode estar vazio",
};


