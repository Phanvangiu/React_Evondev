//khai bao object
//object literal
    const objectLiteral = {};
//object constructor
    const objectConstructor = new Object();
//
const student ={
    name : "evondev",
    age : 27,
    male: true,
    "last-name": "giu",
    "is-development": true,
    hi: function(){
        console.log(`Hello van Giu`)
    }
}
// 2 cach truy xuat gia tri object
//dung Dot notation
    console.log(student.name)
//dung Bracket notation 
    console.log(student["age"])
//Thay doi value cua key trong object
    student.age = 20;
    student.male ="male"
    student.isDevelopment= true
    student["is-development"] = false
    console.log(student)

//Xoa mot gia tri
    delete student["last-name"]
    console.log(student)
    // for in trong object: vong lap
    for(let key in student){
        if(key==="hi"){
            console.log(`Hello Hi`)
        }
        console.log(`${key}:     ${student[key]}`)   
    }
//method object.keys(object-name): tra ve mot mang chua tat ca cac key cua object   
    console.log(Object.keys(student));
//Object.values(object-name): tra ve mot mangchua tat cac gia tri cua objetc
    console.log(Object.values(student))
//Object.entries(object_name): tra ve mot mang nested (mang long mang)
    console.log(Object.entries(student))
//Object.assign(): (Clone)  copy object nay vao mot objetc khac
    const a ={
        firstName :"van"
    }
    const b ={
        lastName : "giu"
    }
    const c = Object.assign(a,b)
    console.log(c)
    const d = {...a,...b};//spread operator
// Object.freeze(object): Dong bang object khong cho chinh sua  
    const car ={
        brand: "BMW"
    }
    console.log(Object.freeze(car))
    car.brand = "Audi"// thay doi value bi ngan lai
    console.log(Object.freeze(car))
//Object.seal(object): chi cho phep chinh sua, ko cho them
    const user ={
        userName : "Keep"
    }
    console.log(Object.seal(user))
    user.userName = "vangiu"
    console.log(user)
    user.lastName = "Giu"
    console.log(user)
//Sao chep mot object don gian
    const newUser = user;
    newUser.userName = "Phan van giu"
    console.log(user)   //Do By referent(newUser chiem lay bo nho cua user, nen khi chinh sua newUser se anh huong den user )
    console.log(newUser)
   // cach khac phuc la  su dung spread operator
    console.log(`-----------------`)
    const newUser1 = {...user};
    newUser1.userName = "Phan van giu"
    console.log(user)  
    console.log(newUser1)    
    //su  dung Object.assign de sao chep
    console.log(`---------------`)
    const newUser2 = Object.assign({},user)//{} dai dien cho 1 object rong
    console.log(newUser2)

    //spread operator and Object.assign chi copy dc Object 1 cap 

//Sao chep mot object phuc tap (nested) 
    const usr1 = {
        userName: "vangiu",
        school :{
            name: "Cao Thang",
            room : {
                name : "IT"                
            }  
        }
    }
    console.log(`---------------`)
    const newUser3 = Object.assign({},usr1);
    console.log(newUser3)// mac du da sao chep sang newuser3 nhung luc nay room trong usr1 van bi thay doi value
    newUser3.school.room = "Design"
    console.log(newUser3)
    //clone nested object thi phai su dung cach nay
    console.log(`-----------------`)
    const newUser4 = JSON.parse(JSON.stringify(usr1));
    newUser4.school.room = "Pain"
    console.log(newUser4)
// Tu khoa this trong Object
// this no se de cap den object gan nhat
console.log(`---------`)
const student2 ={
    name : "van giu",
    age : 27,
    male: true,
    "last-name": "giu",
    "is-development": true,
    hi: function(){
        console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`)
    },
    fullName : {
        name: "Ngo Chi Vy"
    }
}
    student2.hi();
//Optional chaining
    console.log(student2.name);
    // console.log(student2.fullName.name); khi ko ton tai fullName => cannot read property
    if(student2.fullName){//kiem tra co ky nay hay ko
        if(student2.fullName.name){//tuong tu
            console.log(student2.fullName.name)
        }
    }
    //viet cho gon lai
    //student2.fullName ?.name
    console.log(student2.fullName?.name);
//Destructuring Object 
    const name1 = student2.name;
    const age1 = student2.age;
    const male1 = student2.male;
    //
    console.log(`---------------`);
    const {name,age,male,...rest} = student2;
    console.log(rest);   

    //Normal function (can nho chinh xac name age school cai nao truoc)
        // function whatYourInfo(name,age,school){
            // console.log(name,age,school);
        // }
        // whatYourInfo("vangiu",20,"Aptech")


    // function with object paremeter(ko can nho thu tu cac key)
    function whatYourInfo(obj){
        console.log(obj.name,obj.age,obj.school);
    }
    const newObj ={
        name : "vangiu",
        age: 20,
        school: "Aptech"
    }
    whatYourInfo(newObj)

    //object destructuring parameter
    function whatInfo({name, age, school}){
        console.log(name,age,school);
    }
    whatInfo({
        school: "cao thnag",
        name: "cao",
        age: 15
    })
// 1. Viet mot function kiem tra value co phai la  object khong?
    function isObject(value){
        if(typeof value ==="object" && !Array.isArray(value) && !null){
            return true;
        }
        return false
    }
    console.log(isObject({}));
//2. {a:1,b:2} -> [["a",1],["b",2]]
    //cach 1: 
    function objectToArray(obj){
        if(!isObject(obj)) return;
        let str = Object.entries(obj)
        // console.log(str)
        // let arr = [...str]
        return str;
    }
    console.log(objectToArray({
        a: 1,
        b:2
    }));
    //cach 2:
    function objectToArr(obj){
        if(!isObject(obj)) return ;
        const value = Object.keys(obj).map(item => [item,Object.values(obj)]);
        return value;
    }
    console.log(objectToArr({a: 1,b:2}));
    //cach 3:
    function objectToA(object){
        if(!isObject(obj)) return ;
        let result = [];
        for(let key in object){
            if(object.hasOwnProperty(key)){
                result.push([key,object[key]]);
            }
            return result
        }
    }
    console.log(objectToArr({a: 1,b:2}));
// Viet mot phuong thuc co ten la without
// ({a:1, b:2}) => {a:1}
    function without(object,...key){//...key se tao ra mot mang chua cac key cua object de xoa dc nhieu key
        // const nObject = {...object}// clone don gian
        const newObject = JSON.parse(JSON.stringify(object));
        key.forEach(item => {
            delete newObject[item]
        });
        // delete newObject[key];
        // console.log(object)
        return newObject;
    }

    console.log(without({a: 1,b:2,c:3},"b","a"));
//Kiem tra 2 ob co bang nhau hay khong
    function isEqualObject(obj1,obj2){
        if(!isObject(obj1) || !isObject(obj2)) return;
        else {
            if(JSON.stringify(obj1)===JSON.stringify(obj2))
                return true
            else return false
        }
    }
    console.log(isEqualObject(({a: 1,b:2}),({a: 1,b:2})))

    function isEqualObj(obj1,obj2){
        //check key length of objects
        const objkey1= Object.keys(obj1);
        const objkey2= Object.keys(obj2);
        if(objkey1.length!==objkey2.length) return false
        //check value
        const result = objkey1.every((key) => obj1[key]==obj2[key])
        return result
    }
    console.log(isEqualObj(({a: 1,b:2}),({a: 1,b:2})))
        
        
    
    
