import Card from "../Universal/Card";
import TextBox from "../Universal/TextBox";

export default function Sidebar(){
    return (
        <>
            <div>
                <Card>
                    <h2 style={{margin: 0}}>Personal info</h2>
                    <p>Basic info, like your name, age, and email</p>
                    <TextBox title='wawd'></TextBox>
                    <button>Update</button>
                </Card>
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