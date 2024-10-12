import Card from "../Universal/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Experience from "./Experience";

export default function Preview({
  info,
  education = [
    <Experience
      startTime="2023/3"
      endTime="2024/3"
      title="Oxford University"
      subtitle="Bachelor Degree of Sociology"
      key="default1"
    />,
    <Experience
      startTime="2023/3"
      endTime="2024/3"
      title="Oxford University"
      subtitle="Master Degree of Sociology"
      key="default2"
    />,
  ],
  experience = [
    <Experience
      startTime="2021/6"
      endTime="2022/8"
      title="Intern"
      subtitle="Tech Company"
      description="Worked on developing and maintaining web applications."
      key="default1"
    />,
  ],
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
