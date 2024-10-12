import Card from "../Universal/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Experience from "./Experience";

export default function Preview({
  info,
  education,
  experience,
}) {
  return (
    <Card>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>{info.name}</h2>
        <div>
          <span style={{ marginRight: "10px" }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
            {info.email}
          </span>
          <span>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "8px" }} />
            {info.phone}
          </span>
        </div>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>Education</h3>
        {education}
        <h3>Experience</h3>
        {experience}
      </div>
    </Card>
  );
}
