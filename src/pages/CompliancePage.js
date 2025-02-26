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
import "./CompliancePage.css";

const CompliancePage = () => {
  return (
    <div className="compliance-container">
      <h1>Company Compliance Documents</h1>
      <p>Below are our official compliance documents for verification purposes.</p>
      
      <div className="document-grid">
        <div className="document-item">
          <img src="/images/certificate1.jpg" alt="Company Certificate" />
          <p>Company Registration Certificate</p>
        </div>
        <div className="document-item">
          <img src="/images/certificate2.jpg" alt="Tax Clearance" />
          <p>Tax Clearance Certificate</p>
        </div>
        <div className="document-item">
          <a href="/docs/compliance.pdf" target="_blank" rel="noopener noreferrer">
            View Full Compliance Document (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;