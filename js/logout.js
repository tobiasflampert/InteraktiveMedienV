function logout() {

    fetch("https://530624-7.web.fhgr.ch//php/logout.php",{

    })

        .then((response) => {

            return response.text();

        })
        .then(() => { 

                window.location.href = "https://530624-7.web.fhgr.ch";

        })

}
