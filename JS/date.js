const now = new Date();
console.log(now)

console.log(now.getTime())// print timestamp
console.log(new Date(0));

var currentTimeStamp = Math.floor(new Date().getTime() / 1000);
console.log(currentTimeStamp);
//4 cach khoi tao date object
// new date()-> In ra ngay gio hien tai
// new date(timestamp)-> dua vao tiemsatmp de in ra ngay gio
// new Date(date String) ->
//new date(year, month, day, ...)
console.log(new Date().getTime());
console.log(new Date(1689739809001));
console.log(new Date("Wed Jul 19 2023 11:10:09 GMT+0700 (Indochina Time)"));
console.log(new Date(2021,7,1,23,23,23));//Thang bat dau tinh tu 0=> 0= January
//cac hàm get trong Date
//UTC: muis gio quoc te
const birthday = new Date(2000,6,30);
console.log(birthday.getFullYear());//Lay nam
console.log(birthday.getUTCFullYear());//Lay nam
console.log(birthday.getMonth());//lay thang
console.log(birthday.getDate());//lay ngay trong tháng
console.log(birthday.getDay());// lấy ngày trong tuần 
console.log(birthday.getSeconds())
console.log(birthday.getMilliseconds());
console.log(birthday.getTime());
//Hàm set trong Date
console.log(`My birthday ${birthday}`);
birthday.setFullYear(2005);
birthday.setMonth(11);
birthday.setDate(21);
birthday.setHours(10)
console.log(`This is my birthday ${birthday}`);
//Cac ham khac trong Date
console.log(now.toDateString());//Ham tra ve thu ngay thang nam hien tai
console.log(now.toTimeString());//Ham tra ve thoi gian h/m/s
console.log(now.toLocaleDateString());// In ra mm/dd/yyyy
console.log(now.toLocaleDateString("vi-VI"));//In ra dd/mm/yyyy
console.log(now.toISOString())// chuan ISO ve ngay thang nam
// Bai tap ve Date Object
//In ra ngay kieu dd/mm/yyyy
const myTime = new Date("Wed Jul 2 2023 11:10:09 GMT+0700 (Indochina Time)");// 19/7/2023
const myYear = myTime.getFullYear();
const myMonth = myTime.getMonth();
const myDay = myTime.getDate();
const preFixMonth = myMonth < 10 ? "0" : ""
const preFixDay = myDay < 10 ? "0" : ""
console.log(`${myYear}/${myMonth}/${myDay}`)
console.log(`${preFixDay}${myDay}/${preFixMonth}${myMonth}/${myYear}`)
//setTimeOut: Ham set thoi tg der sau tg do thuc hien mot function
// const timer1 = setTimeout(function(){
    // alert("Call me after before 3 second")
// }, 3000);
// clearTimeout(timer1)
//setInterval: lap lai hanh dong sau mot tg co dinh
const time = setInterval(() => {
    console.log("Call me")
}, 1000);
clearInterval(time)//xoa hang dong time
// Viet chuong trinh nhap vao nam sinh va in ra so tuoi

const getAge = function(birthdayOfYou){
    if( typeof birthdayOfYou !== "number" ) 
    {return console.log("Vui long nhap ngay thang nam sinh")}
    else{
    const currentYear = new Date().getFullYear(); 
    const birDay = birthdayOfYou;
    const Age = currentYear - birDay;
    console.log(`I'm ${Age} years old`)}
}
getAge(2000)
//Viet chuong trinh dem nguoc thoi gian
function countDown(Minute = 1){
    let seconds = Minute*60;
    let counter = seconds;
    const timer = setInterval(function() {
        counter = counter -1
        console.log(counter);
        if (counter === 0){
            clearInterval(timer);
            console.log("Your time is end!")
        }
    }, 1000);
}
// countDown(0.1);
//Viet mot chuong trinh ten la timeSince, dau vao la tg va tinh tg dau dau vao so voi tg hien tai. vi du: tg onl lan cuoi
function timeSince(date){
    //currentTime -Time
    const now = new Date();
    const seconds = Math.floor((now.getTime() - new Date(date).getTime())/1000);
    let timer = seconds / 31536000;
    if(timer > 1){
        console.log(`${Math.floor(timer)} year ago`)
        return;
    }
    timer = seconds / 2678400;
    if(timer > 1){
        console.log(`${Math.floor(timer)} month ago`)
        return;
    }
    timer = seconds / 604800;
    if(timer > 1){
        console.log(`${Math.floor(timer)} week ago`)
        return;
    }
    timer = seconds / 86400;
    if(timer > 1){
        console.log(`${Math.floor(timer)} day ago`);
        return;
    }
    timer = seconds / 3600;
    if(timer > 1){
        console.log(`${Math.floor(timer)} hour ago`)
        return;
    }
    timer = seconds / 60;
    if(timer > 1){
        console.log(`${Math.floor(timer)} minute ago`)
        return
    }
    timer= seconds
    if(timer > 1){
        console.log(`${Math.floor(timer)} seconds ago`)
    }
    
}
timeSince("Wed Jul 19 2023 21:44:00 GMT+0700 (Indochina Time")
