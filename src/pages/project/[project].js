import React, { useState } from 'react';
import { useRouter } from 'next/router';
import projectsData from '@/constant/projectData.json'
import slugify from 'slugify';
import PdfViewer from '@/components/common/PdfViewer';
import Link from 'next/link';

export async function getStaticPaths() {
  return {
    paths: [], // You can add static paths here
    fallback: 'blocking', // <-- This is important for Vercel
  };
}

export async function getStaticProps({ params }) {
  const { project } = params;

  // Simulated data (replace with actual fetch logic)
  const data = {
    title: `Project: ${project}`,
    description: `This is the detail page for ${project}`,
  };

  return {
    props: { data },
  };
}

export default function ProjectDetail() {
  const [file, setFile] = useState("/Muhammad Haris.pdf");
  const router = useRouter();
  const { project } = router.query;

  let projectName = null;
  let projectData = null;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (project) {
    projectName = project.charAt(0).toUpperCase() + project.slice(1); // Capitalize first letter

    // Generate slug
    const slug = slugify(projectName, { lower: true }); // Using slugify directly here

    // Find service data from JSON
    projectData = projectsData.projects.find(item => slugify(item.UrlName, { lower: true }) === slug);

  }

  const MediaDisplay = ({ imgPath, videoPath, pdfPath }) => {
    if (imgPath) {
      return <img src={imgPath} alt="Image" style={{ width: "100%" }} />;
    } else if (videoPath) {
      return (
        <video controls>
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (pdfPath) {
      return (
        <PdfViewer file={file} />
      );
    } else {
      return <p>No media available</p>;
    }
  };



  return (
    <div className="servicesBg">
      <div className="container py-5 text-center">
        <div className="row p-lg-5">
          <div className="col-12 p-5">
            <h3 >{projectData?.heading}</h3>
            {/* <p className="px-lg-5">{projectData?.description}</p> */}
            <div className="px-lg-5">
              <MediaDisplay
                imgPath={projectData?.imgPath}
                videoPath={projectData?.videoPath}
                pdfPath={projectData?.pdfPath}
              />
              {/* <img src={projectData?.img} style={{ width: "100%" }} /> */}
            </div>
          </div>
          {projectData?.routeLink && <Link href={projectData?.routeLink} target="_blank">
            <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: "none", backgroundColor: "black", color: 'white', borderRadius: '10px' }}>
              Go to Project Design 
            </button>
          </Link>}

        </div>
      </div>
      <div className="container-fluid p-5" style={{ background: 'white' }}>
        <div className="container text-center">
          <h3>{projectData?.name}</h3>
          <div className="row">
            {projectData?.images.map((img, index) => (
              <div className="col-lg-4 col-md-12 p-4">
                <img src={img} style={{ width: '100%' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
