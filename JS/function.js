//function
// viet ham tinh tong 2 so a va b
function sum(a,b=0){
    // console.log("Is it working?")
    return a+b;
}
// invoke function
    console.log(sum(5,3));
    console.log(sum(5));//NaN neu ko cho b=0 mac dinh
//Tham so la function
    function add(a=0,b=0){
        return a+b;
    }
    const sum2 = add;//gan function cho sum2 nhung chua duoc goi
    console.log(sum2(5,1));// goi bien chua ham
// tinh trung binh cua a va b
    function average(a,b,fn){
        const total = fn(a,b);
        return total/2; 
    }
    let result = average(200,300,sum2);
    console.log(`result is ${result}`); 
//anonymous function (ham khong co ten do luu vao mot bien);
    const logName = function(){
        console.log("I'm here");
    }
    logName();// khong bi hosting(goi sau khi khai bao)
//IIFE(immediately invoked function execution) chay  ngay lap tuc sau khi viet
(function(){
    console.log("this is IIFE");
})();

let abc;
console.log(abc);
abc="dfghjkl;"
console.log(abc)
//scope pham vi cua bien
// global scope: nam ngoai function
// function scope: bien nam trong function
//block scope and khoa var
//lexical scope:
let aNewName = "evondev";
function sayHello(){
    let message = "Hi";
    console.log(`message ${aNewName}`);
}
sayHello();

//closure: nhieu function long nhau 
function sayHello2(){
    let message2 = "Hi";
    function sayHi(){
        console.log(message2);
    }
    return sayHi();
}
sayHello2();
//Bai tap
function compare (a=0,b=0){
    if (typeof a != "number" || typeof b != "number"){
        console.log("Please enter a valid number");
        return 0;
    }
    return Math.max(a,b);
}
console.log(compare(5,8));

function capitalize(word = ""){
    if (word.length === "") {return null}
    else 
        console.log(word.toLocaleLowerCase())
        console.log(word.charAt().toLocaleUpperCase());
        let otherWord = word.toLocaleLowerCase().slice(1);
        console.log(word.charAt().toLocaleUpperCase() + `${otherWord}`);
}
capitalize("giu");
// Viet ham co su dung callback (function lad parameter cua function khac) in ra ket qua cua compare();
function useCallBack(a,b, callback){
    let max = compare(a,b);
    callback(max);
    return max;
}
function printMax (number){
    console.log("MAx number is: " + number)
}
console.log(useCallBack(4,5,printMax))
// Arrow function
let square = function(x){
    return x*x;
};
const square2 = () =>{ //khi c o nhieu dong code thi bo vao dau {}
    return 1000;
}
const square3 = () => x*x; // chi viet dc khi co 1 dong code