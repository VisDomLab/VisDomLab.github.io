import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex flex-col w-full border-box md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex p-4 flex-col border-box md:pl-16">
          <h5 className="text-xl font-bold mb-3">VisDom</h5>
          <p>303 A - VisDom Lab, Therm Building (AB-4),</p>
          <p>IISER Bhopal</p>
          <p>Madhya Pradesh, 462066</p>
          <p>Phone No.: 0755-2692690, 0755-2692689</p>
          <p>Email: visdomdse@gmail.com</p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-4 flex flex-col md:items-end md:pr-20">
          <h5 className="text-xl font-bold mb-3">Follow Us</h5>
          <div className="flex space-x-3 gap-2">
            <a href="https://www.linkedin.com/company/visual-data-computing-group-visdom" className="hover:text-blue-500"> <FaLinkedin size={"30px"}/> </a>
            <a href="https://twitter.com/VisDom_Lab" className="hover:text-blue-300"> <FaTwitter size={"30px"} /></a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
