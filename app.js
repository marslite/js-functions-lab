// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2.
function maxOfThree(num1,num2,num3){
    let big = 0;
    if(num1>num2 && num1>num3){
        return big = num1;
    }else if(num2>num1 && num2>num3){
        return big=num2;
    }else if(num3>num1 && num3>num2){
        return big=num3;
    }
}

console.log(maxOfThree(2,30,4));
  