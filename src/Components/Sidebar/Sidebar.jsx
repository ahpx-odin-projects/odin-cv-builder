import { useState } from "react";
import TabControl from "./TabControl";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./Education/EducationInfo";
import ExperienceInfo from "./Experience/ExperienceInfo";

export default function Sidebar() {
  const [index, setIndex] = useState(0);
  const handleIndexChanged = (i) => {
    setIndex(i);
  };

  return (
    <>
      <div>
        <TabControl indexChanged={handleIndexChanged}></TabControl>
        <div hidden={index != 0}>
          <PersonalInfo></PersonalInfo>
        </div>
        <div hidden={index != 1}>
          <EducationInfo></EducationInfo>
        </div>
        <div hidden={index != 2}>
          <ExperienceInfo></ExperienceInfo>
        </div>
      </div>
    </>
  );
}
