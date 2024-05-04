const form_contact = document.getElementById("form-contact"), button = document.getElementById("contact"),button2 = document.getElementById("contact2")
information = document.getElementById("infom");
let buttonV = false;

button.onclick = (e)=>{
    e.preventDefault();
    if(!buttonV){
        form_contact.style.display = "flex";
        information.style.display = "none";
    }else{
        form_contact.style.display = "none";
        information.style.display = "block";
    }
    buttonV =! buttonV;
}

button2.onclick = (e)=>{
    e.preventDefault();
    if(!buttonV){
        form_contact.style.display = "flex";
        information.style.display = "none";
    }else{
        form_contact.style.display = "none";
        information.style.display = "block";
    }
    buttonV =! buttonV;
}

