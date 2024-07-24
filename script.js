function createMatrixInputs() {
    var matrixSize = document.getElementById('matrixSize').value;
    var matrixInputsDiv = document.getElementById('matrixInputs');
    
    matrixInputsDiv.innerHTML = ''; // Clear previous inputs
    
    for (var i = 0; i < matrixSize; i++) {
        for (var j = 0; j < matrixSize; j++) {
            var input = document.createElement('input');
            input.type = 'number';
            input.id = 'matrix' + i + j;
            input.placeholder = 'Enter element ' + (i + 1) + ',' + (j + 1);
            matrixInputsDiv.appendChild(input);
        }
        matrixInputsDiv.appendChild(document.createElement('br')); // Line break after each row
    }
}

function getMatrixFromInputs(matrixSize) {
    var matrix = [];
    
    for (var i = 0; i < matrixSize; i++) {
        var row = [];
        for (var j = 0; j < matrixSize; j++) {
            var inputId = 'matrix' + i + j;
            var inputValue = parseFloat(document.getElementById(inputId).value);
            row.push(inputValue);
        }
        matrix.push(row);
    }
    
    return matrix;
}

function determinant2x2(matrix) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

function determinant3x3(matrix) {
    let a = matrix[0][0], b = matrix[0][1], c = matrix[0][2];
    let d = matrix[1][0], e = matrix[1][1], f = matrix[1][2];
    let g = matrix[2][0], h = matrix[2][1], i = matrix[2][2];
    
    return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
}

function calculateDeterminant() {
    var matrixSize = parseInt(document.getElementById('matrixSize').value);
    var matrix = getMatrixFromInputs(matrixSize);
    var resultDiv = document.getElementById('result');
    var determinantResult;
    
    if (matrixSize === 2) {
        determinantResult = determinant2x2(matrix);
    } else if (matrixSize === 3) {
        determinantResult = determinant3x3(matrix);
    } else {
        resultDiv.textContent = 'Unsupported matrix size. Please select 2x2 or 3x3.';
        return;
    }
    
    resultDiv.textContent = 'Determinant: ' + determinantResult;
}
