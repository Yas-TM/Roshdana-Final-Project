import { Card, Row, Col} from 'react-bootstrap';
import {BsClockFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Stars from './stars'

const Course = (props) => {
    return(         
        <Card className='course-cards mt-4 border-0'>
            <Link to='/ielts'>
                <div className='img-zoom'><Card.Img variant="top" src={props.src} /></div>
                <Card.Body>
                    <h6>{props.title}</h6>
                    <div className='person-info'>
                        <img className='person-img' src={props.mentor_img} />
                        <small className='person-name fw-bold me-2'>{props.mentor_name}</small>
                    </div>
                    <Row className='course-footer align-items-start justify-content-around'>
                        <Col xs={4} sm={10}  md={4} className='order-sm-2 order-md-0 p-0 '><span className='person-name fw-bold '>{props.time}</span><BsClockFill className='clock me-1'/></Col>
                        <Col xs={4} sm={6} md={4} className='order-sm-0 order-md-1 text-end text-sm-center text-md-end pe-1 px-0'><Stars value={props.value} className='stars'/></Col>
                        <Col xs={3} sm={6} md={3} className='order-sm-1 order-md-2 cost-course fs-5 px-0 text-center'><span className='prev-price'>{props.prev_price}</span><span >{props.new_price}</span></Col>
                    </Row>
                </Card.Body>
            </Link>
        </Card>         
    )
}

export default Course;