const loutupt = document.querySelector("output");

// génère un lettre de [0x21 , 0x7E] donc j'usqu'a 127 Math.random()*(33+127)

function genereMot(){
    let mot = "";
    for(let i = 0;i < 50;i++){
        mot += String.fromCharCode(Math.ceil(Math.random()*(43+127)));
    }
    loutupt.textContent = mot;
}

setInterval(genereMot,1500);