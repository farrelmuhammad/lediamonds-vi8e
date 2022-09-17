import React from "react";
import Debit from '../assets/images/debit-card.png';
import Logo from '../assets/images/logo-footer.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container text-white">
          <div class="row">
            <div class="col">
              <div className="text-footer text-start p-4">
                <img src={Logo} className="mb-4" alt="" />
                <p className="p-0 mb-4">With Le Diamonds, we hope to empower and inspire women of all ages, giving them the courage and confidence to power through each day with their choice of elegant and charming contemporary jewellery.</p>
                <img src={Debit} alt="" />
              </div>
            </div>
            <div class="col me-5">
              <div className="row">
                <div class="col">
                  <div className="text-footer-list">
                    <h5>asdasdas</h5>
                    <ul>
                      <li>asdasd</li>
                      <li>asdasd</li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div className="text-footer-list">
                    <h5>asdasdas</h5>
                    <ul>
                      <li>asdasd</li>
                      <li>asdasd</li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div className="text-footer-list">
                    <h5>asdasdas</h5>
                    <ul>
                      <li>asdasd</li>
                      <li>asdasd</li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div className="text-footer-list">
                    <h5>asdasdas</h5>
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
