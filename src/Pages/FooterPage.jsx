
import cup from '../../public/more/logo1.png'
import bg from '../../public/more/13.jpg'
import bg2 from '../../public/more/24.jpg'
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

const FooterPage = () => {
    return (
        <div className="bg-gray-100 mt-20 pt-7 bg-cover md:pt-48 "
            style={{ backgroundImage: `url(${bg})` }}>
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

                {/* Left Section */}
                <div className='w-1/2'>
                    <div className="">
                        <img src={cup} className="w-16 py-2 " />
                        <h2 className="text-3xl font-bold text-yellow-950">
                            Espresso Emporium
                        </h2>
                    </div>
                    <p className="text-gray-700 mt-4 pr-32">
                        Always ready to be your friend. Come & Contact with us to share
                        your memorable moments, to share with your best companion.
                    </p>
                    <div className="flex items-center space-x-4 mt-6 text-3xl">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-yellow-950 "
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-yellow-950 "
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-yellow-950 "
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-yellow-950 "
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>



                    <div className="mt-8 space-y-4 text-gray-700">
                        <h3 className="text-2xl font-semibold text-yellow-950 mt-2">Get in touch:</h3>
                        <p className="flex items-center space-x-2">
                            <FiPhone />
                            <span>+88 01533 333 333</span>
                        </p>
                        <p className="flex items-center space-x-2">
                            <FiMail />
                            <span>info@gmail.com</span>
                        </p>
                        <p className="flex items-center space-x-2">
                            <HiLocationMarker />
                            <span>72, Wall Street, King Road, Dhaka</span>
                        </p>
                    </div>
                </div>


                {/*---------------------Right Section----------------------------------- */}
                <div className='w-1/2'>
                    <h3 className="text-2xl font-bold text-gray-700">Connect with Us</h3>
                    <form className="mt-6 space-y-4">
                        <div>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-950"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-950"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-950"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="px-6 py-1 text-lg font-serif italic border-2 border-yellow-950 text-yellow-950 hover:font-semibold rounded-full"
                        >
                            Send Message
                        </button>

                    </form>
                </div>
            </div>
            <div className='text-center text-white bg-center bg-cover py-4 md:mt-16'
                style={{ backgroundImage: `url(${bg2})` }}
            >
                Copyright Espresso Emporium ! All Rights Reserved
            </div>
        </div>
    );
};

export default FooterPage;
