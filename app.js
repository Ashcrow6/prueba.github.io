// Importar las funciones
// Aquí van las funciones que ya creaste, integradas en el archivo para interactuar con la página

function procesarPedido(pedido) {
    const cliente = pedido.shift();
    pedido.unshift('bebida');
    pedido.push(cliente);
    return pedido;
}

function sumarPares(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            suma += numero;
        }
    }
    return suma;
}

function palabrasTerminanConA(palabras) {
    return palabras.every(palabra => palabra.endsWith('a'));
}

function buscaPalabras(words, word) {
    const index = words.indexOf(word);
    if (index === -1) return [];
    return words.slice(index + 1);
}

function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const j = matrix[i].indexOf('JavaScript');
        if (j !== -1) {
            return [i, j];
        }
    }
    return [-1, -1];
}

function findMinMaxPages(books) {
    const minIndex = books.indexOf(Math.min(...books));
    const maxIndex = books.indexOf(Math.max(...books));
    return [minIndex, maxIndex];
}

// Interacción con los elementos del DOM

// 1. Procesar Pedido
document.getElementById('btnPedido').addEventListener('click', function() {
    const pedido = document.getElementById('inputPedido').value.split(',').map(e => e.trim());
    const resultado = procesarPedido(pedido);
    document.getElementById('resultadoPedido').textContent = resultado.join(', ');
});

// 2. Sumar Pares
document.getElementById('btnSumarPares').addEventListener('click', function() {
    const numeros = document.getElementById('inputNumeros').value.split(',').map(Number);
    const resultado = sumarPares(numeros);
    document.getElementById('resultadoSumarPares').textContent = resultado;
});

// 3. Palabras que Terminan con A
document.getElementById('btnPalabrasA').addEventListener('click', function() {
    const palabras = document.getElementById('inputPalabras').value.split(',').map(e => e.trim());
    const resultado = palabrasTerminanConA(palabras);
    document.getElementById('resultadoPalabrasA').textContent = resultado ? 'Todas terminan con "a"' : 'Al menos una no termina con "a"';
});

// 4. Buscar Palabras
document.getElementById('btnBuscarPalabra').addEventListener('click', function() {
    const words = document.getElementById('inputArrayPalabras').value.split(',').map(e => e.trim());
    const word = document.getElementById('inputPalabraBuscar').value;
    const resultado = buscaPalabras(words, word);
    document.getElementById('resultadoBuscarPalabra').textContent = resultado.length > 0 ? resultado.join(', ') : 'No se encontraron palabras después de "' + word + '"';
});

// 5. Buscar JavaScript en Matriz
document.getElementById('btnBuscarJS').addEventListener('click', function() {
    const matrix = [
        ['HTML', 'CSS', 'JavaScript'],
        ['Java', 'C++', 'Python'],
        ['Ruby', 'Go', 'Swift']
    ];
    const resultado = findJavaScript(matrix);
    document.getElementById('resultadoBuscarJS').textContent = resultado[0] !== -1 ? `Posición: [${resultado}]` : 'JavaScript no encontrado';
});

// Encontrar Min y Max Páginas
document.getElementById('btnFindMinMax').addEventListener('click', function() {
    const libros = document.getElementById('inputLibros').value.split(',').map(Number);
    const resultado = findMinMaxPages(libros);
    document.getElementById('resultadoMinMax').textContent = `Mínimo: Libro ${resultado[0]} | Máximo: Libro ${resultado[1]}`;
});
