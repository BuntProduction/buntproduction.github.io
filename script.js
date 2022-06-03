function mySearchFunction(){
    var search = document.getElementById("search").value.trim().toLowerCase();

    if (search == "formation" || search == "profil" || search == "cv" || search == "gatien" || search == "formations"){
        window.location = "./pageprofil.html";
    }else if (search == "projet" || search == "portfolio" || search == "book" || search == "website"){
        window.location = "./pageprofil.html";
    }else{
        return;
    }
}