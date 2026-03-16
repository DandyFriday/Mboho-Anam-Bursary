import Hero from "../components/sections/Hero";
import CardsSection from "../components/sections/CardsSection";
import Neighbourhood from "../components/sections/Neighbourhood";
import Leadership from "../components/sections/LeaderShip";
import Sponsors from "../components/sections/Sponsors";
import FeatureCard from "../components/ui/FeatureCard";
import { assets } from "../assets/assets";

const features = [
  {
    title: "History",
    description: "Discover our journey and how it all began.",
    image: assets.history3,
    link: "/history",
  },
  {
    title: "Communities",
    description: "Explore the communities in Anam.",
    image: assets.community_1,
    link: "/community",
  },
  {
    title: "Heroes",
    description: "Meet the past and present heroes making impact possible.",
    image: assets.hero1,
    link: "/heroes",
  },
];

const Home = () => {
  return (
    <main>
      <Hero />
      <CardsSection />

      {/* New Feature Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          // Pass staggered delay for entrance animation
          <FeatureCard key={index} {...feature} delay={index * 0.2} />
        ))}
      </section>

      <Neighbourhood />
      <Leadership />
      <Sponsors />
    </main>
  );
};

export default Home;