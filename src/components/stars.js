function getStars(value){
    const remain = parseInt(5 - value);
    const stars = []
    const [whole, part] = parseFloat(value).toString().split('.')
    for(let i=0; i< whole; i++) stars.push(100)
    if(part) stars.push(50)
    for(let i=0; i< remain; i++) stars.push(0)
    return stars
}
  


const Stars = ({value}) => {
    
    return(
        
        <div className='star-group'>
          {getStars(value).map((value, index)=>(
            <img key={index} src={require(`../images/${value}.png`)} className='stars' />
          ))}
      </div> 
    )
}

export default Stars;