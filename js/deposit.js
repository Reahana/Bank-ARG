function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId)
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value ='' ;
    return inputFieldValue;
}
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}
function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

document.getElementById('depositBtn').addEventListener('click',
function(){

 const newDepositAmount = getInputFieldValueById('depositAmount');
 const previousDepositTotal =getTextElementValueById('depositTotal');

 const currentDepositeTotal = previousDepositTotal + newDepositAmount;
setTextElementValueById('depositTotal',currentDepositeTotal)


})