document.getElementById('withdawBtn').addEventListener('click',
function(){

    const newWithdrawAmount = getInputFieldValueById('withdrawAmount');
    const previousWithdrawTotal= getTextElementValueById('withdrawTotal');
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdrawTotal',currentWithdrawTotal);

    const previousBalanceTotal = getTextElementValueById('balanceTotal');
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balanceTotal',currentBalanceTotal);
   

    
})