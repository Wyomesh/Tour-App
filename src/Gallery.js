import tour_1 from "./images/tour-1.jpeg";
import tour_2 from "./images/tour-2.jpeg";
import tour_3 from "./images/tour-3.jpeg";
import tour_4 from "./images/tour-4.jpeg";
import tour_5 from "./images/tour-5.jpeg";
import tour_6 from "./images/tour-6.jpeg";
import tour_7 from "./images/tour-1.jpeg";
import tour_8 from "./images/tour-2.jpeg";
import GalleryCards from "./GalleryCards";
function Gallery() {
  return (
    <section className="gallery">
      <div className="galleryContainer">
        <div className="galleryHeading">
          <h1>
            OUR <span>GALLERY</span>
          </h1>
        </div>
        <div className="galleryImagesContainer">
          <div className="galleryImages">
            <GalleryCards source={tour_1} alt="Tour1" className="tour" />
            <GalleryCards source={tour_2} alt="Tour2" className="tour" />
            <GalleryCards source={tour_3} alt="Tour3" className="tour" />
            <GalleryCards source={tour_4} alt="Tour4" className="tour" />
            <GalleryCards source={tour_5} alt="Tour5" className="tour" />
            <GalleryCards source={tour_6} alt="Tour6" className="tour" />
            <GalleryCards source={tour_7} alt="Tour7" className="tour" />
            <GalleryCards source={tour_8} alt="Tour8" className="tour" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Gallery;
