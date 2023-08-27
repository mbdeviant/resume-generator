import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function PersonalPreview({
  name,
  surname,
  adress,
  phone,
  email,
  about,
}) {
  return (
    <div className="personalPreview">
      <h3>
        {name} {surname}
      </h3>
      <p>
        <FontAwesomeIcon icon={faLocationDot} />
        {adress}
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} />
        {phone}
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        {email}
      </p>
      <p>{about}</p>
    </div>
  );
}
