function contarLetraA(str, index = 0) {
    if (index >= str.length) {
        return 0;
    }
    
    const contagemAtual = (str[index].toLowerCase() === 'a') ? 1 : 0;
    
    return contagemAtual + contarLetraA(str, index + 1);
}

function verificarLetraA(str) {
    const contagem = contarLetraA(str);
    const existe = contagem > 0;
    
    return {existe, contagem};
}

const stringTeste = "Target Sistemas";// string com a letra A
const resultado = verificarLetraA(stringTeste);

console.log(`A letra 'a' ${resultado.existe ? 'está presente' : 'não está presente'} na string.`);
console.log(`Quantidade de vezes que a letra 'a' aparece: ${resultado.contagem}`);
