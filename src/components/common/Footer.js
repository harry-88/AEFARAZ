import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { useRouter } from 'next/router';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareYoutube } from "react-icons/fa6";

export default function Footer() {
    const router = useRouter()
    return ( 
        <div>
            <footer id="footer" >
                <div className="footer-top">
                    <div className="container">
                        <div className="row pb-5 ">
                            <div className="col-lg-7 col-md-6 col-sm-12 footer-contact">
                                {/* <img src='/images/footerLogo.png' style={{ width: '120px' }} /> */}
                                <h3 style={{fontSize:'20px'}}>
                                    Muhammad Faraz
                                </h3>
                                <div className='mt-4'>
                                    {/* <p className=''>12390 W County 550 Rd S Daleville, Indiana(IN), 47334</p> */}
                                    <p> +92 305 4339254 </p>
                                    <p>farazjamil12@gmail.com</p>
                                    {/* <p>farazjamil12@gmail.com</p> */}
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6 footer-links">

                                {/* <ul>
                                    <li>Home</li>
                                    <li>Services</li>
                                    <li>portfolio</li>
                                    <li>Contact Us</li>
                                </ul> */}
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="socialIcons">
                                    {/* <p>Social media</p>
                                    <a href="https://www.facebook.com/MetaFactorialDesigns/" target='_blank'><FaFacebookSquare /></a>
                                    <a href="https://www.instagram.com/meta_factorial_designs/" target='_blank'><FaInstagram /></a>
                                    <a href="https://www.linkedin.com/in/muhammad-faraz-b9ba4b1b0/" target='_blank'><IoLogoLinkedin /></a> */}
                                    {/* <a href="https://www.youtube.com/" target='_blank'><FaSquareYoutube /></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
