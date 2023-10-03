//Dieu kien
//if(condition){}
const isRich = false;
const myMoney= 10000;
if(isRich){
    console.log("I will buy a new car")
}
else console.log("I won't buy car");
if(isRich){
    console.log("I won't buy a new car")
}
else if(myMoney >= 1000) console.log("I will buy car");
else console.log("I'm person poor")

//alert
    // alert("are you a dog?");
    // const yourname = prompt("Vui long nhap ten cua ban", "Giu");
    // console.log(`Ten cua ban la: ${yourname}`);
    // const isYourMoney = confirm("Day co phai la tien cua ban hay khong");
    // console.log(isYourMoney);
//Bai tap if
// const yourAge = prompt("Vui long nhap so tuoi");
    // let message="Ban khong du tuoi"
    // if (Number(yourAge >=18)) {
        // message = "Ban co the vao rap ";}
    // alert(message);
    // console.log(message);
// 
// const a = prompt("Vui long nhap a");
// const b = prompt("Vui long nhap b");
// let abc;
// if(a>b){
    // abc = `${a} > ${b}`;
// }
// else if (a<b){
    // abc= `${a} < ${b}`;
// }
// else {abc = `${a} = ${b}`}
// alert(abc);
// console.log(abc);
const yourAge = prompt("Vui long nhap so tuoi");
    // let message="Ban khong du tuoi"
    // if (Number(yourAge >=18)) {
        // message = "Ban co the vao rap ";}
    // alert(message);
    // console.log(message);

    let message2 = yourAge >= 18? "ban co the vao rap" : "Ban chua du tuoi";
    console.log(message2);

    let message3 = yourAge>=18 ? "you are a adult": yourAge <= 10 ?"you are a child" : "you are a young boy";
    console.log(message3);