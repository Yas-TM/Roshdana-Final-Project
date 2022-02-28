import { Carousel } from "react-bootstrap";


const MySlider = () => {

const sliderInfo = [
  {
    slide_number : 1,
    title: 'عنوان این مطلب در این بالا قرار میگیره و می تونه دراز باشه',
    sub_title: 28
  },
  {
    slide_number : 2,
    title: 'عنوان مطلب دوم در این بالا قرار میگیره و می تونه دراز باشه',
    sub_title: 15
  },
  {
    slide_number : 3,
    title: 'عنوان مطلب سوم در این بالا قرار میگیره و می تونه دراز باشه',
    sub_title: 21
  }
]


return(

  <div className="carousel-container">

    <Carousel controls={false} className="carousel-fade">
      {sliderInfo.map((value, index) => (
        <Carousel.Item key={index + 1} interval={2000}>
          <img
            src={require(`../images/education${value.slide_number}.jpg`)}
            className="d-block w-100"
          />
          <Carousel.Caption className="slider-content">
            <h3>{value.title}</h3>
            <p>دسته بندی مطالب آیلتس / {value.sub_title} آذر 1398</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    <div className="img-container d-none d-lg-block">
      <img className="fixed-img" src={require('../images/greenielts.png')} />
    </div>
  </div>
  

  )
}


export default MySlider;