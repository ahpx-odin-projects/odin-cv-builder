import TextBox from "../../Universal/TextBox"

export default function EducationEdit() {
    return (<>
        <TextBox title="Institution" />
        <TextBox title="Title" />
        <TextBox title="Start" type="date" />
        <TextBox title="End" type="date" />
    </>)
}