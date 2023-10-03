//By value By references
//By Value -> giá trị thực sự đc lưu trong vùng bộ nhớ
    const num1 =  1;
    const num2 =  1;
    console.log(num1===num2)
//By reference -> chỉ nói tới vùng bộ nhớ nhưng không biết vùng bộ nhớ nào
    const array1 = [1,2];
    const array2 = [1,2];
    console.log(array1===array2)
//So sánh 2 mảng
    //JSON: Javascript Object Notation
    //JSON.stringify(value)-> convert gia tri sang dạng JSON string va lưu lại trong database
    const arr = JSON.stringify("[1,2,3,4,5]")
    console.log(arr)
    //JSON.parse-> dùng để lấy dữ liệu ra
    console.log(JSON.parse("[1,2,3,4,5]"))
    const arr1 = JSON.stringify(array1)
    const arr2 = JSON.stringify(array2)
    console.log(arr1===arr2);
// Clone : copy ra một bảng mới dùng làm các thao tang tren bảng mớ để không ảnh hướng tới bảng cũ
    const students = ["a","b","c","e"];
    // students.pop();
    console.log(students);
    //sử dụng ethod slice()
    const sliceStudent = students.slice();
    console.log(sliceStudent);
    //spread operator [...array], cũng là một cách sao chép mảng
    const spreadStudent = [...students];
    console.log(spreadStudent)
//2 cách gộp mảng 
    //concat: array1.concat(array2,array3,...,arrayn)
    array3 =[3,4,5,6];
    const mergeArray = array1.concat(array2,array3);
    console.log(mergeArray)
    //spread oparetor
    const mergeArray1 = [...array1,...array2,...array3];
//Destructuring array//  lay gia tri theo index rut gon
    const toys = ["ball","sword","arrow","magic","water","fire"];
    //const [] =toys
    const [x,y,z] =toys;
    console.log(x,y,z);
    //rest parameter: lay cac phan con lai
    const [a,b,...rest] = toys;
    console.log(rest);