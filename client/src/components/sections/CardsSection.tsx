import { useNavigate } from "react-router-dom";

const CardsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 px-4">

        <div
          onClick={() => navigate("/login")}
          className="w-72 p-6 bg-[#065f46] text-white rounded-lg shadow cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-xl font-bold mb-2">Bursary Application</h2>
          <p>Apply for your bursary online.</p>
        </div>

        <div
          onClick={() => navigate("/login")}
          className="w-72 p-6 bg-orange text-white rounded-lg shadow cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-xl font-bold mb-2">Check Status</h2>
          <p>Track your application progress.</p>
        </div>

        <div
          onClick={() => navigate("/forum")}
          className="w-72 p-6 bg-primary text-white rounded-lg shadow cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-xl font-bold mb-2">Student Forum</h2>
          <p>Collaborate with fellow students.</p>
        </div>

      </div>
    </section>
  );
};

export default CardsSection;
