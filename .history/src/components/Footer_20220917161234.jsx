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
                <p className="pe-5 mb-4">With Le Diamonds, we hope to empower and inspire women of all ages, giving them the courage and confidence to power through each day with their choice of elegant and charming contemporary jewellery.</p>
                <img src={Debit} alt="" />
              </div>
            </div>
            <div class="col mt-5 me-5">
              <div className="row">
                <div class="col ms-2">
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
                <div class="col ms-4">
                  <div className="text-footer-list">
                    <h5>INFORMATION</h5>
                    <ul>
                      <li>asdasd</li>
                      <li>asdasd</li>
                    </ul>
                  </div>
                </div>
                <div class="col ms-4">
                  <div className="text-footer-list">
                    <h5>KNOW MORE</h5>
                    <ul>
                      <li>asdasd</li>
                      <li>asdasd</li>
                    </ul>
                  </div>
                </div>
                <div class="col ms-3">
                  <div className="text-footer-list">
                    <h5>CONTACT INFO</h5>
                    <ul>
                      <li>asdasd</li>
                      <li>asdasd</li>
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
