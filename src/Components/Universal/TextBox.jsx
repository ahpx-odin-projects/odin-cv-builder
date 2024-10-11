export default function TextBox({title, type='text'}){
    return <>
        <span style={{
            marginBottom: '5px'
        }}>{title}</span>
        <input type={type} style={{
            marginBottom: '10px'
        }}></input>
    </>
}