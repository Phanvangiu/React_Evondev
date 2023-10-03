//cach1 
/*const template =
`<div class="model">
<div class="model-content">
    <i class="fa fa-time modal-close"></i>
    <div class="modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus similique culpa itaque laboriosam facere sed a quos dicta sunt doloribus doloremque sint nemo, deleniti quam veniam laudantium adipisci aliquid.</div>
    <div class="modal-action">
        <button class="modal-submit">Confirm</button>
        <button class="modal-cancel">Reset</button>
    </div>
</div>
</div>`
    const mybody = document.body;
    mybody.insertAdjacentHTML("afterbegin",template);
    const modal = document.querySelector(".model");
    console.log(modal)
    if(modal){
    setTimeout(function(){
        modal.classList.add("is-show")
    },3000)}
*/
//cach2
    const modal = document.createElement("div")//tao mot the div
    modal.classList.add("model");//dat ten class cho div vua tao

    const modalContent = document.createElement("div")//tao them mot div 
    modalContent.classList.add("model-content")//dat ten cho div sau
    modal.appendChild(modalContent);//dua div(model-content) vao div (model)
    document.body.appendChild(modal)// dua div(model) vao body

    const modalClose = document.createElement("i")
    modalClose.classNam = 'fa fa-time modal-close';
    modalContent.appendChild(modalClose)

    const modalDesc = document.createElement("div")
    modalDesc.classList.add("modal-desc")
    modalDesc.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus similique culpa itaque laboriosam facere sed a quos dicta sunt doloribus doloremque sint nemo, deleniti quam veniam laudantium adipisci aliquid'
    modalContent.appendChild(modalDesc)

    const modalAction = document.createElement("div")
    modalAction.classList.add("modal-action")
    modalContent.appendChild(modalAction);

    const modalSubmit = document.createElement("div")
    modalSubmit.classList.add("modal-submit")
    modalAction.appendChild(modalSubmit);
    modalSubmit.textContent= 'Submit'

    const modalCancel = document.createElement("div")
    modalCancel.classList.add("modal-cancel")
    modalAction.appendChild(modalCancel);
    modalCancel.textContent= 'Cancel'

    if(modal){
    setTimeout(function(){
        modal.classList.add("is-show")
    },2000)}
console.log(`---------------------------------------`)
//Viet 1 function tao ra thong bao
    function createNotification(title="Welcome to notification"){
        const template = 
        `<div class="noti">
        <img src="https://source.unsplash.com/random" alt="" class="noti-image">
        <div class="noti-content">
            <h3 class="noti-title">${title}</h3>
            <p class="noti-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatum assumenda possimus mollitia repellendus fugit illo similique incidunt dolores? </p>
        </div>`
        //insertAdjacentHTML
        document.body.insertAdjacentHTML("afterbegin",template)
    }
        const randomData= ["Welcome to Js","welcome to CSS","Welcome to React","Welcome to Database"]; 
        let lastTitle;//khoi tao bien lastTitle
        const timer =setInterval(function(){
        const item = document.querySelector(".noti");
        if(item) item.parentNode.removeChild(item)
        //random index cua mang 
        const title = randomData[Math.floor(Math.random() * randomData.length)]
        if(lastTitle !== title){
            createNotification(title)
        }
        lastTitle = title;// gan gia tri cua mang lay ra dc vao lastTitle
    },4000)