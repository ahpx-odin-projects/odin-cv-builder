import { useState } from "react";

import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import TabControl from "./TabControl";

export default function Sidebar(){
    const [index, setIndex] = useState(0)
    const handleIndexChanged = (i) => {
        setIndex(i)
    }

    return (
        <>
            <div>
                <TabControl indexChanged={handleIndexChanged}></TabControl>
                <div hidden={index != 0}>
                    <PersonalInfo></PersonalInfo>
                </div>
                <div hidden={index != 1}>
                    <Education></Education>
                </div>
                <div hidden={index != 2}>
                    <Experience></Experience>
                </div>
            </div>
        </>
    )
}