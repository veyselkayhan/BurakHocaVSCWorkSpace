function calculateResult(event) {
    event.preventDefault(); // Formun varsayılan davranışını engelle
    var op1 = parseFloat(document.getElementsByName('op1')[0].value);
    var op2 = parseFloat(document.getElementsByName('op2')[0].value);
    var operationType = document.getElementById('operationType').value;
    var result;

    switch (operationType) {
        case 'toplama':
            result = op1 + op2;
            break;
        case 'cikarma':
            result = op1 - op2;
            break;
        case 'carpma':
            result = op1 * op2;
            break;
        case 'bolme':
            result = op1 / op2;
            break;
        default:
            result = 'Geçersiz işlem';
    }

    var resultBox = document.getElementById('resultBox');
    resultBox.textContent = 'Sonuç: ' + result;
}