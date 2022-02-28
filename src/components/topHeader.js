import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';

//react-icons
import { FaFacebookSquare, FaInstagram, FaPhone, FaHome} from "react-icons/fa";
import {BsTwitter} from 'react-icons/bs';

const TopHeader = () => {

    const {currentUser} = useAuth()

    return(
        <Container fluid className='top-header-container'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={4} sm={4} lg={6}>
                        <FaPhone className='ml-3 d-none d-sm-inline-block' /> <small><span className='d-none d-md-inline me-2'>تلفن :</span> 09153085282</small>
                    </Col>
                    <Col xs={3} sm={4} md={6} lg={4} >
                        <Row className='text-center justify-content-end'>
                            <Col md={3} className='d-none d-md-inline p-1'><Link to='/'>میز راهنما</Link></Col>
                            <Col sm={5} md={3} className='d-none d-sm-inline p-1'><Link to="/">منابع ما</Link></Col>
                            <Col xs={12} sm={7} md={3} className='rounded-pill p-1 login-btn'>
                                <Link to={currentUser ? '/dashboard' : '/signup'} className="text-light text-decoration-none">{currentUser ? 'پروفایل' : 'ثبت نام'}</Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={5} sm={4} md={2}>
                        <Row className='justify-content-center justify-content-sm-end text-center'>
                            <Col xs={2} className='fs-4 me-1'><Link to='/' className='fs-4'><FaHome /></Link></Col>
                            <Col xs={2} className='fs-4 me-1'><a href='http://www.instagram.com'><FaInstagram /></a></Col>
                            <Col xs={2} className='fs-4 me-1'><a href='http://www.facebook.com'><FaFacebookSquare/></a></Col>
                            <Col xs={2} className='fs-4 me-1'><a href='http://www.twitter.com'><BsTwitter /></a></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default TopHeader;