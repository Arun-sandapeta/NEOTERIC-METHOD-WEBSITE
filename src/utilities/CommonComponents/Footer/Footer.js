import React from 'react';
import './Footer.css';
import Facebook from './assets/Facebook.svg';
import Instagram from './assets/instgram.svg';
import Twitter from './assets/Twitter.svg';
import LinkedIn from './assets/Linkdin.svg';
import Location from './assets/Location.svg';
import Mail from './assets/Mail.svg';
import Phone from './assets/Phone.svg';

const Footer = () => {
  return (
    <div>
      <footer className="Method__footer_footer">
        <div className="Method__footer_container">
          <div className="Method__footer_footer-left">
            <h3 className="Method__footer_font-color">Information</h3>
            <p className="Method__footer_para">
              "Neoteric Method: Your premier Java Full Stack coaching center. We
              offer comprehensive training blending innovation and practical
              skills, empowering learners for success in dynamic tech landscapes."
            </p>
            <div className="Method__footer_socialmedia_icon">
              <div className="Method__footer_icon">
                <img src={Facebook} alt="Facebook" />
              </div>
              <div className="Method__footer_icon">
                <img src={Instagram} alt="Instagram" />
              </div>
              <div className="Method__footer_icon">
                <img src={Twitter} alt="Twitter" />
              </div>
              <div className="Method__footer_icon">
                <img src={LinkedIn} alt="LinkedIn" />
              </div>
            </div>
          </div>
          <div className="Method__footer_nav-middle">
            <div className="Method__footer_footer-middle">
              <div className="Method__footer_footer-nav">
                <h3 className="Method__footer_font-color">Navigation</h3>
                <div>
                  <a className="Method__footer_serviceLinks-hover" href="/services">Homepage</a>
                </div>
                <div>
                  <a className="Method__footer_serviceLinks-hover" href="/industries">About Us</a>
                </div>
                <div>
                  <a className="Method__footer_serviceLinks-hover" href="/careers">Services</a>
                </div>
                <div>
                  <a className="Method__footer_serviceLinks-hover" href="/about">Project</a>
                </div>
              </div>
            </div>

            <div className="Method__footer_footer-right">
              <div className="Method__footer_content">
                <h3 className="Method__footer_font-color">Contact Us</h3>
              </div>
              <div className="Method__footer_icons">
                <img
                  className="Method__footer_image"
                  src={Location}
                  alt="location"
                />
                <p>
                  # 55, VStarex IT HUB, Hitech City, Hyderabad, Telangana, India -
                  500072
                </p>
              </div>
              <div className="Method__footer_icons">
                <img className="Method__footer_image" src={Mail} alt="mail" />
                <p className="Method__footer_gmail">Neotericmethod@gmail.com</p>
              </div>
              <div className="Method__footer_icons">
                <img className="Method__footer_image" src={Phone} alt="phone" />
                <p>7702874624</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Method__footer_line">
          <hr />
        </div>
        <div className="Method__footer_lastfooter">
          <div className="Method__footer_copyright">
            <h3 className='font'>All right Reserved - Neoteric Method</h3>
          </div>
          <div className="Method__footer_lastfooter">
            <h3 className='font'>Disclaimer</h3>
            <h3 className='font'>Privacy Policy</h3>
            <h3 className='font'>Term Of Use</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
