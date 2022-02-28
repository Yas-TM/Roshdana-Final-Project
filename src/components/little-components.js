import {Col, Row } from "react-bootstrap";

export const IeltsDiv = (props) => {
    return(
        <Col className= {`${props.className} ielts-bg text-center`}>
            <img src={require('../images/ielts.png')} />
        </Col> 
    )
}

export const SinglePost = (props) => {
    return(
        <Col className="single-post-container">
            <div className={`${props.className}`}>
                <h3 className="mb-4">این همان عنوان مطلب است</h3>
                <p className="lh-lg mb-4 pb-2">این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ </p>
                <Row className={props.btn_align}><a href="#" className={`${props.bg_color} col-7 col-sm-5 col-md-7 col-lg-5 btn rounded-pill btn-outline-light`}><small>بیشتر بدانید</small></a></Row>
            </div>
        </Col>
    )
}