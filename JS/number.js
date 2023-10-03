//integer number
//float number
    console.log(7+6);
    console.log(typeof 10);
    const number1 = "10";
    const number2 = "8.9";
    console.log(number1);
    console.log(parseInt(number1));
    console.log(parseFloat(number2));
    const number3 = -19;
//Math.abs giá trị tuyệt đối
    console.log(Math.abs(number3));
//Math.floor(value): làm tròn xuống
    console.log(Math.floor(4.3));
//Math.ceil(value)Làm tròn lên
    console.log(Math.ceil(4.7));
//Math.round(value)làm tròn
    console.log(Math.round(4.5));
//toFixed():
    console.log(parseFloat((1/3).toFixed(2)));
//Math.random;
    console.log(Math.ceil(Math.random()*10));
//Math.max, Math.min
    console.log(Math.max(1,5,7,-234,45));
    console.log(Math.min(1,5,7,-234,45));
//Math.pow
    console.log(Math.pow(2,3));
//isNaN vs Number.isNaN(value)
//NaN -> Not Number
    console.log(isNaN("This is a string"));
    console.log(isNaN("12345"));
    console.log(Number.isNaN("12345"));
    console.log(Number.isNaN(NaN));

