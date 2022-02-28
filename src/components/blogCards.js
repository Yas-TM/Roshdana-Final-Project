import { Card} from "react-bootstrap"
import {FaRegClock} from 'react-icons/fa'
import { Link } from "react-router-dom"

const BlogPost = (props) => {
    return(
        <Card className="mt-4 blog-card border-0">
            <Link to='/ielts'>
                <div className="img-zoom"><Card.Img variant="top" src={props.src} /></div>
                <Card.Body className="blog-post">
                    <small className="text-muted d-inline-block mb-1">{props.type}</small>
                    <h6 className="blog-title">{props.title}</h6>
                    <FaRegClock className='ms-3 blog-clock'/>
                    <span className='text-muted'>{props.time}</span>
                </Card.Body>
            </Link>
        </Card>    
    )
}

export default BlogPost