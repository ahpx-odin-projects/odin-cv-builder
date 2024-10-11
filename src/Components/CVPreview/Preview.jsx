import Card from "../Universal/Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


export default function Preview() {
    return (<Card style={{
        height: '90vh',
      }}>
        <div style={{display: 'flex', alignItems: 'center', flexDirection:'column'}}>
            <h2>Jonathan Joestar</h2>
            <div>
                <span style={{marginRight: '10px'}}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
                    ahpx@yandex.com
                </span>
                <span>
                    <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} />
                    +86 1145141919
                </span>
            </div>
        </div>
        <hr style={{border: '1px solid #ccc', width: '100%'}} />
        <div>
            <h3>Education</h3>
            <div style={{
                display: "grid",
                gridTemplateColumns: '4fr 6fr',
                gap: '16px'
            }}>
                
            </div>
        </div>
      </Card>)
}