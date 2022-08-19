function elementCallById(elementId){
    const elementCall = document.getElementById(elementId);
    return elementCall;
}

// for input tag
function getValueById(elementId){
    const getElement = elementCallById(elementId);
    const getValueString = getElement.value;
    const getValueFloat = parseFloat(getValueString);
    return getValueFloat;
}

function setValueById(ValueToBeSet, FieldToBeSet){
    const targetField = elementCallById(FieldToBeSet);
    targetField.value = ValueToBeSet;
    return targetField.value;
}



// for others tag

function getInnerTextById(elementId){
    const getElement = elementCallById(elementId);
    const getValueString = getElement.innerText;
    const getValueFloat = parseFloat(getValueString);
    return getValueFloat;
}

function setInnerTextById(innerTextToBeSet, FieldToBeSet){
    const targetField = elementCallById(FieldToBeSet);
    targetField.innerText = innerTextToBeSet;
    return targetField.innerText;
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

function phonePrice(fieldId, priceId){
    const quantityValue = getValueById(fieldId);
    const phonePrice = (parseFloat(quantityValue))*1219;
    setInnerTextById(phonePrice, priceId);

}

function casePrice(fieldId, priceId){
    const caseQuantityValue = getValueById(fieldId);
    const casePrice = (parseFloat(caseQuantityValue))*59;
    setInnerTextById(casePrice, priceId);
}

