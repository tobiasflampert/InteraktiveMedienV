console.log("Login funktion");

function login(){

    let email = document.querySelector("#login-email").value;
    let password = document.querySelector("#login-password").value;

    if (!email || !password) {
        alert("Bitte füllen Sie alle Felder aus.");
    }
    else {

        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        fetch("https://530624-7.web.fhgr.ch/php/login.php", {
            body: formData,
            method: "post",
        })
        .then(response => response.json()) // Ändern Sie response.text() zu response.json()
        .then(data => {
            console.log(data); // Fügen Sie diese Zeile hinzu
            document.querySelector('.nachricht').innerHTML = data.nachricht;

            if (data.success === true) { 
                console.log("Der Benutzer ist jetzt angemeldet.");
                setTimeout(()=>{
                    window.location.href = "https://530624-7.web.fhgr.ch/";
                }, 200);
            } else {
                console.error('Die Anmeldedaten sind ungültig.');
            }
        })
        .catch(error => {
            console.error('Es gab einen Fehler bei der Anmeldung:', error);
        });
     }
 }
        //     .then((response) => {
        //         console.log(response);
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //         let nachricht = document.querySelector(".nachricht");
        //         nachricht.textContent = data.message;

        //         if (data.success === true) {
        //             console.log("Der Benutzer ist jetzt angemeldet.");

        //             setTimeout(() => {
        //                 window.location.href = "https://530624-7.web.fhgr.ch/";
        //             }, 200);
        //         } else {
        //             console.error('Es gab einen Fehler bei der Anmeldung:', data.message);
        //         }
        //     });
        // }
    
    document.getElementById('myFormLogin').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Verhindert das Standardverhalten der Enter-Taste
            login(); // Stellen Sie sicher, dass die registrieren-Funktion definiert ist
        }
    });


    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.getElementById("myFormLogin").style.display = "none";
        } // Stellen Sie sicher, dass die closeFormLogin-Funktion definiert ist
    });
  
