import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Setting workerSrc for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer({ file, showFirstPageOnly }) {
  const [totalPages, setTotalPages] = useState(null);
  const [visiblePages, setVisiblePages] = useState(showFirstPageOnly ? 1 : 5); // Set to 1 if showFirstPageOnly is true
  const pagesPerLoad = 5; // Number of pages to load at a time
  const isClient = typeof window !== "undefined"; // Check if running in the browser

  // Update total pages when the document loads
  const onDocumentLoadSuccess = ({ numPages }) => {
    setTotalPages(numPages);
  };

  // Function to load more pages when reaching the bottom
  const handleScroll = () => {
    if (isClient && !showFirstPageOnly) { // Only handle scroll if showFirstPageOnly is false
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (bottom && visiblePages < totalPages) {
        setVisiblePages((prevVisiblePages) => Math.min(prevVisiblePages + pagesPerLoad, totalPages));
      }
    }
  };

  useEffect(() => {
    if (isClient && !showFirstPageOnly) { // Only add scroll event listener if showFirstPageOnly is false
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [visiblePages, totalPages, isClient, showFirstPageOnly]);

  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={{ width: "100%" }}>
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(visiblePages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={isClient ? window.innerWidth : 800} // Default width for server-side rendering
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
