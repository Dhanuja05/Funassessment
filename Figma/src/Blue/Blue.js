import React from "react";
import "./Blue.css";
import Ecomblue from "./Ecomblue.png";
import { TiSocialFacebook } from "react-icons/ti";
import { BsTwitter } from "react-icons/bs";
import mastercard from './mastercard.png';
import Paypal1 from './Paypal1.jpg';
import visa1 from './visa1.png'
import westernunion from './westernunion.png'
function Blue() {
  return (
    <div>
      <div className="blues mt-5">
        <div className="d-flex justify-content-around my-5">
          <div>
            <img src={Ecomblue} />
            <label className="fw-bold contents">E-Comm</label>
            <div className="content1 ms-3">
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry. Lorem
            <br />
            Ipsum has been the industry's standard <br />
            dummy text ever.Since the 1500s, when <br />
            an unknown printer.
          </div>
          </div>{" "}
          <div className="mt-2 "><label className="contents">Follow Us</label>
          <div className="content1">
            Since the 1500s, when an unknown <br />
            printer took a galley of type and <br />
            scrambled.
            <div>
              {" "}
              <TiSocialFacebook color="#385C8E" size="20" />
              <BsTwitter color="#03A9F4" className="ms-4" size="17" />
            </div>
          </div>
          </div>
          <div className="mt-2"><label className="contents">Contact Us</label>
          <div className="content1">
            E-Comm , 4578 <br />
            Marmora Road, <br />
            Glasgow D04 89GR
          </div>
          </div>
        </div>
        <div className="d-flex justify-content-evenly mt-5">
          <div>
              <label className="mb-4 info1">Infomation</label>
              <div className="contentss">
              <div >About Us</div>
              <div>Infomation</div> 
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div></div>
          </div>
          <div>
              <label className="mb-4 info1">Service</label>
              <div className="contentss">
              <div >About Us</div>
              <div>Infomation</div> 
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div></div>
          </div>
          <div>
              <label className="mb-4 info1">My Account</label>
              <div className="contentss">
              <div >About Us</div>
              <div>Infomation</div> 
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div></div>
          </div>
          <div>
              <label className="mb-4 info1">Our Offers</label>
              <div className="contentss">
              <div>About Us</div>
              <div>Infomation</div> 
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div></div>
          </div>
        </div>
          <center><div className="unders my-5">
              <div className="d-flex justify-content-between">
                  <label className="mt-2 email">© 2018 Ecommerce theme by www.bisenbaev.com</label>
                  <div>
                      <img src={westernunion} width='40' height='40' className="me-1"/>
                      <img src={mastercard} width='40' height='26' className="me-1"/>
                      <img src={Paypal1} width='40' height='26' className="me-1"/>
                      <img src={visa1} width='40' height='26'/></div></div></div></center>
      </div>
    </div>
  );
}

export default Blue;
