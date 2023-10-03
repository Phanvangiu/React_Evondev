//Dao nguoc mot chuoi Vi d "My name is PHan Van Giu"
function reverseString(str){
    if (!str) return null;
    // const newString = str.split(" ");
    // console.log(newString)
    // const reverseName = newString.reverse().join(" ");
    // return reverseName
    return str.split(" ").reverse().join(" ")
}
console.log(reverseString("My name is Van Giu"));
//Dao nguoc chuoi va bao gom cac ky tu
function reverseLetter(str){
    if(!str) return null;
    const newString = str.split(" ").map(item => item.split("").reverse().join("")).reverse().join(" ");  
    console.log(newString)
}
reverseLetter("My name is Van Giu")

//In hoa chua cai dau cua moi chu cua mot chuoi 
function capitalizeWord(word = ""){
    if (word.length === "") {return null}
 else {
    let otherWord = word.toLocaleLowerCase().slice(1);
    return (word.charAt().toLocaleUpperCase() + `${otherWord}`);
 }
}
function capitalizeStr(str){
    if(!str) return null
    console.log(str)
    const newString = str.split(" ").map((item) => capitalizeWord(item)).join(" ")
    // const newString = str.split(" ").map(capitalizeWord).join(" ") cach viet rut go cho map khi biet cahc cahn chi co mot tham so dau vao
    console.log(newString);
}
capitalizeStr("my name is van giu")

