import Card from "../Universal/Card";
import PersonalInfo from "./PersonalInfo";
import TabControl from "./TabControl";

export default function Sidebar(){
    return (
        <>
            <div>
                <TabControl></TabControl>
                <PersonalInfo></PersonalInfo>
                <Card>
                    <h2>Education</h2>
                    <p>Schools and any specialized training</p>
                    <button>Update</button>
                </Card>
                <Card>
                    <h2>Experience</h2>
                    <p>Jobs and any relevant work experience</p>
                    <button>Update</button>
                </Card>
            </div>
        </>
    )
}