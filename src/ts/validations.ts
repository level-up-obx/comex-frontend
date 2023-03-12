const inputFields: NodeListOf<HTMLInputElement> =
  document.querySelectorAll("[data-type=input]");

const errorTypes: Array<string> = [
  "typeMismatch",
  "tooLong",
  "tooShort",
  "valueMissing",
];
const errorMessages: any = {
  typeMismatch: "O valor do campo está incorreto",
  patternMismatch: "URL invalida",
  tooLong: "Limite ultrapassado",
  tooShort: "Limite não atingido",
  valueMissing: "O campo não pode estar vazio",
};

function addErrorMessage(field: HTMLInputElement, message: string): void {
  field.parentNode!.querySelector(".invalid-feedback")!.textContent = message;
  field.classList.add("is-invalid");
  field.classList.remove("is-valid");
}

function addValidMessage(field: HTMLInputElement): void {
  field.classList.remove("is-invalid");
  field.classList.add("is-valid");
}

function setErrorMessage(field: any): string {
  let message = "";
  errorTypes.forEach((error) => {
    if (field.validity[error]) {
      message = errorMessages[error];
    }
  });
  return message;
}

inputFields.forEach((input) => {
  validity(input);
});

function validity(field: HTMLInputElement): any {
  field.addEventListener("blur", () => {
    if (!field.validity.valid) {
      addErrorMessage(field, setErrorMessage(field));
    } else {
      addValidMessage(field);
    }
    if (field.id == "client__cpf") {
      const vali: boolean = validateCpf(
        field.value.replaceAll(".", "").replace("-", "")
      );
      if (!vali) {
        addErrorMessage(field, "CPF Inválido");
      }
    }
  });
}

function validateCpf(cpf: string): any {
  let sameNumbers: string[] = [
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  if (cpf.length != 11) {
    return false;
  } else if (sameNumbers.find((element) => element == cpf)) {
    return false;
  } else {
    let numbers: string = cpf.substring(0, 9);
    let digits: string = cpf.substring(9);

    let sum: number = 0;
    for (let i = 10; i > 1; i--) {
      sum += parseInt(numbers.charAt(10 - i)) * i;
    }

    let result: number = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    if (result != parseInt(digits.charAt(0))) {
      return false;
    }

    sum = 0;
    numbers = cpf.substring(0, 10);

    for (let k = 11; k > 1; k--) {
      sum += parseInt(numbers.charAt(11 - k)) * k;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    if (result != parseInt(digits.charAt(1))) {
      return false;
    }
    return true;
  }
}
