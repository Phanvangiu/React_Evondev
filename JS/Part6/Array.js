//array literal
    const student = [];
//constructor
    const students = new Array();
//Mang co the chua mang
//Empty array
// Index la vi tri cua gia tri torng mang va no at dau tu 0
//length : do dai cua mang dem tu 1
//truy xuat trong mang
    const student1= ["Vy","Phan","Van","Giu","Vy"];
    console.log(student1[2]);
    console.log(student1[student1.length-1]);// lay phah tu cuoi cung
//cac phuong thuc hay dung: arrayName.method
//reverse -> Dao nguoc gia tr trong mang
    console.log(student1.reverse())
//join noi cac phan tu trong mang thanh string
    console.log(student1.reverse())
    console.log(student1.join("+"))
// IndexOf tra ve vi tri dau tien cua gia ti do khi trong mang co nhieu gia tri giong nhau
    console.log(student1.indexOf("Vy"))
//lastIndexOf: tuowng tu nhu IndexOf nhung tra ve vi tri cuoi
    console.log(student1.lastIndexOf("Vy"))
//push: them mot phan tu vao  cuoi mang
    console.log(student1.push("JS"));
    console.log(student1);
//pop: xoa phan tu cuoi cung cua mang
    console.log(student1.pop())
    console.log(student1)
//unshift: them phan tu vao dau mang
    console.log(student1.unshift("Frontend"));
    console.log(student1);
//shift: xoa phan tu dau tien cua mang
    console.log(student1.shift())
    console.log(student1)
//Include: kiem tra gia tri cos nam trong mang
    console.log(student1.includes("Vy"))
    console.log(student1.includes("abc"))
//Slice: sao chep mang ban dau ra mot mang moi
    const animal = ["tiger","lion","fish","horse"];
    const animal2 = animal.slice();
    console.log(animal2)    
    //slice(start): start la index
    const animal3 = animal.slice(2);
    console.log(animal3)
    //slice(start,end): no se sao chep tu start toi (end-1)
    const animal4 = animal.slice(1,3)
    console.log(animal4)
    //co the truyen vao so am
    const animal5 = animal.slice(-1);
    console.log(animal5)
//splice: No se xoa, thay the phan tu trong mag
    const pet =["dog","cat","bird",'dragon']
    //splice(start):
    const pet2= pet.splice(2);
    console.log(pet2)
    //splice(start,deleteCount): deleteCount so luong phan tu muons xoa, thay the
    const pet3= pet.splice(0,1,true);// 0 là index bắt đầu, 1 là số phần tử, true là giá trị đc thay thế vào index 0
    console.log(pet3)
    console.log(pet)


//sort: sap xep cac phan tu trong mang theo chuan unicode 16
const random = [1,1000, 9999,20,5];
    console.log(random.sort())
    //sort co  callback (function la parameter cua mot function khac)
    const random2 = random.sort(function(a,b){
        if(a>b) return 1;//sap xep theo tang dan
        if(a<b) return -1;//sap xep theo giam dan
    });
    console.log(random2)
    //ternary operator : condition ? something : something else
    const random3 = random.sort((a,b) => ( a>b?  1 : -1));
    console.log(random3)
    //sort bo sung
    const random4 = random.sort((a,b) => ( a>b?  -1 : 1));
    console.log(random4)

//find: tra ve phan tu tim thay dau tien torng mang khi thoa mot dieu kien
    const number =[1,1000, 9999,20,5];
    //Neu khong sap xep lai thi se bi tim sai do tim theo unicode 16 
    //Tim phan tu dau tin lon hon 10
    const findYourNumber = number.find((element) => element >10);
    console.log(findYourNumber);
    //Neu khong thoa dieu kien thi se tra ra undefined
//findIndex: tra ve index cua element dau tien thoa mang dieu kien
    const number1 =[1,9,1000, 9999,20,5];
    const findYourIndex = number1.findIndex((element) => element >10);
    console.log(findYourIndex);
//Map: duyet qua tung phan tu trong mang va tra ra mang moi ma khong thay doi mang ban dau
    //.map(callback(value,index,array))
    const listNumber = [1,2,3,4,5];
    //Nhân đoi phan tu number trong mang ma khong thay doi amng goc
    const listNumberDouble = listNumber.map((value,index,array)=>{
        return value *2;
    })//index là vi tri cua phan tu, array la mang ban dau.ma chua su dung toi
    console.log(listNumberDouble)
//forEach: duyet qua tung phan tu trong mang nhung ko tra ra mang moi
    //.forEach(callback(value,index,array))
    const listNumberTripple = listNumber.forEach((value,index,array)=> {return value *3})
    console.log(listNumberTripple)//forEach ko return dc
//filter: loại bo cac phan tu trong mang theo mot condition 
    const greaterThanThree = listNumber.filter( item => item > 3);
    console.log(greaterThanThree)
//some: tra ve boolean 
    //tra ve true khi thoa 1 condition va nguoc lại khi ko thoa dk nao ca
    const someNumber = listNumber.some(value => value > 30);
    console.log(someNumber)
    const someNumber1 = listNumber.some(value => value > 3);
    console.log(someNumber1);
//every: tra ve boolean tra ve true khi tat ca dieu kien dung nguoc lại chỉ can 1 die kien ko thoa thi false
    const everyNumber = listNumber.every(value => value > 0);
    console.log(everyNumber)
    const everyNumber1 = listNumber.every(value => value > 1);
    console.log(everyNumber1)
//reduce: gom cac phan tu trong mang ve 1 gia tri
    //.reduce((a,b)=>{  initialize value})
    console.log(`---------------------`)
    const totalNumber = listNumber.reduce((previousValue,currentValue) => {
        // console.log(previousValue,currentValue);
        return previousValue + currentValue;
    })
    console.log(totalNumber)
