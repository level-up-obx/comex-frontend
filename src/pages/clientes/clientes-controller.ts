import { Cliente } from '../../modelo.js';
import IMask from 'imask';

class ClientesContoller {
    private formClientes: HTMLFormElement;
    private inputTelefone: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    inputCep: HTMLInputElement;
    maskTelefone: IMask.InputMask<{ mask: string }>
    maskCpf: IMask.InputMask<{ mask: string }>
    maskCep: IMask.InputMask<{ mask: string }>

    constructor() {
        this.formClientes = document.querySelector('#formClientes')
        this.inputTelefone = document.getElementById('telefone') as HTMLInputElement
        this.inputCpf = document.getElementById('cpf') as HTMLInputElement
        this.inputCep = document.getElementById('cep') as HTMLInputElement

        this.maskTelefone = IMask( this.inputTelefone, { mask: '(00)00000-0000' })
        this.maskCpf = IMask( this.inputCpf, { mask: '000.000.000-00' })
        this.maskCep = IMask( this.inputCep, { mask: '00000-000' })
    }

    validarCpf(cpf: string): boolean {
        cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
        if (cpf.length !== 11) return false; // CPF deve ter 11 dígitos

        // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
        let iguais = true;
        for (let i = 1; i < 11 && iguais; i++) {
          if (cpf[i] !== cpf[0]) iguais = false;
        }
        if (iguais) return false;

        // Calcula os dígitos verificadores
        let soma = 0;
        let resto;
        for (let i = 0; i < 9; i++) {
          soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) return false;

        soma = 0;
        for (let i = 0; i < 10; i++) {
          soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(10))) return false;

        return true;
      }

      get maskTelefoneInput() {return this.maskTelefone}
      get maskCpfInput() {return this.maskCpf}

      adicionarCliente() {
          let getThis = this;
          this.formClientes.addEventListener('submit', function (event: Event & { target: HTMLFormElement }) {
              event.preventDefault()

              let nome = event.target.elements.namedItem('nome') as HTMLInputElement;
              // let nome = event.target.elements['nome']
              let sobrenome = event.target.elements.namedItem('sobrenome') as HTMLInputElement;
              let cpf = getThis.maskCpfInput.unmaskedValue
              let telefone = getThis.maskTelefoneInput.unmaskedValue
              let email = event.target.elements.namedItem('email') as HTMLInputElement;

              let logradouro = event.target.elements.namedItem('logradouro') as HTMLInputElement;
              let numero = event.target.elements.namedItem('numero') as HTMLInputElement;
              let bairro = event.target.elements.namedItem('bairro') as HTMLInputElement;
              let localidade = event.target.elements.namedItem('localidade') as HTMLInputElement;
              let uf = event.target.elements.namedItem('uf') as HTMLInputElement;
              let cep = event.target.elements.namedItem('cep') as HTMLInputElement;
              let complemento = event.target.elements.namedItem('complemento') as HTMLInputElement;

              let endereco = {
                  rua: logradouro.value,
                  numero: numero.value || null,
                  bairro: bairro.value,
                  cidade: localidade.value,
                  estado: uf.value,
                  cep: cep.value,
                  complemento: complemento.value || null
              }

              let novoCliente = new Cliente(
                  nome.value,
                  sobrenome.value,
                  cpf,
                  telefone,
                  endereco,
                  email.value
              )

              const cpfInput = document.getElementById('cpf');
              const cpfError = document.getElementById('cpf-error');

              if (!getThis.validarCpf(cpf)) {
                  cpfError.style.display = 'block';
                  cpfInput.classList.add('invalid');
              }  else {
                  cpfError.style.display = 'none';
                  cpfInput.classList.remove('invalid');
                  fetch('http://localhost:3000/clientes', {
                          method: 'POST', // or 'PUT'
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(novoCliente),
                      })
                      .then((response) => response.json())
                      .then((data) => {
                          console.log(`${data.nome}(CPF: ${data.cpf}) cadastrada com sucesso.`);
                      })
                      .catch((error) => {
                          console.error('Não foi possível cadastrar o cliente! Aguarde uns minutos e tente novamente.');
                      });

                //   console.log('novoCliente', novoCliente)
                }

          })
      }

      get maskCepInput() {return this.maskCep}

      async searchAddress(): Promise<any> {
        try {
            const url = `https://viacep.com.br/ws/${this.maskCepInput.unmaskedValue}/json/`;

            const options: RequestInit = {
                method: 'GET',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json'
                }
              };

            const response = await fetch(url, options);
            const data = await response.json();
            if (data.error) { throw new Error("Cep inválido!") }

            return data

          } catch (error) {
                console.log('Erro do ao tentar buscar o cep.');
                throw error
          }
    }
    onblurCep() {
        // let getThis = this;
        this.inputCep.onblur = async () => {
            try {
                let enderecoViaCep: any = await this.searchAddress()

                let logradouro = document.getElementById('logradouro') as HTMLInputElement
                let complemento = document.getElementById('complemento') as HTMLInputElement
                let uf = document.getElementById('uf') as HTMLInputElement
                let bairro = document.getElementById('bairro') as HTMLInputElement
                let localidade = document.getElementById('localidade') as HTMLInputElement

                if (enderecoViaCep) {
                    logradouro.value = enderecoViaCep.logradouro
                    complemento.value = enderecoViaCep.complemento
                    uf.value = enderecoViaCep.uf
                    bairro.value = enderecoViaCep.bairro
                    localidade.value = enderecoViaCep.localidade
                    // console.log(enderecoViaCep)
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}

const clientes = new ClientesContoller();
clientes.adicionarCliente();
clientes.onblurCep();
