function GalleryCards(props) {
    return (
      <div className="galleryCards">
        <img src={props.source} alt={props.alt} />
      </div>
    );
  }
  export default GalleryCards;
  