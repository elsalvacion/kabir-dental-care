import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTooth } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerOverlay py-24 px-16 text-white">
        {/* left */}
        <div className="w-80">
          <Link to="/" className="flex items-center mb-9">
            <div className="p-2 rounded-full bg-white hover:bg-gray-100">
              <FaTooth className="text-pink-500" fontSize={24} />
            </div>
            <h2 className="ml-2 text-2xl font-semibold text-white hover:text-gray-200 text-center">
              Kabir's Dental Care
            </h2>
          </Link>
          <p className="mb-10">
            We always advice our clients to perform good oral hygiene. So that
            they can always say ahhh. Think mouth and your body will thank you.
          </p>
          <div className="flex items-center">
            <GrMail fontSize={24} />
            <p className="ml-3 text-lg">help@kdc.com</p>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 flex flex-wrap ml-3">
          <div className="flex-1 mx-2">
            <h2 className="ml-2 text-xl font-semibold text-white hover:text-gray-200 mb-7">
              ADVICES
            </h2>
            <ul>
              <li>Filling</li>
              <li>RCT: +</li>
              <li>Pulpectomy</li>
              <li>Operculectomy</li>
              <li>Grinding Teeth</li>
              <li>Cap / Bridge / Denture</li>
              <li>Extraction</li>
              <li>Scaling</li>
              <li>X-ray</li>
              <li>H/M</li>
              <li>Diabetes, Bleeding Disorder</li>
              <li>
                B.P, Jaundice, Asthma, Cardiac Problem, H/Drug Allergy,
                Pregnancy, Kidney & Liver
              </li>
            </ul>
          </div>
          <div className="flex-1 mx-2">
            <h2 className="ml-2 text-xl font-semibold text-white hover:text-gray-200 mb-7">
              C/C
            </h2>
            <ul className="mb-5">
              <li>Pain For</li>
              <li>Bleeding from Gum</li>
              <li>Ulceration Gum, Tongue</li>
              <li>Cavity +</li>
              <li>Swelling +</li>
            </ul>
            <h2 className="ml-2 text-xl font-semibold text-white hover:text-gray-200 mb-7">
              O/E
            </h2>
            <ul>
              <li>P.Pain +</li>
              <li>Abrasion</li>
              <li>Misplaced Teeth</li>
              <li>Impacted</li>
              <li>Missing</li>
              <li>Erupting</li>
            </ul>
          </div>
          <div className="flex-1 mx-2">
            <h2 className="ml-2 text-xl font-semibold text-white hover:text-gray-200 mb-7">
              D/X
            </h2>
            <ul className="mb-5">
              <li>Pericoronitis</li>
              <li>Buccal / Palata Lingual abscess</li>
              <li>Mobile</li>
              <li>Pulpitis</li>
              <li>Calculus</li>
              <li>Gingivities</li>
              <li>BDR / BDC</li>
            </ul>
            <h2 className="ml-2 text-xl font-semibold text-white hover:text-gray-200 mb-7">
              Social Links
            </h2>
            <div className="flex">
              <a href="#!" className="mx-2">
                <FaFacebook fontSize={24} />
              </a>
              <a href="#!" className="mx-2">
                <FaInstagram fontSize={24} />
              </a>
              <a href="#!" className="mx-2">
                <FaLinkedin fontSize={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
