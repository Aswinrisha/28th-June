// print odd numbers in an array using anonymous function
console.log('odd numbers using anonymous')
let arr=[3,2,6,6,5,2]
const b=function(){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
}
b()
// print odd numbers in an array using IIFE
console.log('odd numbers using IIFE')
const a=(function(){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
})();
// convert all the strings to title caps in a string array using anonymous
console.log("Title caps using anonymous function")
let arr01=['o','t','y','t']
const titleCaps=function(){
    for(let i=0;i<arr01.length;i++){
        arr01[i]=arr01[i].toUpperCase()
    }
    console.log(arr01)
}
titleCaps()
// convert all the strings to title caps in a string array using IIFE
console.log("Title caps using IIFE")
const title_caps=(function(){
        for(let i=0;i<arr01.length;i++){
            arr01[i]=arr01[i].toUpperCase()
        }
        console.log(arr01)
})();
// Sum of all numbers in an array using anonymous function
console.log("sum of all numbers using anonymous")
let sum=0
const sumAll=function(){
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}
sumAll()
// sum of all numbers in an array using IIFE
console.log('Sum of all numbers using IIFE')
sum=0
const sum_All=(function(){
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
})();
// return all prime numbers in an array 
console.log("return all prime numbers")
let flag=true
const primeNumbers=(function(){
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
})();
// return all palindromes in an array
console.log("Return palindrome")
arr02=['cat','madam','sister']
flag=true
const palindrome=(function(){
    for(let i=0;i<arr02.length;i++){
        for(let j=0;j<arr02[i].length;j++){
            if(arr02[i][j]==arr02[i][(arr02[i].length)-(j+1)]){
                flag=true
            }
            else{
                flag=false
            }
        }
        if(flag){
            console.log(arr02[i])
        }
    }
})();
//return median of two arrays
console.log('Median of two arrays')
const medianArrays=(function(){
    let arrs1=[2,7,9,11]
    let arrs2=[2,3,4,4]
    arrs2=arrs1.concat(arrs2)
    arrs2.sort(function(a,b){return a-b})
    console.log((arrs2[arrs2.length/2]+arrs2[(arrs2.length/2)-1])/2)
})()
// remove duplicates in an array
console.log('Remove duplicate elements from the array')
const uniqueArray=(function (){
    arr.sort(function(a,b){return a-b})
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            arr.splice(i+1,1)
        }
    }
    console.log(arr)
})()
// rotate an array k times
console.log('rotate an array k times')
const rotateArray=function(n){
    for(let i=0;i<n;i++){
        let b=arr.pop()
        arr.unshift(b)
    }
    console.log(arr)
}
rotateArray(2)