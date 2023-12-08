
// console.log("hallo");
function registrieren() {
    let unternehmen = document.querySelector("#unternehmen").value;
    let vorname = document.querySelector("#vorname").value;
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#reg-email").value;
    let password = document.querySelector("#reg-password").value;

    if (!unternehmen || !vorname || !name || !email || !password) {
        alert("Bitte füllen Sie alle Felder aus.");
    } else {
        let formData = new FormData();
        formData.append('unternehmen', unternehmen);
        formData.append('vorname', vorname);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);

        fetch("https://530624-7.web.fhgr.ch/php/registrierung.php", {
            body: formData,
            method: "post",
        })
        .then(response => response.json()) // Ändern Sie response.text() zu response.json()
        .then(data => {
            document.querySelector('.nachricht').innerHTML = data.nachricht; // Ändern Sie data zu data.nachricht

            if (data.success === true) { 
                console.log("Der Benutzer ist jetzt angemeldet.");
                setTimeout(()=>{
                    window.location.href = "https://530624-7.web.fhgr.ch/";
                }, 200);
            } else {
                console.error('Die E-Mail ist bereits registriert.'); // Fügen Sie diese Zeile hinzu
            }
        })
        .catch(error => {
            console.error('Es gab einen Fehler bei der Anmeldung:', error);
        });
    }
}

document.getElementById('myFormRegistration').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Verhindert das Standardverhalten der Enter-Taste
        registrieren(); // Stellen Sie sicher, dass die registrieren-Funktion definiert ist
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById("myFormRegistration").style.display = "none";
    } // Stellen Sie sicher, dass die closeFormLogin-Funktion definiert ist
});
