import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HorizCard = (props) => {
    return(
        <Col xs={12} md={6} lg={4} className='mt-4 horiz-card'>
            <Row>
                <Col xs={3} sm={2} md={4} lg={4} xl={3} >
                    <img src={props.img}/>
                </Col>
                <Col xs={8} sm={7} md={8} lg={8} xl={9} >
                    <h5 className="card-title">این همان عنوان مطلب است</h5>
                    <small className="body-text">این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.</small>
                    <p className="fs-5"><Link to="/ielts" className='horiz-link'>بیشتر بدانید »</Link></p>
                </Col>
            </Row>
        </Col>
    )
}

export default HorizCard;