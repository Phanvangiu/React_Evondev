//loop
    const number = [1,2,3,4,5];
    /*
        for(let i =0;i<number.length;i++){
            body code
        }    
    */
   console.log("Index cua phan tu");
   for (let i =0;i<number.length;i=i+2){
        console.log(`The index is: ${i}`)
   }
   console.log("gia tri cua phan tu")
   for (let i =0;i<number.length;i=i+2){
    console.log(`The value is: ${number[i]}`)
   }
   console.log("khi gap gia tri phan tu =3 thi dung lai")
   for (let i =0;i<number.length;i++){
    console.log(`The value is: ${number[i]}`)
    if(number[i]===3){
        break;
    }
   }
   console.log("khi gap gia tri phan tu =3 thi bo qua ko in ra")
    for (let i =0;i<number.length;i++){
    if(number[i]===3){
        continue;
    }
    console.log(`The value is: ${number[i]}`)
    }
    console.log("gia tri cua phan tu theo thu tu nguoc")
    for (let i =number.length-1;i>=0;i--){
        console.log(`The value is: ${number[i]}`)
    }
    console.log("loop long loop")
    console.log("gia tri cua phan tu")
    for (let i =number.length-1;i>=0;i--){
        console.log(`cuu chuong: ${number[i]}`)
        for (let j =0;j<number.length;j++){
            console.log(`The value is: ${number[i]*number[j]}`)
            }
        }
//Exercise: 
//Sao chep mot mang
    const array = [1,2,3,4,5,6,7,8,9];
    let emptyArray= []
    for(let i=0;i<array.length;i++){
        emptyArray.push(array[i]);
    }
    console.log(emptyArray)
//Dao nguoc tung chu cai trong string
    const str = "I love you"
    let result = "";
    for(let i=str.length-1;i>=0;i--){
        // console.log(str[i]);
        result = result + str[i];
    }
    console.log(result)
//while and do while
//while
    let number2 = 1;
    while( number2<10){
        console.log(`number is: ${number2}`);
        number2++;
    } 

    let number3 = 1;
    console.log("do while")
    do{
        console.log(`number is: ${number3}`);
        number3++;    
    } while(number3<5)
// vong lap for of:thuong dc dung trong mang, string, object
    for (let value of array){
        value += 10;
        console.log(value);
    }
    // co the truyen truc tiep
    let resultForOf=[]
    for (let value of  ["Phan","Van","Giu"]){
        console.log(value);
        resultForOf.push(value);
    }
    console.log(resultForOf.join(" "))
//flat(number): dua phan tu cua mang con ra ngoai mang cha

//Cho 1 manhg gom nhieu gia tri [1,100,false,"giu","",undefined, "js",[1,2,3]].Viet chuong trinh loai bo cac gia tri la falsy va chi giu lai cac gi tri la truthy. Falsy: 0, null,undefined, false, "", NaN.
    let exercise = [1,100,false,"giu","",undefined, "js",[1,2,3],NaN]
    let filterArr = exercise.filter((item) => Boolean(item) );
    console.log(filterArr);
//cho mot mang phuc tap. flatten array
    const complexArray = [[1,2,3,[false,null],],  [1,5,6,["javascript"]], [888,666,[90]]];
    const result1 =  complexArray.flat(2);
    console.log(result1)
//Dao nguoc so nguyen
    //Math.sign(number): number>0 => 1 va nguoc lai
    function reverseNumber(number5){
        const value = parseInt(number5.toString().split("").reverse().join(""))*Math.sign(number5);
        console.log(value)
    }
    reverseNumber(-12345);
//Viet chuong trinh FizzBuzz voi dau vao la mot so nguyen, va cho chay tu mot toi so nguyen do kiem tra so nao chia heet cho 2 thi in ra chu "Fizz", neu chia het cho 3 thi in ra chu "Buzz", neu chia het cho ca 2 va 3 thi "FizzBuzz".
    let number6;
    function fizzbuzz(number6){
        for(i=1;i<=number6;i++){
            if(i % 2===0 && i % 3===0){
                console.log(`This is ${i}: FizzBuzz`);
            }
            else if(i % 3===0){
                console.log(`This is ${i}: Buzz`);
            }
            else if(i%2===0){
                console.log(`This is ${i}: Fizz`)
            }
            else {console.log(`This is ${i} khong thoa man`)}
        }}
    fizzbuzz(20);
//Cho mot chuoi bat ky dem so luong ky tu vowels(u,e,o,a,i)
function countVowels(stringVowels){
    let count = 0;
    let character = ["u","e",'o',"a",'i'];
    // let character = "ueoai";
    // let convertStr = stringVowels.toLowerCase();
    for (c of stringVowels.toLowerCase()){
        if(character.includes(c)) count++;
    }
    console.log(count)
}
    countVowels("thiet la Ue Oai")
// Cho mot mang [1,2,4,5,6,8,4,7,9,2,3]. Viet mot function tr ve gia tri unique
function uniqueArr(array){
    let result = [];
    if(Array.isArray(array)){// Kiem tra neu do la mang
        for (let i=0;i<array.length;i++){
            if(!result.includes(array[i])){
                result.push(array[i]);
            }
        }
        return result;
    }
    else return result
}
console.log(uniqueArr([1,2,4,5,6,8,4,7,9,2,3]))
console.log(uniqueArr(123))
//Viet mot function xu ly mot mang lon thanh nhieu mang nho dua vao tham so dau vao.
function spliceArray(array,number){
    let result = [];
    for(let i=0; i<array.length;i=i+number){
        console.log(array.slice(i,i+number));
        result.push(array.slice(i,i+number))
    }
    console.log(result)
    return result
}
spliceArray([1,2,3,4,5,6,7],3)
console.log(`-----------------------`)
function sliceArray(array,number){
    let result = [];
    let index=0
    while(index<array.length){
        result.push(array.slice(index,index+number))
        index =index+number;
    }
    return result
}
    console.log(sliceArray([1,2,3,4,5,6,7],3));

