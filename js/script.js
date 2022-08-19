forPhoneAndCaseValue('phone-plus', 'phone-field', true);
forPhoneAndCaseValue('phone-minus', 'phone-field', false);
forPhoneAndCaseValue('case-plus', 'case-field', true);
forPhoneAndCaseValue('case-minus', 'case-field', false);



// advanced

// forPhoneAndCaseValue
function forPhoneAndCaseValue(elementId, fieldId, plusOrMinus){
    const calling = elementCallById(elementId);
const event = calling.addEventListener('click', function(){

    if(plusOrMinus === true){
        forPlusButton(fieldId);
        if(fieldId === 'phone-field'){
            phonePrice(fieldId, 'phone-price')
        }
        else{
            casePrice(fieldId, 'case-price')
        }
    }
    else{
        forMinusButton(fieldId);
        if(fieldId === 'phone-field'){
            phonePrice(fieldId, 'phone-price')
        }
        else{
            casePrice(fieldId, 'case-price')
        }
    }
})
}

elementCallById('product-choice').addEventListener('click', function(){
    const phoneTotal = getInnerTextById('phone-price');
const caseTotal = getInnerTextById('case-price');

const subTotal = phoneTotal + caseTotal;
const subTotalFloat = parseFloat(subTotal);

setInnerTextById(subTotalFloat, 'subtotal')

let taxAmount = subTotalFloat * 0.1;
let taxAmountFixed = parseFloat(taxAmount.toFixed(2));

setInnerTextById(taxAmountFixed, 'tax');

let total = subTotalFloat + taxAmountFixed;

setInnerTextById(total, 'total');
})
