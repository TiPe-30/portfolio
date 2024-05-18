const sortie = document.querySelector("output");
setInterval(()=>{
    let mot = "";
    for(let i = 0;i < 50;i++){
        mot += String.fromCharCode(Math.floor(Math.random()*(128)));
    }
    sortie.textContent = mot;
},1000);