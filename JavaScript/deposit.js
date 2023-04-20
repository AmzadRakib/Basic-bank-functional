document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputValueById('deposit-field');
    if (isNaN(newDepositAmount)) {
        alert('Please Provid Valid Number');
        return;
    }
    const currentDepositAmount = getElementValueById('deposit-total')
    const totalDepositAmount = currentDepositAmount + newDepositAmount;
    setTextElementValueById('deposit-total', totalDepositAmount);
    const currentBalance = getElementValueById('balance-field');
    const totalBalance = currentBalance + newDepositAmount;
    setTextElementValueById('balance-field', totalBalance);

})