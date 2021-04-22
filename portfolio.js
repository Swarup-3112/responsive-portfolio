let navlist = document.querySelector('.nav-list');
let openicon = document.querySelector('.bx-menu');
let closeicon = document.querySelector('.close-icon');

console.log(openicon)

openicon.addEventListener('click' , show)
    
 function show(){
    console.log("clicked me");
    navlist.style.display = 'flex';
    navlist.style.top = '0';
 }


 closeicon.addEventListener('click' , shut)

 function shut(){
    navlist.style.top = '-100%';
 }


