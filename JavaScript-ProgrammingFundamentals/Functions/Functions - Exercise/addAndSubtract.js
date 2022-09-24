function addAndSubtract(firstNum, secondNum, thirdNum) {
    let sumFirstandSecond = sum(firstNum, secondNum);
    let result = subtract(sumFirstandSecond, thirdNum);
    

    function sum(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    function subtract(sumFirstandSecond, thirdNum) {
        return sumFirstandSecond - thirdNum;
    }

    return result;
}

addAndSubtract(23, 6, 10); //19
addAndSubtract(1, 17, 30); //-12