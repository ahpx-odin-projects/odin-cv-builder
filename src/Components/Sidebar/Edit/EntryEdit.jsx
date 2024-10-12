import TextBox from "../../Universal/TextBox"
import { useState } from "react"

export default function EducationEdit({edited, value=null}) {
    const [data, setData] = useState(value ?? {
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
        <TextBox value={value.institution} onChange={(o) => handleEdit(o, 'institution')} title="Institution" />
        <TextBox value={value.title} onChange={(o) => handleEdit(o, 'title')} title="Title" />
        <TextBox value={value.start} onChange={(o) => handleEdit(o, 'start')} title="Start" type="month" />
        <TextBox value={value.end} onChange={(o) => handleEdit(o, 'end')} title="End" type="month" />
    </>)
}