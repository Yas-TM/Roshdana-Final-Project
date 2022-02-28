import { Container, Row, Col } from "react-bootstrap"

import BlogPost from "./blogCards"

//images
import student from '../images/student.jpg'
import pc from '../images/pc.jpg'
import programming from '../images/programming.jpg'
import graduate from '../images/graduate.jpg'

const blogInfo = [
    {
        img: graduate,
        type: 'آکادمی ها',
        title: 'زن و شوهر از دانشجویان دانشگاه هپی فارغ التحصیل شد',
        time: '23 خرداد 1397'
    },
    {
        img: programming,
        type: 'دولت',
        title: 'نکات مفید برای ایجاد یک بحث با کیفیت',
        time: '23 خرداد 1397'
    },
    {
        img: student,
        type: 'طراحی',
        title: 'بازتاب فصل فجر',
        time: '23 خرداد 1397'
    },
    {
        img: pc,
        type: 'طراحی',
        title: 'شگفت انگیز است که دوستی هایی را که توسعه می یابند ببینند',
        time: '23 خرداد 1397'
    }
]

const BlogSection = () => {
    return(
        <Container fluid className="blog-section">
            <Container className="inner-blog-section">
                <Row >
                    <Col xs={12}><h3>چرا آیلتس ایز؟</h3></Col>
                    <Col xs={12}><h5 className="underline">چرا باید آیلتس ایز را انتخاب کنم؟</h5></Col>
                    {blogInfo.map((item,index) => (
                            <Col
                                xs={12} sm={6} lg={3}
                                key={index}>
                                <BlogPost
                                src={item.img}
                                type={item.type}
                                title={item.title}
                                time={item.time}
                                />
                            </Col>
                        ))} 

                </Row> 
                <button className="btn-show-more border-0 rounded-pill">نمایش همه مطالب</button>
            </Container>   
        </Container>
    )
}

export default BlogSection