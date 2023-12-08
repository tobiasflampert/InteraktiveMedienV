<?php
include("php/header.php");
include("php/menu.php");

// Benutzerdaten abrufen
// $sql = "SELECT unternehmen, vorname, name, email, password FROM users WHERE id = ?";
// $stmt = $pdo->prepare($sql);
// $stmt->execute([$_SESSION['user_id']]); // Angenommen, die Benutzer-ID ist in der Session gespeichert
// $user = $stmt->fetch();

// $unternehmen = $user['unternehmen'];
// $vorname = $user['vorname'];
// $name = $user['name'];
// $email = $user['email'];
// $password = $user['password'];
// ?>

<!-- Main -->
<div id="main">
	<div class="inner">
		<h1>Konto</h1>
		<!-- <span class="image main"><img src="images/pic13.jpg" alt="" /></span> -->
		
		<label for="unternehmen"><b>Unternehmen</b></label>
		<input id="unternehmen" type="text" value="<?php echo $unternehmen; ?>" name="unternehmen">
		<br>
		<label for="vorname"><b>Vorname</b></label>
		<input id="vorname" type="text" value="<?php echo $vorname; ?>" name="vorname">
		<br>
		<label for="name"><b>Name</b></label>
		<input id="name" type="text" value="<?php echo $name; ?>" name="name">
		<br>
		<label for="email"><b>E-Mail</b></label>
		<input id="email" type="email" value="<?php echo $email; ?> name="email">
		<br>
		<label for="password"><b>Passwort</b></label>
		<input id="password" type="password" value="<?php echo $password; ?> name="password">

		</div>
</div>
<?php
include("php/footer.php");
?>