import TextBox from "../../Universal/TextBox"
import './EducationEntry.css'

export default function EducationEntry({title}) {
    return (
        <>
            <button className="entry">
                {title}
            </button>
        </>
    )
}