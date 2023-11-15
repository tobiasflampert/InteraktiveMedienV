<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $vorname = $_POST["anfrage-vorname"];
    $name = $_POST["anfrage-name"];
    $email = $_POST["anfrage-email"];
    $message = $_POST["anfrage-message"];
    
    $to = "tobias.lampert@stud.fhgr.ch"; // Ändern Sie dies auf die gewünschte E-Mail-Adresse
    $subject = "Kontaktanfrage von $name";
    $headers = "From: $email";
    
    mail($to, $subject, $message, $headers);
    
    echo "Ihre Nachricht wurde gesendet. Vielen Dank!";
}
?>
