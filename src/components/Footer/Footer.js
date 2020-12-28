import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
         
          {/* Column2 */}
          <div className="col">
            <ui className="list-unstyled">
              <li>ISchool for recruiting</li>
              <li>Teach on ischool</li>
              <li>Get the app</li>
              <li>About us</li>
              <li>Contact us</li>
                        
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <ui className="list-unstyled">
              <li>Careers</li>
              <li>Blog</li>
              <li>Help and Support</li>
              <li>Affiliate</li>
            </ui>
          </div>
          <div className="col">
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>Privacy policy and cookie policy</li>
              <li>Sitemap</li>
              <li>Featured courses</li>
            </ui>
          </div>
           {/* Column1 */}
           <div className="col">
            <h3 className="list-unstyled">
              <li>One's Employment, </li>
              <li>Our Fame</li>
              <br/>
              <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
              <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
              <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
            </h3>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;