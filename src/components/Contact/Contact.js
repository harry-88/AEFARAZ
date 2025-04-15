import React from "react";
import { MdChevronRight } from "react-icons/md";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter()
    return (
        <div>
            <div className="contactUs">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 py-2">
                            <h4 className="my-4">Contact with Us</h4>
                            <p>Building is better together — we’re looking for founders to create
                                alongside our team. If that’s you, we’d love to talk.</p>
                            <div className="pt-5">
                                <button className='headerContact mt-5 mb-3' onClick={()=> router.push('/contact-us')}>Contact Now <MdChevronRight /></button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img  src="https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/contact.png" style={{width:'100%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
