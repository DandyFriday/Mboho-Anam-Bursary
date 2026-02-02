import Hero from "../components/sections/Hero";
import CardsSection from "../components/sections/CardsSection";
import Neighbourhood from "../components/sections/Neighbourhood";
import Leadership from "../components/sections/LeaderShip";
import Sponsors from "../components/sections/Sponsors";
import Card from "../components/ui/Card";

const features = [
  { letter: "M", caption: "Motivation", description: "Empowering students.", bgClass: "bg-primary", captionClass: "text-white" },
  { letter: "B", caption: "Bursary", description: "Financial support.", bgClass: "bg-orange-400", captionClass: "text-dark" },
  { letter: "O", caption: "Opportunity", description: "Creating growth.", bgClass: "bg-primary", captionClass: "text-white" },
  { letter: "H", caption: "Hope", description: "A brighter future.", bgClass: "bg-orange-400", captionClass: "text-dark" },
  { letter: "O", caption: "Organization", description: "Unified effort.", bgClass: "bg-primary", captionClass: "text-white" },
];

const Home = () => {
  return (
    <main className="pt-16">
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
