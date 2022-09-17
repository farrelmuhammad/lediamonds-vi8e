import React from "react";
import Carrousel from '../assets/images/carrousel.png';
import { FaInstagram } from "react-icons/fa";

const GetInspired = () => {
  return (
    <>
      <div className="text-center mt-3 mb-4">
        <h3 className="text-title-blog">Recent Blogs</h3>
        <p>
            Follow us at <div className="icons"><FaInstagram /> le_diamonds</div>
        </p>
      </div>
      <div className="text-center">
        <img src={Carrousel} alt="" />
      </div>
    </>
  );
};

export default GetInspired;
