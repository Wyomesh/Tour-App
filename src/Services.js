import ServicesCard from "./ServicesCard";
function Services() {
  return (
    <section className="services">
      <div className="servicesContainer">
        <div className="servicesHeading">
          <h1>
            OUR <span>SERVICES</span>
          </h1>
        </div>
        <div className="servicesCardsContainer">
          <ServicesCard title="SAVING MONEY" icon="fa-solid fa-wallet" />
          <ServicesCard title="ENDLESS HIKING" icon="fa-solid fa-tree" />
          <ServicesCard
            title="AMAZING COMFORT"
            icon="fa-sharp fa-solid fa-socks"
          />
        </div>
      </div>
    </section>
  );
}
export default Services;
