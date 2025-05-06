import React from 'react'
import { MdChevronRight } from "react-icons/md";
import { useRouter } from 'next/router';

export default function Main() {
    const router = useRouter()
    return (
        <div>
            <div className='container-fluid mainBg text-center'>
                <div className='container py-5'>
                    <h3>About Me</h3>
                    <p>
                        Bringing over 5 years of experience in the realms of architecture and interior design.
                    </p>
                    <p>
                        I specialize in a diverse array of projects ranging from residential to corporate spaces, restaurants, and apartment buildings. Proficient in industry-standard software including AutoCAD, SketchUp, V-Ray, Corona, Lumion, Photoshop, Filmora, and Microsoft PowerPoint, my commitment lies in translating client visions into tangible, aesthetically captivating realities.
                    </p>
                    <p>
                        Explore my portfolio to witness the seamless fusion of innovation, functionality, and meticulous craftsmanship in architectural and interior design.
                    </p>
                    <button className='headerContact mb-5' onClick={()=> router.push('/contact-us')} style={{ backgroundColor: 'black', color: 'white' }}>Contact Now <MdChevronRight /></button>

                    <img src="https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Homepage/slider.jpg" className='mb-4' />
                </div>
            </div>
        </div>
    )
}
