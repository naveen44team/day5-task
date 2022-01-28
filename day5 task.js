// a.Print odd numbers in an array using anonymous function:
var arr=[1,2,3,4,5,6,7,8,9];
(function(arr){
    var temp=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!=0)
        temp.push(arr[i]);
    }
    console.log(temp)
}(arr));


//b. Convert all the strings to tittle caps in a string array using anonymous function:
var str="my name is raju";
(function(str){
    str=str.split(" ")
    for(i=0;i<str.length;i++){
        var temp=str[i];
        temp=temp[0].toUpperCase();
        temp=temp+str[i].slice(1,str[i].length)
        str[i]=temp
    }
    console.log(str.join(" "))
}(str));


// c.Return all the prime numbers in an array using anonymous function:
var str=[2,3,4,5,6,7,13,14,15,16,17];
(function(str){
    var temp=[];
    for(i=0;i<str.length;i++){
        var flag=true;
        for(j=2;j<str[i];j++){
            if(str[i]%j==0){
                flag=false;
                break;
            }
        }
        if(flag==true)
        temp.push(str[i]);
    }
    console.log(temp)
}(str));


//d. Sum of all numbers in an array:
var arr=[2,4,5,7,8,9];
var sum=arr.reduce(function(a,b){
    return a+b;
},0);
console.log(sum);


// e.Return all  the palindrome numbers in an array using arrow function:
const array = [1, 5, 7, 4, 15, 4, 7, 5, 1];
const isPalindrome = array => {
   const { length: l } = array;
   const mid = Math.floor(l / 2);
   for(let i = 0; i <= mid; i++){
      if(array[i] !== array[l-i-1]){
         return false;
      };
   };
   return true;
};
console.log(isPalindrome(array));


//f. Return median of two sorted array same size :
let arr1=[1,12,15,26,38,43];
let arr2=[2,13,17,30,45,47];
(function(arr1,arr2){
    var concat=arr1.concat(arr2).sort((a,b)=>a-b);
    var length=concat.length;
    if(length%2==1){
        console.log("The median is:",concat[((length)/2)-0.5]);
    }
    else{
        console.log("The median is:",(concat[length/2]+concat[(length/2)-1])/2)
    }
})(arr1,arr2);

// g.Remove duplicates from an array:
var foo=["x","w","d","w","x"];
function  filterDuplicates(new_foo){
    return new_foo.filter((value,index)=>new_foo.indexOf(value)===index);
}
console.log(filterDuplicates(foo));

// h.Rotate an array by K times:
const cool=[1,2,3,6,7,8,9,10];
const k=3;
let rotatedcool=function(cool,rotation){
    const toRotate=cool.concat();
    for(let i=0;i<rotation;i++){
        const elements=toRotate.shift();
        toRotate.push(elements);
    }
    return toRotate;
}
console.log(rotatedcool(cool,k));


// 3.Do the below programs in arrow functions:
// C.Sum of all numbers in an array:
var arr=[2,4,5];
var sum=(a,b,c)=>{
    let result= a+b+c;
    return result;
}
let result1=sum(2,4,5);
console.log(result1);


// d.Return all the primenumbers in an array using arrow function:
var str=[2,3,4,5,6,7,13,14,15,16,17,21,23,25,26];
var prime=(str)=>{
    var temp=[];
    for(i=0;i<str.length;i++){
        var flag=true;
        for(j=2;j<str[i];j++){
            if(str[i]%j==0){
                flag=false;
                break;
            }
        }
        if(flag==true)
        temp.push(str[i]);
    }
    console.log(temp)
}
prime(str)



// e.Return all the palindromes in an array using arrow function
const awesome = [1, 5, 7, 4, 15, 4, 7, 5, 1];
const isPalindrome1 = awesome=>{
   const { length: l } = awesome;
   const mid = Math.floor(l / 2);
   for(let i = 0; i <= mid; i++){
      if(awesome[i] !== awesome[l-i-1]){
         return false;
      };
   };
   return true;
};
console.log(isPalindrome1(awesome));



// b.Convert all the strings to title caps in a string array:
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(toTitleCase("my name is raju"));



// a.print odd numbers in an array using arrow function:
let arr5=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let odds=arr5.filter(n=>n%2!=0)
console.log(odds);