import "./style.css"
const Photocard = ({ image }) => {
    return (
      <div className='photo-card__container--polaroid'>
        <img className='photo-card--image__item' src={image.url} alt="image" />
        <div className='photo-card--image__text'>
            <p>{image.theme}</p>
        </div>
      </div>
  
    )
  
}
export default Photocard
