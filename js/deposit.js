

document.getElementById('depositBtn').addEventListener('click',
function(){

 const newDepositAmount = getInputFieldValueById('depositAmount');
 const previousDepositTotal =getTextElementValueById('depositTotal');

 const currentDepositeTotal = previousDepositTotal + newDepositAmount;
setTextElementValueById('depositTotal',currentDepositeTotal);

const previousBalanceTotal = getTextElementValueById('balanceTotal');
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balanceTotal',currentBalanceTotal);


})