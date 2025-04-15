import React, { useState, useEffect } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from 'next/router'
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      }
      else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };


  return (

    <nav className={`navbar navbar-expand-lg navbar-light position-fixed w-100 `} style={{background:'#F4F4F4',zIndex:'3'}}>
      <div className="container px-2">
        <a className="navbar-brand logoName" onClick={()=> router.push('/')} style={{cursor:"pointer"}}>
          {/* Muhammad Faraz */}
          <img src='/logo.png' style={{width:'170px', height:'88px'}}/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse NavBar" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={()=> router.push('/')}>Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" onClick={()=> router.push('/planning')}>Planning</a></li>
                <li><a className="dropdown-item" onClick={()=> router.push('/visualization')}>3D Visualization</a></li>
                <li><a className="dropdown-item" onClick={()=> router.push('/animation')}>Animation</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" onClick={()=> router.push('/architecture-plans')}>Architecture Plans</a></li>
                {/* <li><a className="dropdown-item" onClick={()=> router.push('/Elevation')}>Architecture Elevation</a></li> */}
                {/* <li><a className="dropdown-item" onClick={()=> router.push('/Commerical')}>Interior APARTMENT Designing</a></li> */}
                <li><a className="dropdown-item" onClick={()=> router.push('/commerical')}>Interior Commercial Designing</a></li>
                <li><a className="dropdown-item" onClick={()=> router.push('/interior')}>Interior Residential Designing</a></li>
              </ul>
            </li>
            <button className='contact mx-lg-3' onClick={()=> router.push('/contact-us')}>Contact Now</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}