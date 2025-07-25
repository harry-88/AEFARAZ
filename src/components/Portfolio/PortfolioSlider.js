import React from 'react'
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from 'next/router';

function LeftNavButton(props) {
    const { className, style, onClick } = props
    return (
        <div
            className='slickArrowRight'
            onClick={onClick}
        >
            <FaAngleRight />

        </div>
    );
}

function RightNavButton(props) {
    const { className, style, onClick } = props
    return (
        <div
            className='slickArrow'
            onClick={onClick}
        >
            <FaAngleLeft />
        </div>
    );
}


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <LeftNavButton />,
    prevArrow: <RightNavButton />,
};

export default function PortfolioSlider() {
    const router = useRouter()

    return (
        <div className='container my-2   portfolioMain' >
            <div className="slider-container p-lg-5">
                <Slider {...settings} >
                    <div className='row d-lg-flex portfolioText'>
                        <div className='col-lg-5 col-md-12'>
                            <h1 className='order-lg-2 order-md-2 '>Commercial </h1>
                            <hr/>
                            <h2>Explore My Comprehensive Commercial Portfolio with Detailed Plans</h2>
                            <p>Dive into my extensive collection of commercial design projects that showcase my mastery across various formats. From the dynamic and engaging animations that bring design concepts to life to detailed PDF files outlining architectural specifics, my portfolio is designed to provide a full spectrum view of my capabilities.</p>

                        </div>
                                {/* <div className='col-6'> <img src='/images/Homepage/commercial/APARTMENT HOTEL BUILDING DESIGN DUBAI.jpeg' style={{ width: '100%' }} /></div> */}
                        <div className='col-lg-7 col-md-12'>
                            <div className='row '>
                                <div className='col-6'> <img className='spinner1'  src='/images/Homepage/commercial/APARTMENT HOTEL BUILDING DESIGN DUBAI.jpeg'  style={{ width: '100%' }} /></div>
                                <div className='col-6'> <img className='spinner2'  src='/images/Homepage/commercial/DOORS SHOWROOM INTERIOR DESIGN DUBAI   (3) D.jpg'  style={{ width: '100%' }} /></div>
                                <div className='col-6 gridCardImg'> <img  className='spinner3'   src='/images/Homepage/commercial/IT OFFICE INTERIOR DUBAI (2) D.jpg' style={{ width: '100%' }} /></div>
                                <div className='col-6 py-4'> <img  className='spinner4'  src='/images/Homepage/commercial/UNIVERSITY HEIGHTS ELEVATION DESIGN D.jpg'  style={{ width: '100%' }} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='row d-lg-flex portfolioText'>
                        <div className='col-lg-5 col-md-12'>
                            <h1 className='order-lg-2 order-md-2 '>Residential </h1>
                            <hr/>
                            <h2>Discover Elegance and Innovation in My Residential Portfolio</h2>
                            <p> My portfolio spans a range of styles, offering everything from serene interior spaces to bold exterior designs, brought to life through vivid animations and meticulously prepared PDF files. Experience how my thoughtful designs transform living spaces into personalized sanctuaries that echo the unique tastes and lifestyles of my clients, all while maintaining the highest standards of quality and creativity.</p>

                        </div>
                        <div className='col-lg-7 col-md-12'>
                            <div className='row'>
                                <div className='col-6'> <img className='spinner1'  src='/images/Homepage/residential/1 KANAL CORNER DHA PHASE 6 LAHORE  (1).jpg'  style={{ width: '100%' }} /></div>
                                <div className='col-6'> <img className='spinner2'  src='/images/Homepage/residential/001.jpg'  style={{ width: '100%' }} /></div>
                                <div className='col-6 gridCardImg'> <img  className='spinner3'   src='/images/Homepage/residential/5 MARLA FRONT ELEVATION LAKE CITY LAHORE (2).jpg' style={{ width: '100%' }} /></div>
                                <div className='col-6 py-4'> <img  className='spinner4'  src='/images/Homepage/residential/bedroom interior design, Bismillah housing scheme lahore  (5) D.jpg'  style={{ width: '100%' }} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='row d-lg-flex portfolioText'>
                        <div className='col-lg-5 col-md-12'>
                            <h1 className='order-lg-2 order-md-2 '>Landscape </h1>
                            <hr/>
                            <h2>Immerse Yourself in Nature with My Landscape Design </h2>
                            <p>Explore the art of outdoor living through our landscape design portfolio, which highlights my expertise in creating harmonious environments that blend form, function, and sustainability. Each project, whether a tranquil garden, a robust outdoor entertainment area, or an innovative green space, is showcased through detailed PDF files and engaging animations that capture the essence of my designs.</p>

                        </div>
                        <div className='col-lg-7 col-md-12'>
                            <div className='row'>
                                <div className='col-6'> <img className='spinner1'  src='/images/Homepage/landscape/slide.jpeg'  style={{ width: '100%' }} /></div>
                                <div className='col-6'> <img className='spinner2'  src='/images/Homepage/landscape/slide2.jpeg'  style={{ width: '100%' }} /></div>
                                <div className='col-6 gridCardImg'> <img  className='spinner3'   src='/images/Homepage/landscape/FARMHOUSE DESIGN IN KARACHI (1).jpg' style={{ width: '100%' }} /></div>
                                <div className='col-6 py-4'> <img  className='spinner4'  src='/images/Homepage/landscape/OUTDOOR PARK  LANDSCAPE DESIGN FOR SCHOOL (2).jpg'  style={{ width: '100%' }} /></div>
                            </div>
                        </div>

                    </div>
                </Slider>
                <div className='portfolioFooter '>

                    <button className='' onClick={() => router.push('/architecture-plans')}>See All Projects <FaArrowRightLong /></button>
                </div>
            </div>
        </div>
    )
}
