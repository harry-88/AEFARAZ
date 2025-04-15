import Footer from "@/components/common/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  useEffect(()=>{
    const generateFaviconWithText = (text) => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;

      const context = canvas.getContext('2d');

      // Draw a circle for the background
      const radius = canvas.width / 2;
      context.beginPath();
      context.arc(radius, radius, radius, 0, 2 * Math.PI);
      context.fillStyle = '#B2535B'; // Background color
      context.fill();

      // Set text properties
      context.font = 'bold 30px Arial';
      context.fillStyle = 'white'; // Text color
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      // Add text inside the circle
      context.fillText(text, radius, radius);

      // Convert canvas to favicon
      const faviconURL = canvas.toDataURL('image/png');
      const faviconLink = document.getElementById('dynamic-favicon');

      // Update or create the favicon link element
      if (faviconLink) {
        faviconLink.href = faviconURL;
      } else {
        const newFaviconLink = document.createElement('link');
        newFaviconLink.id = 'dynamic-favicon';
        newFaviconLink.rel = 'icon';
        newFaviconLink.href = faviconURL;
        document.head.appendChild(newFaviconLink);
      }
    };

   
    document.title = `Aefaraz`;

    generateFaviconWithText('MF');
  },[])
  return <div>

    <Navbar />
     <Component {...pageProps} />

     <Footer />
  </div>
}
