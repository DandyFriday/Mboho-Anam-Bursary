// import Hero from "../components/sections/Hero";
// import CardsSection from "../components/sections/CardsSection";
// import Neighbourhood from "../components/sections/Neighbourhood";
// import Leadership from "../components/sections/LeaderShip";
// import Sponsors from "../components/sections/Sponsors";
// import Card from "../components/ui/FeatureCard";

// const features = [
//   {  caption: "Motivation", description: "Empowering students.", bgClass: "bg-primary", captionClass: "text-white" },
//   {  caption: "Bursary", description: "Financial support.", bgClass: "bg-orange", captionClass: "text-dark" },
//   {  caption: "Opportunity", description: "Creating growth.", bgClass: "bg-primary", captionClass: "text-white" },
//   { caption: "Hope", description: "A brighter future.", bgClass: "bg-orange", captionClass: "text-dark" },
//   {  caption: "Organization", description: "Unified effort.", bgClass: "bg-[#065f46]", captionClass: "text-white" },
// ];

// const Home = () => {
//   return (
//     <main className="">
//       <Hero />
//       <CardsSection />

//       <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//         {features.map((f, i) => (
//           <Card key={i} {...f} />
//         ))}
//       </section>

//       <Neighbourhood /> 
//        <Leadership /> 
//        <Sponsors />
//     </main>
//   );
// };

// export default Home;





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
    description: "Explore the communities we support.",
    image: assets.community_1,
    link: "/communities",
  },
  {
    title: "Heroes",
    description: "Meet the heroes making impact possible.",
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
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
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