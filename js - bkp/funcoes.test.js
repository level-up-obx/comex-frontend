const {
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
    criaTabuada
} = require('./funcoes');

describe('Essencial', () => {
    test('Deve cumprimentar o cliente.', () => {
        expect(cumprimenta('Capitão América')).toBe('Olá, Capitão América!');
        expect(cumprimenta('Harry Potter')).toBe('Olá, Harry Potter!');
        expect(cumprimenta('Daenerys Targaryen')).toBe('Olá, Daenerys Targaryen!');
    });
    
    test('Deve calcular desconto', () => {
        expect(calculaDesconto(150, 1)).toBe(0);
        expect(calculaDesconto(137, 2)).toBeCloseTo(4.11);
        expect(calculaDesconto(256, 3)).toBeCloseTo(17.92);
        expect(calculaDesconto(847, 4)).toBeCloseTo(101.64);
        expect(calculaDesconto(357, 5)).toBeCloseTo(71.4);
        expect(calculaDesconto(951, 6)).toBeCloseTo(190.2);
    });
    
    test('Deve calcular somatório', () => {
        expect(somatorio(0)).toBe(0);
        expect(somatorio(300)).toBe(45150);
        expect(somatorio(500)).toBe(125250);
    });
    
    test('Deve calcular fatorial', () => {
        expect(fatorial(7)).toBe(5040);
        expect(fatorial(15)).toBe(1307674368000);
    });
    
    test('Deve calcular equacao do segundo grau', () => {
        let raizes1 = equacaoDeSegundoGrau(4, 2, -1);
        expect(raizes1[0]).toBeCloseTo(0.309);
        expect(raizes1[1]).toBeCloseTo(-0.809);
        
        let raizes2 = equacaoDeSegundoGrau(7, 15, 2);
        expect(raizes2[0]).toBeCloseTo(-0.14);
        expect(raizes2[1]).toBeCloseTo(-2);
    });
    
    test('Deve retornar elementos da data.', () => {
        let data1 = extraiElementosDaData('15/11/1889');
        expect(data1[0]).toBe('1889');
        expect(data1[1]).toBe('11');
        expect(data1[2]).toBe('15');
        
        let data2 = extraiElementosDaData('13/05/1888');
        expect(data2[0]).toBe('1888');
        expect(data2[1]).toBe('05');
        expect(data2[2]).toBe('13');
    });
});

describe('Desejavel', () => {
    
    test('Deve retornar elemento de Fibonacci', () => {
        expect(fibonacci(12)).toBe(144);
        expect(fibonacci(20)).toBe(6765);
    });
    
});

describe('Desafio', () => {
    
    test('Deve calcular média de notas.', () => {
        calculaMedia([5, 5, 5], resultado => expect(resultado).toBe(5));
        calculaMedia([7, 9, 8], resultado => expect(resultado).toBe(8));
        calculaMedia([3, 5, 4], resultado => expect(resultado).toBe(4));
    });
    
    test('Deve calcular faturamento anual', () => {
        let faturamentos = [
            ['janeiro', 39_874.56],
            ['fevereiro', 48_454.33],
            ['março', 26_468.0],
            ['abril', 20_037.78],
            ['maio', 27_844.22],
            ['junho', 38_678.50],
            ['julho', 36_947.83],
            ['agosto', 41_285.48],
            ['setembro', 49_515.86],
            ['outubro', 16_914.90],
            ['novembro', 29_348.95],
            ['dezembro', 28_666.97]
        ];
    
        expect(calculaFaturamentoAnual(faturamentos)).toBeCloseTo(404_037.38);
    });

    test('Deve calcular faturamento anual com filtro', () => {
        let faturamentos = [
            ['janeiro', 39_874.56],
            ['fevereiro', 48_454.33],
            ['março', 26_468.0],
            ['abril', 20_037.78],
            ['maio', 27_844.22],
            ['junho', 38_678.50],
            ['julho', 36_947.83],
            ['agosto', 41_285.48],
            ['setembro', 49_515.86],
            ['outubro', 16_914.90],
            ['novembro', 29_348.95],
            ['dezembro', 28_666.97]
        ];

        let primeiroSemestre = (mes, valor) => ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho'].includes(mes);
    
        expect(calculaFaturamentoAnualComFiltro(faturamentos, primeiroSemestre)).toBeCloseTo(201_357.39);
    });

    test('Deve criar função de tabuada com valor pré-carregado (partial apply)', () => {
        let tabuadaDe2 = criaTabuada(2);
        expect(tabuadaDe2(2)).toBe(4);
        expect(tabuadaDe2(6)).toBe(12);

        let tabuadaDe9 = criaTabuada(9);
        expect(tabuadaDe9(2)).toBe(18);
        expect(tabuadaDe9(6)).toBe(54);
    });

});