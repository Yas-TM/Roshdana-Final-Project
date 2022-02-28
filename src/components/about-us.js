import { Container, Row, Col, Image } from "react-bootstrap"
import { Button } from "react-scroll"
import { Link } from "react-router-dom"

const AboutUs = () => {
    return(
        <Container fluid className="about-section">
            <Container className="about-container">
                <Row className="justify-content-between">
                    <Col xs={12} md={7} className='about-content mb-4'>
                        <h1>درباره ما</h1>
                        <h3>عنوان این مطلب در این قسمت قرار می گیرد</h3>
                        <p>
                        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                        </p>
                        <Link to='/' className="btn btn-dark rounded-0 border-0">بیشتر بدانید</Link>
                    </Col>

                    <Col xs={12} md={5}>
                        <Image src={require("../images/about-us.jpg")} fluid/>
                    </Col>
                </Row>
            </Container>
        </Container>
    ) 
}

export default AboutUs