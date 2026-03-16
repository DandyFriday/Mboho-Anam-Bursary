import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const clans = [
  {
    name: "Abak Midim",
    wards: 5,
    villages: 38,
  },
  {
    name: "Ibesit Nnung Ikot",
    wards: 2,
    villages: 20,
  },
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Community = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-16"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl font-bold text-center mb-12 text-[#065f46]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Anam Community Structure
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {clans.map((clan) => (
          <motion.div
            key={clan.name}
            variants={cardVariant}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/community/${clan.name}`)}
            className="bg-white shadow-xl rounded-xl p-6 cursor-pointer border border-gray-100"
          >
            <h2 className="text-xl font-bold text-orange mb-3">
              {clan.name} Clan
            </h2>
            <p className="text-gray-600">{clan.villages} Villages</p>
            <p className="text-gray-600">{clan.wards} Political Wards</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Community;