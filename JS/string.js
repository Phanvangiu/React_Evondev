//chuỗi string
const name = "Phan Văn Giữ";
const newStr= `My name is ${name}`;
console.log(newStr);
//length
console.log(newStr.length);
//split chia chuoi ra thanh cac ky tu hoac cum
const myStr = "Frontend Developer";
console.log(myStr.split(" "));
console.log(myStr.split(""));
console.log(myStr.split("/"));
// Viet thuong tat ca
console.log(myStr.toLowerCase());
//viet hoa tat ca
console.log(myStr.toUpperCase());
//Kiem tra hàm bat dau va ket thuc boi mot gia tri input 
    console.log(myStr.startsWith("Frontend"));//true
    console.log(myStr.startsWith("frontend"));//false
    console.log(myStr.endsWith("Developer"));//true
    console.log(myStr.endsWith("developer"));//false
//Include : Kiểm tra xem có chưa hay khong
    console.log(myStr.includes("Front"));//true
    console.log(myStr.includes("Giu"));//false
//indexOf(): tim vị tri cua mot ky tu tù index 0
    console.log(myStr.indexOf("o"));//2
//lastIndexOf(): Ngược lại indexOf()
    console.log(myStr.lastIndexOf("o"));14
//rePlace(): ham thay the
    console.log(myStr.replace("Developer", "Designer"));// Frontend Design 
//repeat(): lặp lại
    console.log(myStr.repeat(5));
//slice(start, end): hàm cắt
    console.log(myStr.slice(0,8));//Frontend
    console.log(myStr.slice(0));//Frontend Developer
    console.log(myStr.slice(-5));//loper
//trim(): loại bỏ khoảng trống 2 bên
    const myString = "   Phan Van Giu   ";
    console.log(myString.trim());
    console.log(myString.trimStart());//Loai bỏ space ben trái
    console.log(myString.trimEnd());//Loai bo khoang trong ben phai
//Lay ra ky 1 ký tự ở index
    console.log(myStr.charAt(0));// lay ra ky tu dau tien
    console.log(myStr.charAt(4));// lay ra ky tu ở index=4
//substr(index,length): lấy ra một phần string
    console.log(myStr.substr(1,5));

//substring(start index, end index) Lấy ra các ký tự của string
    console.log(myStr.substring(1,5));
//Sử dụng nhiều phương thức của string cùng lúc
//Loại bỏ khoảng trống 2 bên, đưa tất cả về in hoa, thay Giu thanh Muol, va in ra 2 lần trên console.
    console.log(myString.trim().replace("Giu","Muol ").toUpperCase().repeat(4));








