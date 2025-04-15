import React from "react";
import { MdChevronRight } from "react-icons/md";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter()
  return (
    <div>
      <div className="mainHeader">
        <div className="container ">
          <div className="row py-4">
            <div className="col-lg-6 col-md-12 py-5">
              <h1 className="pt-lg-5">&quot;Crafting Elegant Interiors Where Your Dreams Reside&quot;</h1>
              <p className="py-2">Discover hassle-free delivery, free assembly and <br/> the flexibility to rent, rent-to-own or buy.</p>
              <button className='headerContact mb-5' onClick={()=> router.push('/contact-us')}>Contact Now <MdChevronRight /></button>
            </div>
            <div className="col-lg-6 col-md-12 py-lg-5">
              <div className="headerImg">

                <img src={`https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Homepage/intro.jpg` }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
