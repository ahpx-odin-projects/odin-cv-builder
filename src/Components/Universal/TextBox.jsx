export default function TextBox({title, type='text', onChange=null}){
    return <>
        <span style={{
            marginBottom: '5px'
        }}>{title}</span>
        <input onChange={onChange} type={type} style={{
            marginBottom: '10px'
        }}></input>
    </>
}