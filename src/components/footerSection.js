import { Container, Row, Col } from "react-bootstrap"
import NewsLetter from "./newsLetter";

//react-icons
import { MdLocationOn } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaLinkedin} from "react-icons/fa";
import {BsTwitter, BsPinterest} from 'react-icons/bs';
import { Link } from "react-router-dom";

const FooterSection = () => {
    return(
        <>
            <Container fluid className="footer-section">
                <Container>
                    <Row className="footer-row">
                        <Col xs={12} sm={6} lg={4} className="mb-4 text-center text-sm-end">
                            <ul>
                                <li><h6 className="footer-title">تماس با ما</h6></li>
                                <li><p>شهر زنجان<br/><MdLocationOn/> <span>خیابان شهرداری ساختمان 7</span></p></li>
                                <li><p>شهر تهران<br/><MdLocationOn/> <span>خیابان شهرداری ساختمان 7</span></p></li>
                                <li><p id="footer-phone">123456789 (98+)</p></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} lg={2} className="mb-4 text-center text-sm-end">
                            <ul>
                                <li><p className="footer-title">منابع مهم ما</p></li>
                                <li><a href="#">میدان فروش کالا</a></li>
                                <li><a href="#">مستندات</a></li>
                                <li><a href="#">مشتریان</a></li>
                                <li><a href="#">فرصت های شغلی</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="mb-4 text-center text-sm-end">
                            <ul>
                                <li><p className="footer-title">لینک های میانبر</p></li>
                                <li><a href="#">درباره ما</a></li>
                                <li><a href="#">خدمات ما</a></li>
                                <li><a href="#">دریافت نقل قول</a></li>
                                <li><a href="#">محصولات</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="mb-4 text-center text-sm-end">
                            <ul>
                                <li><p className="footer-title">خبرنامه</p></li>
                                <li><span>ثبت نام برای دریافت پیشنهادات ویژه آموزش ، اخبار و به روز رسانی ها.</span></li>
                                <li>
                                    <NewsLetter />
                                </li>
                                <li id="links">
                                    <a href='http://www.twitter.com'><BsTwitter /></a>
                                    <a href='http://www.facebook.com'><FaFacebookSquare /></a>
                                    <a href='http://www.pinterest.com'><BsPinterest /></a>
                                    <a href='http://www.linkedin.com'><FaLinkedin /></a>
                                    <a href='http://www.instagram.com'><FaInstagram /></a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>


            <Container fluid className="footer-end">
                <Container>
                    <Row>
                        <Col xs={9} sm={10} md={11}><small>کلیه حقوق متعلق به آیلتس ایز است. طراحی توسط آرنیکاوب | 1398</small></Col>
                        <Col xs={3} sm={2} md={1}><small>IELTSEASE</small></Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default FooterSection