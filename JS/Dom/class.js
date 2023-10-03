// 1. add selector.classList.add("className")
    const container = document.querySelector(".container")
    container.classList.add("is-active")// them class="is-active" vao class container
// 2. selector.classList.remove("className")
    container.classList.remove("is-active")// xoa class="is-active"
// 3. selector.classList.contains("className") kiem tra cho chua class do khong
    console.log(container.classList.contains("is-active"))
    console.log(container.classList.contains("container"))
//4. selector.classList.toggle("className"); Neu co ton tai className thi remove, con chua co thi add vao
    container.classList.toggle("is-active")
//selector.className ==> tra ra chuoi cac class cua selector
    const title = document.querySelector(".title")
    console.log(title.className)// in ra 4 class
    //Muon chi con 2 class title thi phai remove lan luot khong the remove 1 lan thi phuong thuc remove khong cho phep. Tuy nhien ta co the dung cachs gan gia trij
    console.log(`=========================================`)
    title.className = 'title header'
    console.log(title.className)

