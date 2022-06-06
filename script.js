
function mySearchFunction(){
    var search = document.getElementById("search").value.trim().toLowerCase();

    switch (search){
//words for the profil page
        case 'présentation':
        
            window.location = "./pageprofil.html";
        break;
        case 'presentation':
        
            window.location = "./pageprofil.html";
        break;
        case 'profil':
        
            window.location = "./pageprofil.html";
        break;
        case 'gatien':
        
            window.location = "./pageprofil.html";
        break;
        case 'questions':
        
            window.location = "./pageprofil.html";
        break;
        case 'question':
        
            window.location = "./pageprofil.html";
        break;


//words for the formation page
        case 'études':
        
            window.location = "./pageformations.html";
        break;
        case 'etudes':
        
            window.location = "./pageformations.html";
        break;
        case 'etudes':
        
            window.location = "./pageformations.html";
        break;
        case 'étude':
        
            window.location = "./pageformations.html";
        break;
        case 'formations':
        
            window.location = "./pageformations.html";
        break;
        case 'formation':
        
            window.location = "./pageformations.html";
        break;
        case 'école':
        
            window.location = "./pageformations.html";
        break;
        case 'diplome':
        
            window.location = "./pageformations.html";
        break;
        case 'diplôme':
        
            window.location = "./pageformations.html";
        break;
        case 'diplome':
        
            window.location = "./pageformations.html";
        break;

//words for the project page
        case 'projet':
        
            window.location = "./pageprojects.html";
        break;
        case 'projets':
        
            window.location = "./pageprojects.html";
        break;
        case 'book':
        
            window.location = "./pageprojects.html";
        break;
        case 'portfolio':
        
            window.location = "./pageprojects.html";
        break;
        case 'crréations':
        
            window.location = "./pageprojects.html";
        break;

//words for the contact page
        case 'linkedin':
        
            window.location = "./pagecontact.html";
        break;
        case 'mail':
        
            window.location = "./pagecontact.html";
        break;
        case 'email':
        
            window.location = "./pagecontact.html";
        break;
        case 'adresse':
        
            window.location = "./pagecontact.html";
        break;
        case 'tel':
        
            window.location = "./pagecontact.html";
        break;
        case 'téléphone':
        
            window.location = "./pagecontact.html";
        break;
        case 'github':
        
            window.location = "./pagecontact.html";
        break;
        case 'adressemail':
        
            window.location = "./pagecontact.html";
        break;
        case 'telephone':
        
            window.location = "./pagecontact.html";
        break;
        case 'cv':
        
            window.location = "./pagecontact.html";
        break;


        default:
            console.log("failed");
    }
}