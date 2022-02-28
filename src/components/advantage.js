import { Container, Row, Col, Card} from "react-bootstrap"

//images
import note from '../images/note.jpg'
import lamp from '../images/lamp.jpg'
import earth from '../images/earth.jpg'
import consultant from '../images/consultant.jpg'


const Advantage = () => {

    const advantage = [
        {
            title:'حرفه ای شو',
            src: earth
        },
        {
            title:'مهارت خود را بالا ببر',
            src: lamp
        },
        {
            title:'صرفه جویی در زمان',
            src: consultant
        },
        {
            title:'خود را بیازما',
            src: note
        }
    ]


    return(
        <Container fluid className="advantage-section">
            <Container>
                <Row className="text-justify">
                <Col xs={12}><h3 className="colleague-title">چرا آیلتس ایز؟</h3></Col>
                <Col xs={12}><h5 className="underline colleague-subtitle">چرا باید آیلتس ایز را انتخاب کنم؟</h5></Col>
                    {advantage.map((item, index) => (
                        <Col
                        xs={12} sm={6} lg={3}
                        className="text-center mt-4 p-0"
                        key={index}
                        >
                            <AdvantageCard
                            title={item.title}
                            src={item.src}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    )
}

const AdvantageCard = (props) => {
    return(
        <>
            <Card.Img src={props.src} className="advantage-img"/>
            <Card.Body className="advantage-card">
            <h5 className="text-dark pb-3">{props.title}</h5>
            <p className='text-muted'>
                چاپگرها و متون بلکه روزنامه و مجله در 
                ستون و سطر آنجنان که لازم است و برای 
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می 
                باشد.
            </p>
            </Card.Body>
        </>
    )
}

export default Advantage
