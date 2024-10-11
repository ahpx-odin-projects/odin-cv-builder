import Card from "../Universal/Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Experience from "./Experience"


export default function Preview() {
    return (<Card style={{
        // height: '90vh',
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
        <hr/>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <h3>Education</h3>
            <Experience startTime='2023/3' endTime='2024/3' title='Oxford University' subtitle='Bachelor Degree of Sociology'/>
            <Experience startTime='2023/3' endTime='2024/3' title='Oxford University' subtitle='Master Degree of Sociology'/>
            <h3>Experience</h3>
            <Experience startTime='2021/6' endTime='2022/8' title='Intern' subtitle='Tech Company' description='Worked on developing and maintaining web applications.'/>
            <Experience startTime='2020/5' endTime='2021/5' title='Research Assistant' subtitle='University Lab' description='Assisted in research projects and data analysis.'/>
            <Experience startTime='2019/7' endTime='2020/4' title='Volunteer' subtitle='Non-Profit Organization' description='Organized community events and managed social media accounts.'/>
        </div>
      </Card>
    )
}