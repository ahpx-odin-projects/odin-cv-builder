import './Card.css'

export default function Card({children, style=null}){
    return <div className="card" style={style}>
        {children}
    </div>
}