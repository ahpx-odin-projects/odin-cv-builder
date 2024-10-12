import Card from "../../Universal/Card";
import TextBox from "../../Universal/TextBox";
import EducationEntry from "./EducationEntry";
import EducationEdit from "./EducationEdit";
import "./EducationInfo.css";
import { useState } from "react";

export default function EducationInfo() {
    const [items, setItems] = useState([]);
    
    return (
        <Card>
        <h2>Education</h2>
        <p>Schools and any specialized training.</p>
        <div
            style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "10px",
            }}
        >
            <EducationEdit />
        </div>
        <button>Add</button>
        </Card>
    );
}
