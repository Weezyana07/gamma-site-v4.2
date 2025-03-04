import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CompliancePage = () => {
  const [documents, setDocuments] = useState([]);
  const [uploadError, setUploadError] = useState("");

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const validFiles = files.filter((file) => allowedTypes.includes(file.type));
    if (validFiles.length !== files.length) {
      setUploadError("Only PDF and Word documents are allowed.");
      return;
    }

    const uploadedDocs = validFiles.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setDocuments((prevDocs) => [...prevDocs, ...uploadedDocs]);
    setUploadError("");
  };

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Compliance Documents - Gamma Spectre Solutions</title>
        <meta
          name="description"
          content="Upload and manage compliance documents securely."
        />
      </Helmet>

      <Header />

      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center">
            Compliance Document Upload
          </h1>
          <p className="text-lg text-gray-700 text-center mt-2">
            Securely upload and manage compliance-related files.
          </p>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <input
              type="file"
              multiple
              accept=".pdf, .doc, .docx"
              onChange={handleFileUpload}
              className="w-full p-3 border rounded-lg"
            />
            {uploadError && <p className="text-red-500 mt-2">{uploadError}</p>}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Uploaded Documents</h2>
            <ul className="mt-4 space-y-2">
              {documents.map((doc, index) => (
                <li
                  key={index}
                  className="p-3 bg-white shadow rounded-lg flex justify-between items-center"
                >
                  <span>{doc.name}</span>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    View
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CompliancePage;
