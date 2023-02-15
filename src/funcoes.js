const { number } = require("yargs");

/**
 * Implemente uma função que receba o nome de um cliente e devolve um cumprimento para ele.
 *
 * EXEMPLO:
 *   - Se o nome do cliente é Bill Gates, o cumprimento deve ser "Olá, Bill Gates!".
 *   - Se o nome do cliente é Steve Jobs, o cumprimento deve ser "Olá, Steve Jobs!".
 */
function cumprimenta(name) {
  return `Olá, ${name}!`;
}

/**
 * Implemente uma função que recebe o valor de uma compra e a quantidade de itens comprados,
 * e retorne o valor do desconto de acordo com a quantidade de itens.
 *
 * A TABELA DE DESCONTO É:
 *   - 1 item: 0 de desconto;
 *   - 2 itens: 3% de desconto;
 *   - 3 itens: 7% de desconto;
 *   - 4 itens: 12% de desconto;
 *   - 5 itens ou mais: 20% de desconto.
 */
function calculaDesconto(price, itemQuantity) {
  if (itemQuantity == 0 || itemQuantity == 1) return price * 0;
  else if (itemQuantity == 2) return price * 0.03;
  else if (itemQuantity == 3) return price * 0.07;
  else if (itemQuantity == 4) return price * 0.12;
  else return price * 0.2;
}

/**
 * Implemente uma função que receba um número X e devolva a soma dos número de 1 a X.
 *
 * EXEMPLO:
 *   - X é 100: calcula 1 + 2 + 3 + ... + 99 + 100, retorna 5050
 *   - X é 200: calcula 1 + 2 + 3 + ... + 199 + 200, retorna 20100
 */
function somatorio(param) {
  let number = 0;
  for (i = 0; i <= param; i++) {
    number += i;
  }
  return number;
}

/**
 * Implemente uma função que recebe um número N devolve o fatorial do número.
 *
 * EXEMPLO:
 *   - n é 5: 5! = 120
 *   - n é 9: 9! = 362880
 */
function fatorial(param) {
  if (param > 1) {
    return param * fatorial(param - 1);
  }
  return param;
}

/**
 * Implemente uma função que calcule uma função do segundo grau (ax² + bx + c = 0).
 * A função deve retornar um array com x1 na primeira posição e x2 na segunda posição.
 */
function equacaoDeSegundoGrau(a, b, c) {
  const delta = Math.pow(b, 2) - 4 * a * c;
  let bhaskaraFormPlus = (-b + Math.sqrt(delta)) / (2 * a);
  let bhaskaraFormMinus = (-b - Math.sqrt(delta)) / (2 * a);
  return [bhaskaraFormPlus, bhaskaraFormMinus];
}

/**
 * Implemente uma função que receba uma data no formato DD/MM/YYYY,
 * extraia o dia, mês e ano, e retorne um array com:
 *   - o ANO na posição 1.
 *   - o MÊS na posição 2.
 *   - o DIA na posição 3.
 */
function extraiElementosDaData(date) {
  return date.split("/").reverse();
}
/**
 * Considerando a sequência de Fibonacci 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...,
 * implemente uma função que receba a enésima posição da sequência, e devolva o algarismo correspondente.
 *
 * EXEMPLO:
 *   - posição é 7: retorna o elemento 13.
 *   - posição é 8: retorna o elemento 21.
 */
function fibonacci(param) {
  // let seqFibonacci = [0, 1]
  const seqFibonacci = [0, 1];
  for (let i = 2; i < param + 1; i++) {
    seqFibonacci[i] = seqFibonacci[i - 2] + seqFibonacci[i - 1];
  }
  return seqFibonacci[param];
}
/**
 * Implemente uma função que recebe um array com notas de um aluno e uma função de callback,
 * e devolva o resultado da média pelo callback.
 */
function calculaMedia(notes) {
  const schoolAvarage = notes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return schoolAvarage / notes.length
}
/**
 * O financeiro do Comex disponibilizou os faturamentos mensais numa lista de registros.
 * Cada registro tem duas posições: uma string com o nome do mês e o valor vendido nele.
 *
 * Implemente uma função que receba uma lista de faturamentos (exemplo abaixo) e retorne
 * o valor anual consolidado.
 *
 * EXEMPLO DA ESTRUTURA: [
 *                         ['janeiro', 10],
 *                         ['fevereiro', 20],
 *                         ['março', 30]
 *                         ...
 *                       ]
 * RESULTADO ESPERADO: 60 (10 + 20 + 30)
 */
function calculaFaturamentoAnual(billing) {
  let yearliBilling = billing.map((month) => month[1]).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  return yearliBilling
}
/**
 * Agora a equipe do financeiro gostaria de filtrar os faturamentos pra ver períodos específicos.
 *
 * Implemente uma função que receba uma lista de faturamentos e um callback que recebe dois parâmetros
 * para filtrar se aquele registro vai entrar no cálculo ou não.
 *
 *
 * EXEMPLO DO FILTRO: callback(mes, valor)
 */
function calculaFaturamentoAnualComFiltro(billing, callback) {
  const filteredList = billing.filter((month) => callback(month[0]));
  return filteredList.reduce((accumulator, month) => accumulator + month[1], 0);
}
/**
 * Crie uma função que receba o fator de multiplicação de uma tabuada específica e retorne uma
 * função que calcule a multiplicação do fator por um número.
 */
function criaTabuada(number) {
  let factor = number;
  return function(_number) { return factor * _number }
}

module.exports = {
  cumprimenta,
  calculaDesconto,
  somatorio,
  fatorial,
  calculaMedia,
  equacaoDeSegundoGrau,
  extraiElementosDaData,
  fibonacci,
  calculaFaturamentoAnual,
  calculaFaturamentoAnualComFiltro,
  criaTabuada,
};
