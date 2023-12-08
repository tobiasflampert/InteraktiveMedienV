<!-- Footer -->
<footer id="footer">
    <div class="inner">
        <section>
        <h2>Kontaktiere uns</h2>
            <form id="kontaktformular" method="post" action="/php/send_email.php">
                <div class="fields">
                    <div class="field half">
                    <input type="text" id="anfrage-vorname" name="anfrage-vorname" placeholder="Vorname" required>
                    </div>
                    <div class="field half">
                        <input type="text" id="anfrage-name" name="anfrage-name" placeholder="Name" required>
                    </div>
                    <div class="field">
                        <input type="email" id="anfrage-email" name="anfrage-email" placeholder="E-Mail" required>
                    </div>
                    <div class="field">
                        <textarea id="anfrage-message" name="anfrage-message" placeholder="Nachricht" required></textarea><br><br>
                    </div>
                </div>
                <ul class="actions">
                    <li><input type="submit" value="Absenden" class="primary" /></li>
                </ul>
            </form>
        </section>

        <section>
            <h2>Follow</h2>
            <ul class="icons">
                <li><a href="#" class="icon brands style2 fa-facebook-f"><span class="label">Facebook</span></a></li>
                <li><a href="#" class="icon brands style2 fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="#" class="icon solid style2 fa-phone"><span class="label">Phone</span></a></li>
                <!-- <li><a href="mailto:tobias.f.lampert@outlook.com" class="icon solid style2 fa-envelope"><span class="label">Email</span></a></li> -->
            </ul>
        </section>
    <ul class="copyright">
        <li>&copy; AMR Liechtenstein. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a> und <a href="http://tobiasflampert.li">Tobias F. Lampert</a></li>
    </ul>
    </div>
</footer>
        <!-- Scripts -->
        <script src="js/main.js" defer></script>
        <script src="js/auth.js" defer></script>
        <script src="js/jquery.min.js"></script>
        <script src="js/browser.min.js"></script>
        <script src="js/breakpoints.min.js"></script>
        <script src="js/util.js"></script>
        <script src="js/script.js"></script>
        <script src="js/registrierung.js"></script>
        <script src="js/login.js"></script>
        <script src="js/kontaktformular.js"></script>
        <script src="js/logout.js"></script>
	</body>
</html>