import { Container, Row } from "react-bootstrap"
import { SinglePost, IeltsDiv } from "./little-components"

const SecondSection = () => {
    return(
        <Container fluid className="p-0">
            <Row className="ielts-div-container m-0">
                <SinglePost xs={12} md={6} className="single-post1"/>
                <IeltsDiv xs={12} md={6} className="col-padding d-none d-md-block align-self-center"/>
            </Row>
        </Container>
    )
}

export default SecondSection