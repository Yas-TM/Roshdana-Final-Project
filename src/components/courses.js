import { Container, Row, Col} from "react-bootstrap";
import Course from './course'


//images
import img1 from '../images/person1.png'
import img2 from '../images/person2.jpg'
import img3 from '../images/person3.png'
import english from '../images/English.jpg'
import pte from '../images/PTE.jpg'
import ielts from '../images/IELTScourse.jpg'

const CourseSection = () => {

    const courseInfo = [
        {   
            img: english,
            title: 'مکالمه انگلیسی (سطح مقدماتی)',
            mentor_img: img1,
            mentor_name:'علی کیانپور',
            time:'01:26:29',
            prev_price:'18,000',
            new_price:'10,800',
            value: 4.5
        },
        {   
            img: pte,
            title: 'آموزش آزمون زبان PTE Academic',
            mentor_img: img2,
            mentor_name:'امید',
            time:'03:01:32',
            prev_price:'39,000',
            new_price:'20,200',
            value: 0
        },
        {   
            img: ielts,
            title: 'آیلتس آکادمیک',
            mentor_img: img3,
            mentor_name:'سید محمدامین ساجدی',
            time:'01:28:22',
            prev_price:'35,000',
            new_price:'21,000',
            value: 4.5
        }
    ]

    

    return(
        <Container fluid className="course-section">
            <Container>
                <Row>
                    <Col xs={12}><h3>آخرین دوره‌های آیلتس ایز</h3></Col>
                    <Col xs={12}><h5 className="underline">چرا باید آیلتس ایز را انتخاب کنم؟</h5></Col>
                    {courseInfo.map((item,index) => (
                        <Col
                            xs={12} sm={6} lg={4}
                            key={index}>
                            <Course 
                            title={item.title}
                            src={item.img}
                            mentor_img={item.mentor_img}
                            mentor_name={item.mentor_name}
                            time={item.time}
                            prev_price={item.prev_price}
                            new_price={item.new_price}
                            value={item.value}
                            />
                        </Col>
                    ))}    
                </Row>      
            </Container>    
        </Container>
    )
}

export default CourseSection;