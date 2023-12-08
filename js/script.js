// console.log("Hallo Welt");



// loggedIn();


// function loggedIn() {

//     fetch("https://530624-7.web.fhgr.ch/php/auth.php")

//         .then((response) => {

//             return response.json();

//         })
//         .then((data) => { 

//             console.log(data);

//             if (data.status === "logged in") {

//                 displayUser();

//                 document.getElementById("account-button").style.display = "inline-block";
// 				document.getElementById("logout-button").style.display = "inline-block";

//             } else {
				
//                 document.getElementById("registration-button").style.display = "inline-block";
//                 document.getElementById("login-button").style.display = "inline-block";
//             }})}


// function displayUser() {

//     fetch("https://530624-7.web.fhgr.ch/php/holeUser.php")

//         .then((res) => {

//             return res.json();

//         })

//         .then((data) => {

//       console.log(data);

//     // document.getElementById("account-button").style.display = "inline-block";

//     // let username = document.querySelector("#email");
//     // username.innerHTML = data[0].email;
    

// })}

// function openFormRegistration() {
//     document.getElementById("myFormRegistration").style.display = "flex";
//   }
  
//   function closeFormRegistration() {
//     document.getElementById("myFormRegistration").style.display = "none";
//   }

//   function openFormLogin() {
//     document.getElementById("myFormLogin").style.display = "flex";
//   }
  
//   function closeFormLogin() {
//     document.getElementById("myFormLogin").style.display = "none";

//   }

// // function holePP() {
// //     fetch("https://530624-7.web.fhgr.ch/php/holePP.php",

// //     )

// //     .then((res) => {
        

// //         return res.json();


// //     })
// //     .then((data) => {

// //         console.log("Wir holen den Parkplatz", data);
// //         PPAnzeigen(data);
    
// //     })
// // // }  


