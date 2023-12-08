<?php

require('config.php');

$email = $_POST["email"];
$password = $_POST["password"];

$sql = "SELECT * FROM user WHERE email = '$email'";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $anzahlResultate = count($array);

    if ($anzahlResultate == 1) {

        $dbPassword = $array[0]['password'];
        $userID = $array[0]['user_id'];
        $email = $array[0]['email'];
        $timestamp = time();

        pruefepassword($password, $dbPassword, $userID);
        createSession($userID, $timestamp, $email);

        echo json_encode(['success' => true, 'nachricht' => 'Login erfolgreich.']);

    } else {

        echo json_encode(['success' => false, 'nachricht' => 'Kein Konto unter dieser E-Mail!']);

        // echo '{
        //     "success": false,
        //     "nachricht": "Kein Konto unter dieser E-Mail!"
        // }';
        
    }
    
} else {
    
    echo json_encode(['success' => false, 'nachricht' => 'Ups! Da ist etwas schiefgelaufen.']);

    // echo '{
    //     "success": false,
    //     "nachricht": "Ups! Da ist etwas schiefgelaufen."
    // }';
    
}

function pruefepassword($password, $dbPassword, $userID)
{

    if (password_verify($password, $dbPassword)) {


    } else {
        echo json_encode(['success' => false,'nachricht' => 'Passwort ist falsch!']);
       
        exit();

    }
}


// create user session
function createSession($userID, $timestamp, $email) {
    session_start();
    $_SESSION['userID'] = $userID;
    $_SESSION['email'] = $email;
    $_SESSION['timestamp'] = $timestamp;
}



//session_start();
//session_unset();
//session_delete();
//1header('location: index.html')