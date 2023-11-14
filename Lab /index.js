function submitData() {
  
    const balance = parseFloat(document.getElementById('balance').value);
    const annualRate = parseFloat(document.getElementById('annualRate').value);
    const months = parseFloat(document.getElementById('months').value);

  
    if (isNaN(balance) || isNaN(annualRate) || isNaN(months) || balance < 0 || annualRate < 0 || months < 0) {
        updateDOM('Please enter valid values for all fields.', 'error');
        return;
    }

 
    computeFutureValue(balance, annualRate, months);
}

function updateDOM(value, color) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = value;
    resultElement.className = color; 
}

function computeFutureValue(balance, annualRate, months) {
    let futureValue = balance;

    for (let i = 0; i < months; i++) {
        futureValue += (futureValue * annualRate) / 12 / 100;
    }

    updateDOM(`Future Value: ${futureValue.toFixed(2)}`, 'success');
}
