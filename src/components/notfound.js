import { Container, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const NotFound = () => {
    return(
        <Container fluid className="notFound">
            <Row className="justify-content-center text-center">
                <Col xs={12}>
                    <h1 
                    style={{fontSize:"200px"}} 
                    className="text-light">404</h1>
                </Col>
                <Col xs={12}>
                    <h2
                    style={{fontSize:"80px"}}
                    >Page Not Found</h2>
                </Col>
                <Col xs={12}>
                    <Link
                    style={{fontSize:"50px"}}
                    className="text-light fs-2 text-decoration-underline d-block" to="/">Back</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound