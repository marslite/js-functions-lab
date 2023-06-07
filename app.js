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


// 3.

function isCharAVowel(char){
    // if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
    //     return true;
    // }else{
    //     return false;
    // }
    // or alternatively
    return (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')


}


console.log(isCharAVowel('a'));

// 4. 

function sumArray(nums){
    let sum = 0;
    nums.forEach(function(num){
        sum+= num;
    })
    return sum;
}
 

console.log(sumArray([2, 4, 5]));

//5 Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers.
//For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(nums){
    let product = 1;
    nums.forEach(function(num){
        product *= num;
    })
    return product;
}

console.log(multiplyArray([2, 4, 5]));

//Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

function numArgs(){
    return arguments.length;
}

console.log(numArgs(1,2));

//Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. 
//For example, reverseString('rockstar'); would return the string "ratskcor".

function reverseString(str){
    let reversed = [...str].reverse();
    return reversed.join('');
}

console.log(reverseString('hello'));


// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument
// and returns the length of the longest string.

function longestStringInArray(str){
    let longest = "";
    for(let i=0; i<str.length;i++){
        if(longest.length < str[i].length){
            longest = str[i];
        }

    }
    return longest;
}

console.log(longestStringInArray(['hello','helloo','hellooo','hellooooooo']));


//Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; 
//and returns an array of the strings that are longer than the number passed in. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

