export default function CPFValido(campo: HTMLInputElement): boolean {
    const cpf = campo.value.replace(/\.|-/g, '')

    if(validaNumerosRepetidos(cpf) || primeiroDigito(cpf) || segundoDigito(cpf)) return true
    else return false

} 

function validaNumerosRepetidos(cpf: string): boolean {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf)
}

function primeiroDigito(cpf: any): boolean{
    let soma = 0
    let multiplicador = 10

    for(let i = 0; i < 9; i++){
        soma += cpf[i] * multiplicador
        multiplicador--
    }

    soma = (soma * 10) % 11

    if (soma == 10 || soma == 11) soma = 0

    return soma != cpf[9] 
}

function segundoDigito(cpf: any): boolean{
    let soma: number = 0
    let multiplicador: number = 11

    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * multiplicador
        multiplicador--        
    }

    soma = (soma * 10) % 11

    if(soma == 10 || soma == 11) soma = 0

    return soma != cpf[10] 
}