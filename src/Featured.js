import tour_1 from "./images/tour-1.jpeg";
import tour_2 from "./images/tour-2.jpeg";
import tour_3 from "./images/tour-3.jpeg";
import tour_4 from "./images/tour-4.jpeg";
import FeaturedCards from "./FeaturedCards";
function Featured() {
  return (
    <section className="featuredTours">
      <div className="featuredToursContainer">
        <div className="featuredToursHeading">
          <h1>
            FEATURED <span>TOURS</span>
          </h1>
        </div>
        <div className="featuresToursImages">
          <FeaturedCards
            source={tour_1}
            alt="Tour1"
            dateTime={"August 5th,2019"}
            name={"Tibet Adventure"}
            place={"China"}
            tripTime={"6 days"}
            price={"From $2100"}
          />
          <FeaturedCards
            source={tour_2}
            alt="Tour2"
            dateTime={"September 12th 2019"}
            name={"Best of Java"}
            place={"Indonesia"}
            tripTime={"10 days"}
            price={"From $4100"}
          />
          <FeaturedCards
            source={tour_3}
            alt="Tour3"
            dateTime={"October 10th 2019"}
            name={"Explore Hong Kong"}
            place={"Hong Kong"}
            tripTime={"12 days"}
            price={"From $3100"}
          />
          <FeaturedCards
            source={tour_4}
            alt="Tour4"
            dateTime={"December 15th 2019"}
            name={"Kenya Highligts"}
            place={"Kenya"}
            tripTime={"22 days"}
            price={"From $5400"}
          />
        </div>
      </div>
    </section>
  );
}
export default Featured;
