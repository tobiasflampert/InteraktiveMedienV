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
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                let nachricht = document.querySelector(".nachricht");
                nachricht.textContent = data.message;

                if (data.success === false) {
                    console.log("Der Benutzer ist jetzt angemeldet.");

                    setTimeout(() => {
                        window.location.href = "https://530624-7.web.fhgr.ch/";
                    }, 200);
                }
            })
            .catch(error => {
                console.error('Es gab einen Fehler bei der Anmeldung:', error);
            });
    }}

    
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
    

