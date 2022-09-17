import React from "react";
import Debit from '../assets/images/debit-card.png';
import Logo from '../assets/images/logo-footer.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container text-white">
          <div class="row">
            <div class="col p-0 mt-4">
              <div className="text-footer text-start mt-3">
                <img src={Logo} className="mb-4" alt="" />
                <p className=" mb-4">With Le Diamonds, we hope to empower and inspire women of all ages, giving them the courage and confidence to power through each day with their choice of elegant and charming contemporary jewellery.</p>
                <img src={Debit} alt="" />
              </div>
            </div>
            <div class="col mt-5">
              <div className="row">
                <div class="col">
                  <div className="text-footer-list">
                    <h5>COLLECTIONS</h5>
                    <ul>
                      <li>Rings</li>
                      <li>Earrings</li>
                      <li>Necklaces</li>
                      <li>Bracelets</li>
                      <li>Pendants</li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div className="text-footer-list">
                    <h5>INFORMATION</h5>
                    <ul>
                      <li>FAQ</li>
                      <li>Help & Support</li>
                      <li>Terms of Service</li>
                      <li>Privacy Policy</li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div className="text-footer-list">
                    <h5>KNOW MORE</h5>
                    <ul>
                      <li>All about clarities</li>
                      <li>Partnerships</li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div className="text-footer-list">
                    <h5>CONTACT INFO</h5>
                    <ul>
                      <li>(+603) 95441261</li>
                      <li>info@lediamonds.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
