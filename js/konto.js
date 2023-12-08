console.log("Hallo Welt");


holeUser();
UserAnzeigen();




function holeUser() {
    fetch("https://530624-7.web.fhgr.ch/php/holeUser.php",

    )

    .then((res) => {

        return res.json();


    })
    .then((data) => {

        console.log("User aus Datenbank ", data);
        holePPuser();
        UserAnzeigen(data);
    
    })
}


function UserAnzeigen(userArray) {
    // Definiert Variabel user mit erster Ausgabe aus Datenbank
    let user = userArray[0];

        let UserContainer = document.createElement("div");
        UserContainer.innerHTML =

            '<div class="User">' +
            '<h3>' + 'Unternehmen' +'</h3>' +
            '<p>' + user.unternehmen + '</p>' +
            '<h3>' + 'Vorname' +'</h3>' +
            '<p>' + user.vorname + '</p>' +
            '<h3>' + 'Name' +'</h3>' +
            '<p>' + user.name +'</p>' +
            '<h3>' + 'E-Mail' +'</h3>' +
            '<p>' + user.email + '</p>' +
            '</div>';

        document.getElementById("liste-user").appendChild(UserContainer);

    };



// Konto bearbeiten

function kontobearbeiten () {
    window.location = "/updatekonto.php";
}



function holePPuser() {
    fetch("https://530624-7.web.fhgr.ch/php/holePPuser.php",

    )

    .then((res) => {

        return res.json();


    })
    .then((data) => {

        console.log("Parkplatz aus Datenbank ", data);
        PPAnzeigen(data);
    
    })
}



function PPAnzeigen(data) {
    console.log(data);
    data.forEach(pp => {


        let ppContainer = document.createElement("div");
        ppContainer.innerHTML =

            '<div class="pp" id="magic_'+ pp.pp_id +'">' +
            '<p>' + pp.strasse + '</p>' +
            '<p>' + pp.plz + " " + pp.ort + '</p>' +
            '<p>' + 'Startdatum: ' + pp.startdatum + '</p>' +
            '<p>' + 'Enddatum: ' + pp.enddatum + '</p>' +
            '<button class="kontoloeschen" onclick="pploeschen('+pp.pp_id+')"' + ">" + 'Parkplatz löschen' + '</button>' +
            '</div>';

        document.getElementById("liste-pp").appendChild(ppContainer);

    });
}



function loescheKonto() {
    fetch("https://530624-7.web.fhgr.ch/php/loeschen.php")

        .then((response => {
            console.log("User wurde gelöscht")

        }))
}

// function pploeschen(pp_id) {

//     let formData = new FormData();
//     formData.append('pp_id', pp_id);

//     fetch("https://530624-7.web.fhgr.ch/php/loeschenPP.php", {
        
//         body:formData,
//         method: "POST",
//     })


//         .then((response => {
//             console.log("PP wurde gelöscht")
//             document.getElementById(pp_id).remove()
//         }))
// }
