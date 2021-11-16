import React from "react";
import "./styles/Footer.css"

const Footer = () => {
  return (

    <div class="footer-clean">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Hosting</a></li>
              </ul>
            </div>
            <div class="col-sm">
              <h3>About</h3>
              <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Legacy</a></li>
              </ul>
            </div>
            <div className="col-sm">
              <h3>Careers</h3>
              <ul>
                <li><a href="#">Job openings</a></li>
                <li><a href="#">Employee success</a></li>
                <li><a href="#">Benefits</a></li>
              </ul>
            </div>
            <div class="col-lg-3 item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
              <p class="copyright">The Socialife Group © 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default Footer;
