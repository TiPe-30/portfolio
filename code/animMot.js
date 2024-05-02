/**
 * génère un lettre de [0x21 , 0x7E] donc j'usqu'a 127 Math.random()*(33+127)
 * utilise une fonction setInterval plutôt que request animation frame
*/ 
const sortie = document.querySelector("output");
setInterval(()=>{
    let mot = "";
    for(let i = 0;i < 50;i++){
        mot += String.fromCharCode(Math.ceil(Math.random()*(128)));
    }
    sortie.textContent = mot;
},1000);