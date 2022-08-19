const phonePlus = elementCallById('phone-plus');
const plusEvent = phonePlus.addEventListener('click', function(){

    forPlusButton('phone-field');
})


const phoneMinus = document.getElementById('phone-minus');
const minusEvent = phoneMinus.addEventListener('click', function(){

    forMinusButton('phone-field');
})


const casePlus = elementCallById('case-plus');
casePlus.addEventListener('click', function(){

    forPlusButton('case-field');
})


const caseMinus = elementCallById('case-minus');
caseMinus.addEventListener('click', function(){
    forMinusButton('case-field');
})