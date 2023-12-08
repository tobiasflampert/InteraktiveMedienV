
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
        .then(response => response.text())
        .then(data => {
            document.querySelector('.nachricht').innerHTML = data;
            return (email, password);
        })
        .then(data => {
            console.log("Der Benutzer ist jetzt angemeldet.");

            setTimeout(()=>{
                window.location.href = "https://530624-7.web.fhgr.ch/";
            }, 200);

        }    )
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
