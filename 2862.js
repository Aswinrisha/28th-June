// print odd numbers in an array using arrow functions
console.log("Print odd numbers")
let arr=[3,2,6,5]
let b=() =>console.log(arr.filter(num =>(num % 2 !== 0)))
b()
// convert all the strings to title caps in a string array
console.log("Title caps")
let arr01=['i','t','c','g']
let titleCaps=()=>console.log(arr01.map(it=>(it.toUpperCase())))
titleCaps()
// sum of all numbers in an array using arrow function
console.log('Sum of all numbers')
let sum=0
let sumAll=()=>{arr.map(item=>sum+=item);console.log(sum)}
sumAll()
// return all prime numbers in an array
console.log("Prime numbers")
let primeNumbers=()=>{
    let flag=true
    for(let i=0;i<arr.length;i++){
        for(let j=2;j<arr[i];j++){
            if(arr[i]%j==0){
                flag=false
            }
        }
        if(flag){
            console.log(arr[i])
        }
        flag=true
    }
}
primeNumbers()
// return palindromes in an array
console.log('return palindrome')
arr02=['dog','malayalam','food','madam']
let isPalindrome=el=>{
    for(let i=0;i<el.length;i++){
        if(el[i]==el[el.length-(i+1)]){
            continue
        }
        else{
            return false
        }
    }
    return true
}
const palindrome=arr=>{
    return arr.filter( el=>isPalindrome(el))
}
console.log(palindrome(arr02))
