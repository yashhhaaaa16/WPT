function checknum(num1){
    if(num1 % 2 ==0)
    {
        return`${num1} is even number`
    }
    else
    {
        return`${num1} is odd number`

    }
}

module.exports = checknum;