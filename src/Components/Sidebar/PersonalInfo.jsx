import Card from '../Universal/Card';
import TextBox from '../Universal/TextBox';
import { useState } from 'react';

export default function PersonalInfo({ onInfoChange }) {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    return (
        <Card>
            <h2 style={{ margin: 0 }}>Personal info</h2>
            <p>Basic info, like your name, age, and email</p>
            <TextBox value={data.name} onChange={(o) => setData({ ...data, name: o.target.value })} title='Full name'></TextBox>
            <TextBox value={data.email} onChange={(o) => setData({ ...data, email: o.target.value })} title='Email'></TextBox>
            <TextBox value={data.phone} onChange={(o) => setData({ ...data, phone: o.target.value })} title='Phone'></TextBox>
            <button onClick={() => {
                onInfoChange(data)
            }}>Update</button>
        </Card>
    )
}