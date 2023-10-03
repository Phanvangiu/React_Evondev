//1.offsetWith: lay ra do rong thuc su cua element do,offsetHeight: lay chieu cao
    function log(value){
        console.log(value)
}
    const boxed = document.querySelector(".boxed");
    log(boxed.offsetWidth);//lay do  rong  (w + padding+border)
    log(boxed.offsetHeight);//lay chieu cao
    log(boxed.offsetLeft);//vi tri so voiw ben trai
    log(boxed.offsetTop);//vi tri so voi ben tren
    log(boxed.offsetParent);//Xem coi  ai la cha
//2. clientWidth, clientHeight, clientLeft, clientTop
    log(boxed.clientWidth);//do rong tru di border
    log(boxed.clientHeight);//chieu cao tru di border
    log(boxed.clientLeft);//vi tri cua no so voi ben trai border
    log(boxed.clientTop);//vi tri cua no so voi ben tren border
//3. window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight.
    log(window.innerWidth);
    log(window.outerWidth);
    log(window.innerHeight);
    log(window.outerHeight);
//4. selector.getBounddingClientrect() ==>lay toa do kich thuoc cua phan tu
    log(boxed.getBoundingClientRect());
// Su khac nhau giua nodeList va HTMLcollection 
    //Giong nhau: dau co the truy cap bang index, co do dai, giong mang nhungvkhong han la mang vi ko su dung duoc cac phuong thuc cua mang(push,pop,shift,unshift),, dung dc loop for
    //khac nhau
    /*
        HTMLcollection: ko su dung dc foreach
        nodeList: co the su dung dc foreach
    */


//Su khac nha giua parentNode va parentElement
//Node(textNode,tagNode)
    //parentElement cos the null
    log(document.documentElement.parentElement);//lay ra the cha cua the HTML ==> null
    log(document.documentElement.parentNode);//lay ra the cha cua the HTML ==> null
