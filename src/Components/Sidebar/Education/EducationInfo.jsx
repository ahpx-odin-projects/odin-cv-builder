import Card from "../../Universal/Card";
import TextBox from "../../Universal/TextBox";
import EducationEntry from "./EducationEntry";
import EducationEdit from "./EducationEdit";
import "./EducationInfo.css";
import { useState } from "react";

export default function EducationInfo() {
    const [items, setItems] = useState([])
    const [editing, setEditing] = useState(true)
    const [editResult, setEditResult] = useState({
        institution: "",
        title: "",
        start: "",
        end: ""
    })
    
    const handleItemClick = () => {
        setEditing(true)
    }
    const handleAddClick = () => {
        if (!editing) {
            setEditing(true)
        }
        let newItems = [...items]
        newItems.push(<>
            <button onClick={handleItemClick}>{editResult.institution}</button>
        </>)

        setItems(newItems)
        setEditing(false)
    }
    const handleEdit = (r) => {
        setEditResult(r)
        console.log(r)
    }

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
            {editing ? <EducationEdit edited={handleEdit}/>
            : <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {items}
            </div>}
        </div>
        <button onClick={handleAddClick}>Add</button>
        </Card>
    );
}
