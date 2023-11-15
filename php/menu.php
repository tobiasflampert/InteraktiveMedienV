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
									<li><button class="account-button" onclick="openFormRegistration()">Registrieren</button></li>
									<li><button onclick="logout()" class="Logout">Logout</button></li>


									<!-- A button to open the register popup form -->
									<li><button class="registration-button" onclick="openFormRegistration()">Registrieren</button></li>
										
										<!-- The form -->
										<div class="registration-popup" id="myFormRegistration">
											<form action="php/registrierung.php" class="form-container">
												<h3>Registrierung</h3>

												<label for="unternehmen"><b>Unternehmen</b></label>
												<input type="text" placeholder="Unternehmen" name="unternehmen" required>

												<label for="vorname"><b>Vorname</b></label>
												<input type="text" placeholder="Vorname" name="vorname" required>

												<label for="name"><b>Name</b></label>
												<input type="text" placeholder="Name" name="name" required>

												<label for="email"><b>E-Mail</b></label>
												<input type="text" placeholder="E-Mail" name="email" required>

												<label for="password"><b>Passwort</b></label>
												<input type="password" placeholder="Passwort" name="password" required>

												<button type="submit" class="button">Regstrieren</button>
												<button type="button" class="close-button" onclick="closeFormRegistration()">Abbrechen</button>
											</form>
										</div>

									<!-- A button to open the login popup form -->
									<li><button class="open-button" onclick="openFormLogin()">Login</button></li>
					
									<!-- The form -->
									<div class="login-popup" id="myFormLogin">
										<form action="php/login.php" class="form-container">
											<h3>Login</h3>

											<label for="email"><b>E-Mail</b></label>
											<input type="text" placeholder="E-Mail" name="email" required>

											<label for="password"><b>Passwort</b></label>
											<input type="password" placeholder="Passwort" name="password" required>

											<button type="submit" class="button">Anmelden</button>
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
						<li><a href="medienstudien">Medienstudien</a></li>
						<li><a href="statistiken">Statistiken</a></li>
						<li><a href="services">Services</a></li>
						<li><a href="ueber-uns.html">Die AMR</a></li>
						<!-- <li><a href="elements.html">Elements</a></li> -->
					</ul>
				</nav>