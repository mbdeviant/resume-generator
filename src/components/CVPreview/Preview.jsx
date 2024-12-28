import { useState } from "react";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import PersonalPreview from "./PersonalPreview";
import PDFPreview from "../PDFView/PdfView";
import { pdf } from "@react-pdf/renderer";
import "./preview.css";

export default function Preview({
  personalInfo,
  educationInfo,
  experienceInfo,
}) {
  const [pdfData, setPDFData] = useState(null);

  const handleDownloadPDF = async () => {
    const data = {
      personalInfoPDF: personalInfo,
      educationInfoPDF: educationInfo,
      experienceInfoPDF: experienceInfo,
    };
    setPDFData(data);

    if (
      pdfData &&
      data.personalInfoPDF &&
      data.educationInfoPDF &&
      data.experienceInfoPDF
    ) {
      // Generate the PDF blob
      const blob = await pdf(
        <PDFPreview
          personalInfo={data.personalInfoPDF}
          educationInfo={data.educationInfoPDF}
          experienceInfo={data.experienceInfoPDF}
        />
      ).toBlob();

      // Create a download link and trigger it
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "cv.pdf";
      link.click();
      URL.revokeObjectURL(url); // Clean up
    } else {
      setShowPDF(false);
    }
  };
  return (
    <div>
      <section className="preview" aria-label="CV Preview">
        <PersonalPreview personalInfo={personalInfo} />
        <EducationPreview educationInfo={educationInfo} />
        <ExperiencePreview experienceInfo={experienceInfo} />
      </section>
      <button onClick={handleDownloadPDF}>Save as PDF</button>
    </div>
  );
}
