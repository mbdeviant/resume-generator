import "./preview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function PersonalPreview({ personalInfo }) {
  return (
    <section aria-label="Personal Preview" className="personalPreview">
      <div className="previewHeader">
        <h3 className="name">
          {personalInfo.name || "John"} {personalInfo.surname || "Doe"}
        </h3>
        <h3 className="title">{personalInfo.title || "Firefighter"}</h3>
      </div>
      <p className="infoIcon">
        <FontAwesomeIcon icon={faEnvelope} />
        {personalInfo.email || "johndoe@loremipsum.com"}
      </p>
      <p className="infoIcon">
        <FontAwesomeIcon icon={faPhone} />
        {personalInfo.number || "(905) 878-2725"}
      </p>
      <p className="infoIcon">
        <FontAwesomeIcon icon={faLocationDot} />
        {personalInfo.address ||
          "	9528 25 Hwy, Halton Hills, ON L9T 2X7, Canada"}
      </p>
      <h4>Summary</h4>
      <p>
        {personalInfo.about ||
          "I've extinguished approximately 547 fires, rescued 23 cats from trees (some of them were surprisingly ungrateful), and survived countless false alarms caused by burnt toast. Skilled in handling high-pressure situations—both figuratively and literally—and working efficiently as part of a team. Passionate about keeping communities safe, responding to emergencies, and making sure every fire hydrant in town feels appreciated."}
      </p>
      <p style={{ color: "orange" }}>
        This is just a preview. Only submitted data will appear in the PDF. If
        no data is submitted in a section, that section will not appear in the
        PDF.
      </p>
    </section>
  );
}
