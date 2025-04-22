function addition(num1,num2){
    return`Addition of ${num1}+${num2}=${num1+num2}`;
}
function subtraction(num1,num2){
    return`subtraction of ${num1}-${num2}=${num1-num2}`;
}
function division(num1,num2){
    return`division of ${num1}/${num2}=${num1/num2}`;
}
function multiplication(num1,num2){
    return`multiplication of ${num1}*${num2}=${num1*num2}`;
}

module.exports={addition,subtraction,division,multiplication}