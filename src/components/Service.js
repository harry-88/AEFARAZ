import React from "react";
import PdfViewer from "./common/PdfViewer";
import { useRouter } from "next/router";
export default function Service(props) {
  const router = useRouter()
  const data = {
    planning: {
      heading: `"Architectural Planning Services"`,
      description: `Experience meticulous attention to detail and unparalleled expertise with my architectural planning services. Utilizing industry-leading AutoCAD software, we deliver comprehensive 2D plans, precise working drawing sets, and intricate interior detailing. Trust me to bring clarity, precision, and professionalism to every stage of your project, from conception to execution.`,

      img: `https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Before image.png`,
      cardHeading: `Our Planning Procces`,
      pdf: [{
        pdf: '/services/planning/8_MARLA_INTERIOR_BAHRIA_TOWN.pdf',
        url: '/8-marla-interior-bahria-town',
        img: '/services/planning/8_MARLA_INTERIOR_BAHRIA_TOWN.png',
      }, {
        pdf: '/services/planning/FIRST_FLOOR_DESIGN_kashmir_project.pdf',
        url: '/first-floor-design-kashmir',
        img: '/services/planning/FIRST_FLOOR_DESIGN_kashmir_project.png',
      }, {
        pdf: '/services/planning/239-M_1K_COMPLETE_CONSTRUCTION_SET.pdf',
        url:'/239-M-complete-construction-set',
        img: '/services/planning/239-M_1K_COMPLETE_CONSTRUCTION_SET.png',
      }],
      imgs: [
        "https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Steps frame.png",
        "https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Steps frame (1).png",
        "https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Steps frame (2).png",
      ],
    },
    visualization: {
      heading: `"Visualization Services"`,
      description: `Experience the power of visualization with my comprehensive services. Using a suite of industry-standard software including SketchUp, V-Ray, 3ds Max, Corona, Lumion, and Photoshop, we bring your projects to life with stunning realism and detail. From architectural renderings to interior visualizations, trust me to transform your concepts into captivating visual representations that inspire confidence and elevate your vision.`,

      img: `/services/3d visualization/ff right bed (1).jpg`,
      cardHeading: `3D Visual Designs`,
      imgs: [
        // "https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Rectangle 33.png",
        // "https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Rectangle 33 (1).png",
        // "https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Rectangle 33 (2).png",
      ],
    },
    animation: {
      heading: `"Animation Services"`,
      description: `Unlock the potential of dynamic storytelling with my animation services. Leveraging Lumion for immersive 3D animations and Filmora for precise editing, I breathe life into your projects with captivating visual narratives. Whether it's architectural walkthroughs, interior animations, or promotional videos, I combine technical expertise with creative flair to deliver animations that engage, inspire, and leave a lasting impression.`,

      img: ``,
      cardHeading: `Animation Services`,
      // imgs: [
      //   "https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Rectangle.png",
      //   "https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Rectangle 33 (3).png",
      //   "https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Rectangle 33 (4).png",
      //   "https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Rectangle 33 (5).png",
      //   "https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Rectangle 33 (6).png",
      //   "https://faraz-portfolio.s3.ap-south-1.amazonaws.com/images/Rectangle 33 (7).png",
      // ],
    },
  };
  return (
    <div className="servicesBg">
      <div style={{ width: '100%' }} className="container py-5 text-center">
        <div className="row p-lg-5">
          <div className="col-12 p-5">
            <h3 >{data[props.type].heading}</h3>
            <p className="px-lg-5">{data[props.type].description}</p>
            <p className="px-lg-5 mx-lg-5">{data[props.type].descrip}</p>
            {data[props.type].img && <div className="px-lg-5"> <img src={data[props.type].img} style={{ width: "100%" }} /></div>}
          </div>

        </div>
        {/* <div className="content-div">
        <p className="servce-heading">{data[props.type].heading}</p>
        <p className="service-description">{data[props.type].description}</p>
      
      </div> */}

        {/* <div className="row">
        {data[props.type].imgs.map((img, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 cat-body">
            <img className="cat-img" src={img} />
          </div>
        ))}
      </div> */}
      </div>
      <div className="container-fluid p-5" style={{ background: 'white' }}>
        {data[props.type].imgs?.length ? <div className="container text-center">
          <h3>{data[props.type].cardHeading}</h3>
          <div className="row">
            {data[props.type].imgs.map((img, index) => (
              <div className="col-lg-4 col-md-12 p-4">
                <img src={img} style={{ width: '100%' }} />
              </div>
            ))}
          </div>
        </div> : <></>}
      </div>
      <div>
        <div>
          {data[props.type].pdf?.length ? <div className="row  m-4" >
            {data[props.type].pdf.map((pdfUrl, index) => (

              <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                <img onClick={()=>router.push(pdfUrl.url)} className="cat-img" src={pdfUrl.img} />
              </div>
            ))}
          </div> : <></>}

        </div>

      </div>
    </div>
  );
}
