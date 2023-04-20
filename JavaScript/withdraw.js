document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputValueById('withdraw-field');
    if (isNaN(newWithdrawAmount)) {
        alert('Please Provid Valid Number');
        return;
    }
    const currentWithdrawAmount = getElementValueById('withdraw-total')
    if (newWithdrawAmount > currentWithdrawAmount) {
        alert('Your Current Balance Is Low');
        return;
    }
    const totalWithdrawAmount = currentWithdrawAmount + newWithdrawAmount;
    setTextElementValueById('withdraw-total', totalWithdrawAmount);
    const currentBalance = getElementValueById('balance-field');
    const totalBalance = currentBalance + newWithdrawAmount;
    setTextElementValueById('balance-field', totalBalance);

})
