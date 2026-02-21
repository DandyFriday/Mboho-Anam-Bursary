import Hero from "../components/sections/Hero";
import CardsSection from "../components/sections/CardsSection";
import Neighbourhood from "../components/sections/Neighbourhood";
import Leadership from "../components/sections/LeaderShip";
import Sponsors from "../components/sections/Sponsors";
import Card from "../components/ui/Card";

const features = [
  {  caption: "Motivation", description: "Empowering students.", bgClass: "bg-primary", captionClass: "text-white" },
  {  caption: "Bursary", description: "Financial support.", bgClass: "bg-orange", captionClass: "text-dark" },
  {  caption: "Opportunity", description: "Creating growth.", bgClass: "bg-primary", captionClass: "text-white" },
  { caption: "Hope", description: "A brighter future.", bgClass: "bg-orange", captionClass: "text-dark" },
  {  caption: "Organization", description: "Unified effort.", bgClass: "bg-[#065f46]", captionClass: "text-white" },
];

const Home = () => {
  return (
    <main className="">
      <Hero />
      <CardsSection />

      <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {features.map((f, i) => (
          <Card key={i} {...f} />
        ))}
      </section>

      <Neighbourhood /> 
       <Leadership /> 
       <Sponsors />
    </main>
  );
};

export default Home;
