let a;
console.log(a);//undefined
let b;
console.log(b);
b = 100;
console.log(b);
const c = 200; //bắt buộc gán giá trị
// Null -> ko có gì cả
let d =null;
console.log(d);
//boolean -> true, false
//falsy  values vs truthy value
//falsy values:"", 0, false, undefine, null
//truthy value: "abc",1,true

//document.title va document.head
//document.title==> the title cua trang web
    console.log(document.title)
    document.title= '140-title-head'

    console.log(document.head)
    // <link rel="stylesheet" href="CSS/reset.css">
    const link =document.createElement("link")
    link.setAttribute("ref","stylesheet");
    link.setAttribute("href","CSS/reset.css");
    document.head.appendChild(link)
// insertBefore
//parentNode.insertBefore(newNode,existingNode)
const ul = document.querySelector("ul")
    document.body.insertBefore(ul,document.querySelector("h3"))
    //insertAdjacentElement (cach 2)
    document.querySelector("h3").insertAdjacentElement("beforebegin",ul);
//replaceChild
//node.replaceChild(newnode,oldnode)
    const span = document.createElement("span")
    span.textContent =`Phan van giu`
    document.body.replaceChild(span,document.querySelector(".boxed"))// thay .boxed = span
    // convert HTMLcollection , Nodelist to Array
    const li = document.getElementsByTagName("li");
    console.log(li);
    //Array.from(HTML collection or NodeList)cach
    //[...HTMLcollection],[...nodeList]
    // li.foreach((item)=>item);
    [...li].forEach(item =>item);
    console.log(li)

