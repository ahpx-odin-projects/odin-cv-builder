import { useState } from "react";
import TabControl from "./TabControl";
import PersonalInfo from "./PersonalInfo";
import Edit from "./Edit/Edit";

export default function Sidebar({
  onInfoChange,
  onEducationChange,
  onExperienceChange,
}) {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div>
        <TabControl indexChanged={handleIndexChanged}></TabControl>
        <div hidden={index != 0}>
          <PersonalInfo onInfoChange={onInfoChange}></PersonalInfo>
        </div>
        <div hidden={index != 1}>
          <Edit
            itemsChange={handleEducationChange}
            title="Education"
            subtitle="Add your educational background."
          ></Edit>
        </div>
        <div hidden={index != 2}>
          <Edit
            itemsChange={handleExperienceChange}
            title="Experience"
            subtitle="Add your work experience."
          ></Edit>
        </div>
      </div>
    </>
  );

  function handleIndexChanged(i) {
    setIndex(i);
  }

  function handleEducationChange(e) {
    onEducationChange(e);
  }

  function handleExperienceChange(e) {
    onExperienceChange(e);
  }
}
