// import React, { useState } from "react";
// import "./Compliance.css";

// const CompliancePage = () => {
//   const [documents, setDocuments] = useState([]);

//   const handleFileUpload = (event) => {
//     const files = Array.from(event.target.files);
//     const uploadedDocs = files.map((file) => ({
//       name: file.name,
//       url: URL.createObjectURL(file),
//     }));
//     setDocuments((prevDocs) => [...prevDocs, ...uploadedDocs]);
//   };

//   return (
//     <div className="compliance-container">
//       <h1>Compliance Documents</h1>
//       <p>Upload and view company certificates & legal documents.</p>

//       <input
//         type="file"
//         multiple
//         onChange={handleFileUpload}
//         className="file-input"
//       />

//       <div className="documents-list">
//         {documents.length === 0 ? (
//           <p>No documents uploaded yet.</p>
//         ) : (
//           documents.map((doc, index) => (
//             <div key={index} className="document-card">
//               <p>{doc.name}</p>
//               <a href={doc.url} target="_blank" rel="noopener noreferrer">
//                 View Document
//               </a>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default CompliancePage;

import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import cacImage from '../assets/images/cac.png';
import taxImage from '../assets/images/tax.png';
import penImage from '../assets/images/pencom.png';
import itfImage from '../assets/images/itf.png';
import bprImage from '../assets/images/bpr.png';
import scumlImage from '../assets/images/scuml.png';
import "./CompliancePage.css";

const CompliancePage = () => {
  return (
    <div>
        <Header />
      <div className="about-header">
        <div className="about-container">
          {/* Text and Image Section */}
          <div className="about-text-and-image">
            <div className="about-container">
              <div className="about-text-section">
                <h1 className="about-title">GAMMA SPECTRE:</h1>
                <h2 className="about-subtitle">
                  Company Compliance Documents
                </h2>
              </div>
            </div>
            <div className="about-img-container">
              <div className="about-image-section">
                <img
                  src="images/gamma.png"
                  alt="Professional person"
                  className="about-person-image"
                />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="about-description-section">
            <p className="about-description">
              At <span className="highlight">GAMMA SPECTRE</span>, we prioritize transparency, integrity, 
              and adherence to industry regulations. Our compliance documents serve as a testament to our 
              commitment to ethical business practices, legal standards, and operational excellence. Below, 
              you’ll find our official certifications and regulatory documents, ensuring confidence in our 
              services and partnerships.
            </p>
          </div>
        </div>
      </div>
    <div className="compliance-container">
      <h1>Company Compliance Documents</h1>
      <p>Below are our official compliance documents for verification purposes.</p>
      
      <div className="document-grid">
        <div className="document-item">
        <img src={cacImage} alt="Company Certificate" />
          <p>Company Registration Certificate</p>
        </div>
        <div className="document-item">
        <img src={taxImage} alt="Tax Clearance Certificate" />
          <p>Tax Clearance Certificate</p>
        </div>
        <div className="document-item">
        <img src={penImage} alt="Pencom Certificate" />
          <p>Pencom Registration Certificate</p>
        </div>
        <div className="document-item">
        <img src={itfImage} alt="ITF Certificate" />
          <p>ITF Registration Certificate</p>
        </div>
        <div className="document-item">
        <img src={bprImage} alt="BPR Certificate" />
          <p>bureau of public procurement Registration Certificate</p>
        </div>
        <div className="document-item">
        <img src={scumlImage} alt="scuml Certificate" />
          <p>scuml Registration Certificate</p>
        </div>
        <div className="document-item">
          <a href="/docs/compliance.pdf" target="_blank" rel="noopener noreferrer" className="doc">
            View Full Compliance Document (PDF)
          </a>
        </div>
      </div>
    </div>
    <Contact />
    <Footer />
    </div>
  );
};

export default CompliancePage;