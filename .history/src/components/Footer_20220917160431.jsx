import React from "react";
import Debit from '../assets/images/debit-card.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container text-white">
          <div class="row">
            <div class="col">
              <div className="text-footer text-start">
                <h3>asdasdad</h3>
                <p>asdada</p>
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
