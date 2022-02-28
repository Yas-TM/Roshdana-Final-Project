import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import {Link} from 'react-router-dom';
import { Link as Scroll } from "react-scroll";

const MainHeader = () => {


    return(
        <Container fluid className="menu-container">
            <Container className="position-relative">
                <Row className="align-items-center justify-content-end">
                    <Col className="p-0 order-1 order-md-0">
                    <Navbar expand="md justify-content-end mt-3">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light"/>
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav
                                className="my-2 my-lg-0 "
                                style={{ maxHeight: '180px'}}
                                navbarScroll
                            >
                                <NavDropdown title="صفحه اصلی" id="navbarScrollingDropdown">
                                    <Scroll
                                        activeClass="active"
                                        to="reason" 
                                        spy={true}
                                    >
                                        <NavDropdown.Item >مطالب مفید</NavDropdown.Item>                                            
                                    </Scroll> 
                                    <Scroll
                                        activeClass="active"
                                        to="courses" 
                                        spy={true}
                                    >
                                        <NavDropdown.Item >دوره‌ها</NavDropdown.Item>                                            
                                    </Scroll> 
                                    <Scroll
                                        activeClass="active"
                                        to="advantage" 
                                        spy={true}
                                    >
                                        <NavDropdown.Item >مزیت‌های انتخاب آیلتس ایز</NavDropdown.Item>                                            
                                    </Scroll> 
                                    <Scroll
                                        activeClass="active"
                                        to="colleagues" 
                                        spy={true}
                                    >
                                        <NavDropdown.Item >همکاران ما</NavDropdown.Item>                                            
                                    </Scroll> 
                                    <Scroll
                                        activeClass="active"
                                        to="blog" 
                                        spy={true}
                                    >
                                        <NavDropdown.Item >پست‌ها</NavDropdown.Item>                                            
                                    </Scroll> 
                                    <Scroll
                                        activeClass="active"
                                        to="footer" 
                                        spy={true}
                                    >
                                        <NavDropdown.Item >پاورقی</NavDropdown.Item>                                            
                                    </Scroll> 
                                </NavDropdown>
                                <NavDropdown title="صفحات" id="navbarScrollingDropdown">
                                    <NavDropdown.Item><Link to='/ielts'>صفحه دوم</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to='/about-us'>درباره ما</Link></NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="نمونه کارها" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href='https://github.com/Yas-TM/HTML-CSS-First-Project.git'>HTML & CSS</NavDropdown.Item>
                                    <NavDropdown.Item href='https://github.com/Yas-TM/first-simple-bootstrap-project' target='_blank'>بوت استرپ</NavDropdown.Item>
                                    <NavDropdown.Item href='https://github.com/Yas-TM/Calculator.git' target='_blank'>ماشین حساب</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#1"><Link to='/'>فروشگاه</Link></Nav.Link>
                                <Nav.Link href="#2"><Link to='/'>وبلاگ</Link></Nav.Link>
                                <Nav.Link href="#3"><Link to='/'>فروشگاه</Link></Nav.Link>
                                <Nav.Link href="#4"><Link to='/'>وبلاگ</Link></Nav.Link>
                                <Form tabIndex={1}>
                                    <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    />
                                    <BsSearch className="text-dark"/>
                                </Form>                     
                            </Nav>  
                            </Navbar.Collapse>
                    </Navbar>
                    
                    </Col>
                </Row>
                <Row className="header-content-section">
                    <Col xs={12}><img className="ea-img" src={require('../images/greenielts.png')} /></Col>
                    <Col xs={12}>
                        <small className="header-small d-none d-sm-inline-block">ما برای پیدا کردن نیازهای خود همکاری می‌کنیم.</small>
                        <h1 className="header-heading">ما مردم را<br /> با یکدیگر <span className="header-span">متحد میکنیم.</span></h1>
                        <p className="header-paragraph">مفهوم یک شرکت مشاوره مدیریت در نیویورک است که متخصص در ساخت مدل سازی اطلاعات است.</p>
                        <a className="btn rounded-pill btn-light btn-start" href="#"><small>شروع کنید</small></a>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default MainHeader;