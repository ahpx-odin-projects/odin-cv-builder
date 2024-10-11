import Card from "../Universal/Card";

export default function TabControl({indexChanged=null}) {
    const handleButton = (i) => {
        if (indexChanged!=null) {
            indexChanged(i)
        }
    }
    

    return (<>
        <Card style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        }}>
            <button onClick={()=>handleButton(0)}>Personal info</button>
            <button onClick={()=>handleButton(1)}>Education</button>
            <button onClick={()=>handleButton(2)}>Work experience</button>
        </Card>
    </>)
}