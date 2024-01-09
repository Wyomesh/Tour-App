function FeaturedCards(props) {
    return (
      <div className="featuredCardsContainer">
        <div className="featuredCards">
          <p className="dateTime">{props.dateTime}</p>
          <img src={props.source} alt={props.alt} />
        </div>
        <div className="featuredCardsContainerDetails">
          <div className="name">
            <h3>{props.name}</h3>
          </div>
          <div className="placeTimePrice">
            <div className="place">
              <p>
                <i className="fa-solid fa-map"></i>
                {props.place}
              </p>
            </div>
            <div className="timePrice">
              <p>{props.tripTime}</p>
              <p>{props.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default FeaturedCards;
  