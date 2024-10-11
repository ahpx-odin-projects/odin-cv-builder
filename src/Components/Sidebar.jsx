import Card from "./Card";
import "./Sidebar.css";

export default function Sidebar(){
    return (
        <>
            <div>
                <Card>
                    <h1>Personal info</h1>
                    <p>Basic info, like your name, age, and email</p>
                    <button>Edit</button>
                </Card>
                <Card>
                    <h1>Education</h1>
                    <p>Schools and any specialized training</p>
                    <button>Edit</button>
                </Card>
                <Card>
                    <h1>Experience</h1>
                    <p>Jobs and any relevant work experience</p>
                    <button>Edit</button>
                </Card>
            </div>
        </>
    )
}