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
        <h3 className="name" aria-label="Name">
          {personalInfo.name || "John"} {personalInfo.surname || "Doe"}
        </h3>
        <h3 className="title" aria-label="Title ">
          {personalInfo.title || "Firefighter"}
        </h3>
      </div>
      <h3 className="infoIcon" aria-label="Email">
        <FontAwesomeIcon icon={faEnvelope} />
        {personalInfo.email || "johndoe@loremipsum.com"}
      </h3>
      <h3 className="infoIcon" aria-label="Phone Number">
        <FontAwesomeIcon icon={faPhone} />
        {personalInfo.number || "(905) 878-2725"}
      </h3>
      <h3 className="infoIcon" aria-label="Address">
        <FontAwesomeIcon icon={faLocationDot} />
        {personalInfo.address ||
          "	9528 25 Hwy, Halton Hills, ON L9T 2X7, Canada"}
      </h3>
      <h4>Summary</h4>
      <p aria-label="Summary">
        {personalInfo.about ||
          "I've extinguished approximately 547 fires, rescued 23 cats from trees (some of them were surprisingly ungrateful), and survived countless false alarms caused by burnt toast. Skilled in handling high-pressure situations—both figuratively and literally—and working efficiently as part of a team. Passionate about keeping communities safe, responding to emergencies, and making sure every fire hydrant in town feels appreciated."}
      </p>
    </section>
  );
}
