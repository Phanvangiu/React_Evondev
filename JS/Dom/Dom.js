//Dom : Document Object Model (Mo hinh doi tuong tai lieu)
//Dom attribute
//Dom note

//2. Selecting nodes
//2.2 Document.querySelector("selctor") (THUONG DUOC SU DUNG NHAT VI CO THE TRUYEN VAO CLASS, ID, HOAC MOT NODE)
//header, p, body, #heading
    const singleNode = document.querySelector("h1");
    const singleNode2 = document.querySelector(".container");
    console.log(singleNode);
    console.log(singleNode2)
//2.2 Document.querySelectorAll("selector") -> tra ve mot NodeList chua danh sach cac node neu khong thi tra ve empty node (Giong nhu mag nhung khong phai mang do khong su dung duoc cac phuong thuc cua mang nhung co the dùng loop va su dung forEach)
    const multiNode= document.querySelectorAll(".item");
    for (let i=0;i<multiNode.length;i++){
        console.log(multiNode[i])
    };
    console.log(`===================`)
    console.log(multiNode)
//2.3 doccument.getElementByClassName("className")-> tra ve mot HTMLCollection chua danh sach cac node(khong phai mot mang), neu khong co thi tra ve empty
    const classNode = document.getElementsByClassName("item")
    console.log(classNode);
//2.4document.getElementByTagName("tagName") --> 
    const tagNode = document.getElementsByTagName("h1");
    console.log(tagNode);
// document.getElementById("id") --> tra ve mot node(giong voi document.querySelector)
    const isnode = document.getElementById("header");
    console.log(isnode)
