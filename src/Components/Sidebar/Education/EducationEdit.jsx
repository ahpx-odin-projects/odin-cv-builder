import TextBox from "../../Universal/TextBox"
import { useState } from "react"

export default function EducationEdit({edited}) {
    const [data, setData] = useState({
        institution: "",
        title: "",
        start: "",
        end: ""
    })

    const handleEdit = (o, kind) => {
        const {value} = o.target
        const newData = {...data }
        newData[kind] = value
        setData(newData)
        edited(newData)
    }
    return (<>
        <TextBox onChange={(o) => handleEdit(o, 'institution')} title="Institution" />
        <TextBox onChange={(o) => handleEdit(o, 'title')} title="Title" />
        <TextBox onChange={(o) => handleEdit(o, 'start')} title="Start" type="date" />
        <TextBox onChange={(o) => handleEdit(o, 'end')} title="End" type="date" />
    </>)
}