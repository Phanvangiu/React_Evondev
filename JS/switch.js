let fruit = prompt("vui long nhap ten qua")

// if(fruit == "apple"){
    // console.log("You like to eat apple")
// }
// if(fruit == "lemon"){
    // console.log("You like to eat apple")
// }
// if(fruit == "watermelon"){
    // console.log("You like to eat apple")
// }
// else {console.log("this is a orange")}
//switch  case
switch (fruit){
    case  "apple":
        console.log(`You like to eat ${fruit}`);
        break;
    case  "lemon":
        console.log(`You like to eat ${fruit}`);
        break;
    case  "watermelon":
        console.log(`You like to eat ${fruit}`);
        break;
    default: 
    console.log(`this is a ${fruit}`);
    break;
}