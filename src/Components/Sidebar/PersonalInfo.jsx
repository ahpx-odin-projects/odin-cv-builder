import Card from '../Universal/Card';
import TextBox from '../Universal/TextBox';

export default function PersonalInfo() {
    return (
        <Card>
        <h2 style={{margin: 0}}>Personal info</h2>
        <p>Basic info, like your name, age, and email</p>
        <TextBox title='Full name'></TextBox>
        <TextBox title='Email'></TextBox>
        <TextBox title='Phone'></TextBox>
        <button>Update</button>
    </Card>
    )
}