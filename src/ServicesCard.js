function Servicescard(props) {
    return (
      <div className="servicesCards">
        <div className="icons">
          <i className={props.icon}></i>
        </div>
        <div className="iconsDescription">
          <h3 className="iconsDescriptionHeading">{props.title}</h3>
          <p className="iconDescriptionPara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    );
  }
  export default Servicescard;
  