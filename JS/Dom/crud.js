//nhung vao index2.html
//them xoa sua in JS
//1.Tao ra Element trong js: document.createElement("element")
    const createDiv = document.createElement("div")//luc nay chua in ra ngoai duoc
//2. selector.appendChild
    //document.body ==>the body(dac biet)
    //document.querySelector("body")
    const body = document.body;
    body.appendChild(createDiv)// luc nay the div phia tren duoc in ra vao body
    //tao class cho the div
    createDiv.classList.add("container")
    // tao class cho div bang cach sau
    createDiv.className = 'header name age'
    // chi them noi dung cho div
    createDiv.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic inventore a ad tenetur corporis? Doloremque labore temporibus error aliquam asperiores. Numquam aut illum consequatur ratione. Magni aut id aperiam quasi"
    // vua them noi dung vua them html
    createDiv.innerHTML = " Phan <strong> Van </strong> Giu"
    //them mot attribute
    createDiv.setAttribute("id", "appendChild")
//3. Tao ra HTML nhu minh hoa
    const card = document.createElement("div");//tao mot div
    card.classList.add("card");//dat class cho div do
    const cardImg = document.createElement("img");//tao mot img 
    // cardImg.setAttribute("src","https://source.unsplash.com/random");//set thuoc tinh src cho img 
    cardImg.setAttribute("id","card-image")
    cardImg.className = 'card-img'
    card.appendChild(cardImg);//in img vao trong div(class="card")
    body.appendChild(card);//in div do ra body
//4. document.createTextNode
    const text = document.createTextNode("Hello my name is Giu")
    const h1 = document.createElement("h1")
    body.appendChild(h1)//dua h1 vao body
    h1.appendChild(text)//dua text vao h1
//5. Phuong thuc element.cloneNode : tao ra ban sao
    const h1Clone = h1.cloneNode()//trong dau () cua cloneNode là gia trị boolean neu khong set true mà chỉ set false hoặc không set thi chi in ra tag mà khong in ra textNode(textContent)
    body.appendChild(h1Clone)
//6. hasChildNodes: kiem tra element co phan tu con hay ko, có->true and nguoc lai
    console.log(h1.hasChildNodes());
    const h3 = document.createElement("h3");
    body.appendChild(h3);
    console.log(h3.hasChildNodes());






