<?php   

require('config.php');

$unternehmen = $_POST["unternehmen"];
$vorname = $_POST["vorname"];
$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];

// Überprüfen, ob die E-Mail bereits existiert
$checkEmail = "SELECT * FROM user WHERE email = :email";
$stmt_check = $pdo->prepare($checkEmail);
$stmt_check->execute(array(':email' => $email));

if ($stmt_check->rowCount() > 0) {
    // Die E-Mail existiert bereits in der Datenbank
    echo json_encode(['success' => false, 'nachricht' => 'Die E-Mail ist bereits registriert.']);
    exit;
}

$password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO user (unternehmen, vorname, name, email, password) VALUES (:Unternehmen, :Vorname, :Name, :Email, :Password)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute(array('Unternehmen' => $unternehmen, 'Vorname' => $vorname, 'Name' => $name, 'Email' => $email, 'Password' => $password));

if ($erfolg) {

    echo json_encode(['success' => true, 'nachricht' => 'Registrierung erfolgreich.']);

    $login = "SELECT * FROM user WHERE email = '$email'";

    $stmt_login = $pdo->prepare($login);

    $erfolg_login = $stmt_login->execute();

    $array = $stmt_login->fetchAll();

    $anzahlResultate = count($array);

    if ($anzahlResultate == 1) {

        $userID = $array[0]['user_id'];
        $email = $array[0]['email'];
        $timestamp = time();

        createSession($userID, $timestamp, $email);

    } else {
        //do nothing
    }
    
    
} else {

    print_r($erfolg);
};

function createSession($userID, $timestamp, $email) {
    session_start();
    $_SESSION['userID'] = $userID;
    $_SESSION['email'] = $email;
    $_SESSION['timestamp'] = $timestamp;
}