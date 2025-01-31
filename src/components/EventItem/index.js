// Write your code here
import './index.css'
const Eventitem = props => {
  const {key, detailslist, isactive,setActiveEventId} = props
  const {id, imageUrl, name, location, registrationStatus} = detailslist
  const eventImageClassName = isactive ? 'event-image active' : 'event-image'
  const clickimage = () => {
    setActiveEventId(id)
  }

  return (
    <>
      <li className="event-item">
        <button type="button" className="event-button" onClick={clickimage}>
          <img src={imageUrl} alt="event" className={eventImageClassName} />
        </button>
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </li>
    </>
  )
}
export default Eventitem
