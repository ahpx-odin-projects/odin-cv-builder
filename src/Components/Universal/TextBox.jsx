export default function TextBox({ title, type = 'text', onChange = null, value = null }) {
    return <>
        <span style={{
            marginBottom: '5px'
        }}>{title}</span>
        <input onChange={onChange} 
        type={type} 
        value={value}
        style={{
            marginBottom: '10px'
        }}></input>
    </>
}