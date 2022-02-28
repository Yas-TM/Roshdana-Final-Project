import { Container, Row, Col} from "react-bootstrap"
import HorizCard from "./horizCard"

//images
import car from '../images/car.png'
import headphone from '../images/headphone.png'
import time from '../images/time.png'
import leaf from '../images/leaf.png'
import network from '../images/network.png'
import sheets from '../images/sheets.png'

const images = [car, headphone, time, leaf, network, sheets]



const ReasonSection = () => {
    return(
        <Container fluid className="reason-section">
            <Container>
                <Row className="text-justify">
                <Col xs={12}><h3>آخرین دوره‌های آیلتس ایز</h3></Col>
                <Col xs={12}><h5 className="underline">چرا باید آیلتس ایز را انتخاب کنم؟</h5></Col>
                    {images.map((item, index) => (
                        <HorizCard
                        key={index}
                        img={item}
                        />
                    ))}
                </Row>
            </Container>
        </Container>
    )
}

export default ReasonSection;