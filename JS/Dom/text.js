//1. textContent: xem hoac thay doi noi dung cua node thong qua attribute
    //xem noi dung cua node thong qua attribute
    console.log(document.querySelector("#lorem").textContent)
    //thay doi 
    const spinner = document.querySelector("#header");
    spinner.textContent = "hello Giu"
    console.log(spinner.textContent)
//2. innerText
console.log(`=========================================`)
    console.log(document.querySelector("#lorem").textContent)// luu y chi lay ra text (PHAN VAN GIU)
    console.log(document.querySelector("#lorem").innerText)// luu y chi lay ra text (PHAN VAN GIU)
//3. innerHTMl ==> lay ra noi dung cua selector bao gom ca HTML
    // spinner.textContent = `<div class="demo"> Hello </div>`
    console.log(`=====================`)
    console.log(document.querySelector("#lorem").
    innerHTML)
    document.querySelector(".container").innerHTML =  `<div class="demo"> Hello </div>`// dung innerHTML se parse duoc doan text thanh mot HTML






