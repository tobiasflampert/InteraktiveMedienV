console.log("Hallo Welt");

loggedIn();

// holePP();

function loggedIn() {

    fetch("https://530624-7.web.fhgr.ch/php/auth.php")

        .then((response) => {

            return response.json();

        })
        .then((data) => { 

            console.log(data);

            if (data.status === "logged in") {

                displayUser();

                document.getElementById("account-button").style.display = "inline-block";
				document.getElementById("logout-button").style.display = "inline-block";

            } else {
				
                document.getElementById("registration-button").style.display = "inline-block";
                document.getElementById("login-button").style.display = "inline-block";
            }})}


function displayUser() {

    fetch("https://530624-7.web.fhgr.ch/php/holeUser.php")

        .then((res) => {

            return res.json();

        })

        .then((data) => {

    // mache etwas
    //console.log(data);

    console.log(data);

    // document.getElementById("konto").style.display = "none";

    let username = document.querySelector("#email");
    username.innerHTML = data[0].email;
    

})

}

function openFormRegistration() {
    document.getElementById("myFormRegistration").style.display = "flex";
  }
  
  function closeFormRegistration() {
    document.getElementById("myFormRegistration").style.display = "none";
  }

  function openFormLogin() {
    document.getElementById("myFormLogin").style.display = "flex";
  }
  
  function closeFormLogin() {
    document.getElementById("myFormLogin").style.display = "none";

  }

// // function holePP() {
//     fetch("https://530624-7.web.fhgr.ch/php/holePP.php",

//     )

//     .then((res) => {
        

//         return res.json();


//     })
//     .then((data) => {

//         console.log("Wir holen den Parkplatz", data);
//         PPAnzeigen(data);
    
//     })
// }


// function PPAnzeigen(data) {

//     data.forEach(pp => {


//         let ppContainer = document.createElement("div");
//         ppContainer.innerHTML =

//             '<div class="pp">' +
//                     '<div class="strasse">' +
//                         '<p>' + pp.strasse + ' , '+ pp.plz + ' ' + pp.ort + '</p>' +
//                     '</div>' +
//                     '<div class="startdatum">' +
//                         '<p>' + 'Verfügbar von: ' +
//                         pp.startdatum + ' bis ' + pp.enddatum + '</p>' + 
//             '</div>';

//         document.getElementById("liste-pp").appendChild(ppContainer);

//     });
// }


// function suchePP(plz, startdatum, enddatum) {
//     let formData = new FormData();
//     formData.append('plz', plz);
//     formData.append('startdatum', startdatum);
//     formData.append('enddatum', enddatum);


//     console.log("anfang von SuchePP");
//     fetch("https://530624-3.web.fhgr.ch/php/suchePP.php",

//     {
//         body: formData,
//         method: "post",
//     }

//     )

//     .then((res) => {

        
//         return res.json();


//     })
//     .then((data) => {

//         console.log("Suchresultat aus Datenbank ", data);
//         PPSuchanzeige(data);
    
//     })
// }


// function PPSuchanzeige(data) {
//     document.getElementById("liste-pp").innerHTML="";
//     data.forEach(pp => {


//         let ppContainer = document.createElement("div");
//         ppContainer.innerHTML =

//         '<div class="pp">' +
//         '<p>' + pp.strasse + '</p>' +
//         '<p>' + pp.plz + " " + pp.ort + '</p>' +
//         '<p>' + 'Startdatum: ' + pp.startdatum + '</p>' +
//         '<p>' + 'Enddatum: ' + pp.enddatum + '</p>' +
//         '</div>';

            
//         document.getElementById("liste-pp").appendChild(ppContainer);

//     });
// }

