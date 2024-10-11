import Card from "../Universal/Card";

export default function TabControl({indexChanged=null}) {
    const handleButtonClick = (i) => {
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
            <button onClick={handleButtonClick(0)}>Personal info</button>
            <button onClick={handleButtonClick(1)}>Education</button>
            <button onClick={handleButtonClick(2)}>Work experience</button>
        </Card>
    </>)
}