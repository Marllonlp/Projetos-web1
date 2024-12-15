let historico = [];

// Adiciona valor ao display
function addToDisplay(value) {
    document.getElementById('result').value += value;
}

// Limpa o display
function clearDisplay() {
    document.getElementById('result').value = '';
    document.getElementById('history').textContent = '';
}

// Apaga o último caractere do display
function deleteLastChar() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

// Verifica se a expressão é válida
function isValidExpression(expression) {
    const allowedChars = /^[0-9+\-*/().√² ]+$/;
    return allowedChars.test(expression);
}

// Calcula a expressão no display
function calculate() {
    const resultInput = document.getElementById('result');
    const historyElement = document.getElementById('history');
    let expression = resultInput.value;

    try {
        // Substituições para funções matemáticas
        expression = expression
            .replace(/√/g, 'Math.sqrt')
            .replace(/x²/g, '**2')
            .replace(/÷/g, '/')
            .replace(/×/g, '*');

        if (!isValidExpression(expression)) {
            throw new Error('Expressão inválida');
        }

        // Calcula o resultado de forma segura
        const result = new Function(`return ${expression}`)();
        
        // Armazena no histórico
        historico.unshift(`${resultInput.value} = ${result}`);
        if (historico.length > 5) historico.pop();

        // Atualiza o display
        resultInput.value = result;
        historyElement.textContent = historico.join('\n');
    } catch (error) {
        resultInput.value = 'Erro';
        console.error(error);
    }
}

// Suporte a eventos de teclado
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const result = document.getElementById('result');

    const keyMap = {
        'Enter': calculate,
        'Backspace': deleteLastChar,
        'Escape': clearDisplay
    };

    if (/^[0-9+\-*/.()]$/.test(key)) {
        result.value += key;
    }

    if (keyMap[key]) {
        event.preventDefault();
        keyMap[key]();
    }
});
