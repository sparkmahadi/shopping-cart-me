// const elementCall = document.getElementById('phone-minus');
// const elementEventSecond = elementCallSecond.addEventListener('click', function(){
//     let phoneField = document.getElementById('phone-field');
//     const phoneFieldString = phoneField.value;
//     let phoneFieldOldValue = parseFloat(phoneFieldString);
// }
// )


function elementCallById(elementId){
    const elementCall = document.getElementById(elementId);
    return elementCall;
}

function addEvenHandlerById(elementId, functionToRun){
    const calling = elementCallById(elementId);
    const eventHanlder = calling.addEventListener('click', functionToRun)
}

function getValueById(elementId){
    const getElement = elementCallById(elementId);
    const getValueString = getElement.value;
    const getValueFloat = parseFloat(getValueString);
    return getValueFloat;
}

function setValueById(ValueToBeSet, FieldToBeSet){
    const targetField = elementCallById(FieldToBeSet);
    targetField.value = ValueToBeSet;
}

function forPlusButton(elementId){
    let phoneFieldOldValue = getValueById(elementId)

    const phoneFieldNewValue = phoneFieldOldValue + 1;
    setValueById(phoneFieldNewValue, elementId);
}

function forMinusButton(elementId){
    let phoneFieldOldValue = getValueById(elementId)

    const phoneFieldNewValue = phoneFieldOldValue - 1;
    setValueById(phoneFieldNewValue, elementId);
}