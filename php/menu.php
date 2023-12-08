<body class="is-preload">
		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Header -->
				<header id="header">
					<div class="inner">
	
					<!-- Logo -->
					<a href="index.php" class="logo">
						<span class="symbol"><img src="images/logo.svg" alt="" /></span><span class="title">Advertising Media Research</span>
					</a>

					<!-- Nav -->
							<nav>
								<ul>
									<!-- <li><a href="login.html/">Login</a></li> -->
									
									<!-- A button to open account -->
									<li><a class="account-button" style="display: none;" id="account-button" href="konto.php">Konto</a></li>	
									
									<!-- A button to logout -->
									<li><button class="logout-button" id="logout-button" onclick="logout()">Logout</button></li>


									<!-- A button to open the register popup form -->
									<li><button class="registration-button" id="registration-button" onclick="openFormRegistration()">Registrieren</button></li>
										
										<!-- The form -->
										<div class="registration-popup" id="myFormRegistration">
											<form class="registartion-container", id="registration-container">
												<h3>Registrierung</h3>

												<label for="unternehmen"><b>Unternehmen</b></label>
												<input id="unternehmen" type="text" placeholder="Unternehmen" name="unternehmen" required>

												<label for="vorname"><b>Vorname</b></label>
												<input id="vorname" type="text" placeholder="Vorname" name="vorname" required>

												<label for="name"><b>Name</b></label>
												<input id="name" type="text" placeholder="Name" name="name" required>

												<label for="email"><b>E-Mail</b></label>
												<input id="reg-email" type="email" placeholder="E-Mail" name="email" required>

												<label for="password"><b>Passwort</b></label>
												<input id="reg-password" type="password" placeholder="Passwort" name="password" required>

												<p class="nachricht"></p>
										
												<button type="button" class="button" onclick="registrieren()">Registrieren</button>
												<button type="button" class="close-button" onclick="closeFormRegistration()">Abbrechen</button>
											</form>
										</div>

				

									<!-- A button to open the login popup form -->
									<li><button class="login-button" id="login-button" onclick="openFormLogin()">Login</button></li>
					
									<!-- The form -->
									<div class="login-popup" id="myFormLogin">
										<form class="login-container" id="login-container">
											<h3>Login</h3>

											<label for="email"><b>E-Mail</b></label>
											<input id="login-email" type="email" placeholder="E-Mail" name="email" required>

											<label for="password"><b>Passwort</b></label>
											<input id="login-password" type="password" placeholder="Passwort" name="password" required>

											<p class="nachricht"></p>

											<button type="button" class="button" onclick="login()">Anmelden</button>
											<button type="button" class="close-button" onclick="closeFormLogin()">Abbrechen</button>
										</form>
									</div>
									<li><a href="#menu">Menu</a></li>
								</ul>
							</nav>
					</div>
				</header>

				<!-- Menu -->
				<nav id="menu">
					<h2>Menu</h2>
					<ul>
						<li><a href="medienstudien.php">Medienstudien</a></li>
						<li><a href="statistiken.php">Statistiken</a></li>
						<li><a href="services.php">Services</a></li>
						<li><a href="die-amr.php">Die AMR</a></li>
						<!-- <li><a href="elements.html">Elements</a></li> -->
					</ul>
				</nav>