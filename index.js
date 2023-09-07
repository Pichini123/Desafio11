let numero1 = '';
let numero2 = '';
let operador = '';
let pantallaNumero1 = document.getElementById('numero1');
let pantallaSigno = document.getElementById('signo');
let pantallaNumero2 = document.getElementById('numero2');
let pantallaResultado = document.getElementById('resultado');

function agregarNumero(numero) {
    if (!operador) {
        numero1 += numero;
    } else {
        numero2 += numero;
    }
    actualizarPantalla();
}

function agregarDecimal(decimal) {
    if (!operador) {
        if (!numero1.includes(decimal)) {
            numero1 += decimal;
        }
    } else {
        if (!numero2.includes(decimal)) {
            numero2 += decimal;
        }
    }
    actualizarPantalla();
}

function borrar() {
    if (!operador) {
        numero1 = numero1.slice(0, -1);
    } else {
        numero2 = numero2.slice(0, -1);
    }
    actualizarPantalla();
}

function borrarTodo() {
    numero1 = '';
    numero2 = '';
    operador = '';
    actualizarPantalla();
}

function agregarOperador(op) {
    if (!operador && numero1 !== '') {
        operador = op;
        pantallaSigno.textContent = operador;
    }
    actualizarPantalla();
}

function calcularResultado() {
    if (numero1 && numero2 && operador) {
        let result;
        switch (operador) {
            case '+':
                result = parseFloat(numero1) + parseFloat(numero2);
                break;
            case '-':
                result = parseFloat(numero1) - parseFloat(numero2);
                break;
            case '*':
                result = parseFloat(numero1) * parseFloat(numero2);
                break;
            case '/':
                if (parseFloat(numero2) === 0) {
                    pantallaResultado.textContent = 'Error';
                    return;
                }
                result = parseFloat(numero1) / parseFloat(numero2);
                break;
            case '%':
                result = (parseFloat(numero1) / 100) * parseFloat(numero2);
                break;
        }
        let resultadoStr = result.toString();
        if (resultadoStr.length > 11) {
            pantallaResultado.textContent = 'Error';
        } else {
            pantallaNumero1.textContent = '';
            pantallaSigno.textContent = '';
            pantallaNumero2.textContent = '';
            pantallaResultado.textContent = resultadoStr;
        }
        numero1 = '';
        numero2 = '';
        operador = '';
    }
}

function actualizarPantalla() {
    pantallaNumero1.textContent = numero1;
    pantallaSigno.textContent = operador;
    pantallaNumero2.textContent = numero2;
    pantallaResultado.textContent = '';
}