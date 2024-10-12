import { useState } from "react";
import TabControl from "./TabControl";
import PersonalInfo from "./PersonalInfo";
import Edit from "./Edit/Edit";

export default function Sidebar({onInfoChange}) {
  const [index, setIndex] = useState(0);
  const handleIndexChanged = (i) => {
    setIndex(i);
  };

  return (
    <>
      <div>
        <TabControl indexChanged={handleIndexChanged}></TabControl>
        <div hidden={index != 0}>
          <PersonalInfo onInfoChange={onInfoChange}></PersonalInfo>
        </div>
        <div hidden={index != 1}>
          <Edit title='Education' subtitle='Add your educational background.'></Edit>
        </div>
        <div hidden={index != 2}>
          <Edit title='Experience' subtitle='Add your work experience.'></Edit>
        </div>
      </div>
    </>
  );
}
