import { Container, Row, Col } from "react-bootstrap";

//images
import media from '../images/media.jpg'
import consult from '../images/consult.jpg'
import eye from '../images/eye.jpg'
import html from '../images/html.jpg'
import travel from '../images/travel.jpg'

const Colleagues = () => {

    const colleague_images = [media, consult, eye, html, travel, consult, eye]


    return(
        <Container fluid className="colleague-section">
            <Container>
                <Row className="text-justify">
                <Col xs={12} className="colleague-title"><h3>همکاران ما</h3></Col>
                <Col xs={12}><h5 className="underline colleague-subtitle">بهترین کادر آموزشی برای فرزندان شما</h5></Col>
                <Col xs={12}>
                <Row className="text-center">
                {colleague_images.map((item, index) => (
                    <Col
                    className="mt-4"
                    key={index}
                    >
                        <img src={item} width={120} className="colleague-img col"/>
                    </Col>
                ))}
                </Row>
                </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Colleagues;