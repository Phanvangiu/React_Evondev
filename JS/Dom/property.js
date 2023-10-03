//1. getAttribute("attribute")=> la ra gia tri cua attribute selector ma ta muon lay
//attribute =(id,class,href,src,style)
    const link  = document.querySelector(".link")
    console.log(link.getAttribute("href"))
    // if(link){} kiem tra link co ton tai hay ko roi moiw thuc hien khi ko chhac chan
    const li = document.querySelectorAll(".item");
     console.log(li)//se tra ra mot node list
    //Khi dung document.querySelectorAll(".item") se tra ve mot nodeList nen khong the dung li.getAttribute vi getAtribute chi lay ra duoc gia tri cua attribute selector cua mot node khong lay duoc nodeList vi the phai dung loop de duyet qua nodeList de thuc hien getAttribute tung node trong nodeList
    li.forEach((item) => {
        console.log(item.getAttribute("class"))
    });



//2. selector.setAttribute("attribute", value) => set gia tri cho attribute nao do cua selector  
    link.setAttribute("target","_blank" )
    //tuong tu nhu getAttribute phai duyet qua nodeList moi set gia tri cho tat cac cac attribute selector duoc
    const listLink = document.querySelectorAll("a.link");
    listLink.forEach((item) => {item.setAttribute("target","_blank")});
//3. selector.removeAttribute("attribute")  cung can duyetj qua mang neu su dung document.query
    const p = document.getElementById("lorem");
    p.removeAttribute("style")
//4.selector.hasAttribute("attribute"): => kiem tra mot selector nao do co attribute do khong tra ve true or false
    console.log(p.hasAttribute("class"));//false
    console.log(p.hasAttribute("id"));//true
    //Thong thuong thi se di chung voiw ham if()
    if (p.hasAttribute("id")){
        // do something here
    }






