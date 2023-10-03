// La nhung menh de lien quan den DOM
//parentNode, parentElement, removeChild
//1. parentNode vs parentElement
    const span= document.querySelector("span")
    console.log(span.parentElement)//kiem tra xem element()node cha cua span
    console.log(span.parentNode.parentNode)//kiem tra node(element) 2 cap cua span\
//2. selector.parentElement.removeChild() hoac selector.parentNode.removeChild(deleteSelector)
    span.parentElement.removeChild(span)//span phai truy xuat den phan tu cha chua no sau do remove chinh no
//3. nextElementSibling(tim phan tu ke tiep) vs previousElementSibling(tim phan tu dung truoc)
    console.log(`================================`)
    const span1 =document.querySelector(".span1")
    const nextspan = span1.nextElementSibling
    console.log(nextspan)
    console.log(`-----------------------------`)
    const prespan = span1.previousElementSibling;
    console.log(prespan)
//4. childNode(tra ve tat ca cac node (nodeList) ben trong bao gom space or enter) vs children(tra ve cac node(HTMLCollection) khong bao gom space or enter)
    console.log(`childNodes=============================`)
    console.log(span1.childNodes)//tra ve listNode bao gom cac (space and enter==>text)
    console.log(span1.childNodes[1])//tr ve strong
    console.log(span1.children)//tra ve a
    console.log(span1.children[1])//
// 5.firstChild(Lay phan tu dau tien, neu cos space or enter thi se lay text) vs firstElementChild(chi lay element va textContent trong Element do)
    console.log(`==========================`)
    console.log(span1.firstChild)// text
    console.log(span1.firstElementChild)//Strong
//6. lastChild vs lastElementChild: nguoc lai voi muc 5
    console.log(`==========================`)
    console.log(span1.lastChild)// text
    console.log(span1.lastElementChild)//a
//7. nextSibling vs previousSibling tuong tu nhu nextElementSibling vs previousElementSibling nhung neu truy xuat next hay previous gap (space or enter) thi se xuat ra text



