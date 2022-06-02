function myFunction(){
    var search = document.getElementById("search").value;
    if (search == "Formation" || search == "formation" || search == "profil" || search == "Profil"){
        window.location = "./pageprofil.html";
    }else if (search == "Projet" || search == "projet" || search == "portfolio" || search == "Portfolio"){
        window.location = "file:///C:/Users/gatie/Documents/GitHub/Portfolio/" + search;
    }else{
        return;
    }
}