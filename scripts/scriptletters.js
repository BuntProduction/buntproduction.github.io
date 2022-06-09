//script for the letters animation of the placeholder
let i = 0;
let placeholder = "";
const txt = "Tapez votre recherche ici";
const speed = 100;

function type(){
    placeholder += txt.charAt(i);
    document.getElementById("search").setAttribute("placeholder", placeholder);
    i++;
    setTimeout(type, speed);

}

type();
