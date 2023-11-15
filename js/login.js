console.log("Hello Login");

function login(){

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    console.log(mail + password);


    let formData = new FormData();
    formData.append('email', mail);
    formData.append('password', password);

    fetch("https://530624-3.web.fhgr.ch/php/login.php",
        {
            body: formData,
            method: "post",
        })

        .then((response) => {

            return response.json();

        })
        .then((data) => {

            console.log(data);
            let nachricht = document.querySelector("#nachricht");
            nachricht.textContent = data.message

            if (data.success === false) {

                nachricht.style.color = "red";

            } else {

                nachricht.style.color = "green";
                setTimeout(()=>{
                    window.location.href = "https://530624-3.web.fhgr.ch/index.html";
                }, 800);

            }

        })

        window.onkeydown = function( event ) {
            if ( event.keyCode == 27 ) {
                console.log( 'escape pressed' );
            }
        };
    }