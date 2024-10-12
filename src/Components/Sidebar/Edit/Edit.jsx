import Card from "../../Universal/Card";
import EntryEdit from "./EntryEdit";
import "./Edit.css";
import { useState } from "react";

export default function Edit({title, subtitle, itemsChange}) {
    const [items, updateItems] = useState([]);
    const [editing, setEditing] = useState(true);
    const [currentEdit, setCurrentEdit] = useState({
        institution: "",
        title: "",
        start: "",
        end: "",
    });

    return (
        <Card>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "10px",
                }}
            >
                {editing ? (
                    <EntryEdit edited={handleEdit} value={currentEdit} />
                ) : (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        {items.map(item => (
                            <button
                                key={item.institution}
                                className="entry"
                                onClick={() => handleItemClick(item)}
                            >
                                {item.institution}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <button onClick={handleDeleteClick} hidden={!editing}>Delete</button>
                <button onClick={handleAddClick}>{editing ? 'Update' : 'Add'}</button>
            </div>
        </Card>
    );

    function handleAddClick() {
        if (!editing) {
            setEditing(true);
            return;
        }

        if (items.some(i => i.institution === currentEdit.institution)) {
            setEditing(false);
            return;
        }

        if (Object.values(currentEdit).some(v => v === null || v == '')) {
            return
        }

        setItems([...items, { ...currentEdit }]);
        setEditing(false);
    }

    function handleDeleteClick() {
        if (items.length == 0) {
            setEditing(false)
            return
        }
        const newItems = items.filter(item => item.institution !== currentEdit.institution);
        setItems(newItems);

        setEditing(false);
        setCurrentEdit({
            institution: "",
            title: "",
            start: "",
            end: "",
        });
    }

    function handleItemClick(i) {
        setCurrentEdit(i);
        setEditing(true);
    }

    function handleEdit(r) {
        setCurrentEdit(r);
    }

    function setItems(i) {
        updateItems(i);
        itemsChange(i);
    }
}
