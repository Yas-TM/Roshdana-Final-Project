import {Col, Row, Card} from 'react-bootstrap'

const RelatedPost = () => {
    return(
        <div className='news-container'>
            <News>
                <img src={require('../images/news1.jpg')} />
            </News>
            <News>
                <img src={require('../images/news2.jpg')} />
            </News>
        </div>
    )
}

export default RelatedPost

const News = (props) => {
    return(
        <div className='mb-4' style={{maxWidth:"680px"}}>
            <Row className="g-0 justify-content-around">
                <Col md={4}>
                    {props.children}
                </Col>
                <Col className='align-self-center' md={7}>
                    <Card.Body className='p-0'>
                        <Card.Title >عنوان این خبر اینجا قرار میگیرد</Card.Title>
                        <Card.Text className="news-content">دو خط توضیح کوتاه در مورد این خبر در اینجا قرار می گیرد دو
                         خط توضیح کوتاه در مورد این خبر در اینجا قرار می گیرد
                         دو خط توضیح کوتاه در مورد این خبر در اینجا قرار می گیرد</Card.Text>
                        <p className='rect'><small className="text-muted">25 خرداد 1398 | <span><a href="#">ادامه خبر</a></span></small></p>
                    </Card.Body>
                </Col>
            </Row>
        </div>
    )
}