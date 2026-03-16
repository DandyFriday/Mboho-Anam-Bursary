// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const heroes = [
//   { name: "Chief John Doe", title: "Founder", bio: "Founded the organization." },
//   { name: "Dr. Jane Smith", title: "Education Advocate", bio: "Expanded bursary programs." },
// ];

// const Heroes = () => {
//   const [selected, setSelected] = useState<typeof heroes[0] | null>(null);

//   return (
//     <motion.main
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="max-w-6xl mx-auto px-4 py-16"
//     >
//       <h1 className="text-4xl font-bold text-[#065f46] mb-10">
//         Community Heroes
//       </h1>

//       <div className="grid md:grid-cols-3 gap-6">
//         {heroes.map((hero) => (
//           <motion.div
//             key={hero.name}
//             whileHover={{ scale: 1.03 }}
//             className="border rounded-xl p-6 cursor-pointer shadow-sm hover:shadow-md transition"
//             onClick={() => setSelected(hero)}
//           >
//             <h2 className="text-xl font-semibold mb-1">{hero.name}</h2>
//             <p className="text-gray-600">{hero.title}</p>
//           </motion.div>
//         ))}
//       </div>

//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 bg-black/40 flex items-center justify-center px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelected(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               transition={{ duration: 0.2 }}
//               className="bg-white p-6 rounded-xl max-w-md w-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <h2 className="text-xl font-bold mb-1">{selected.name}</h2>
//               <p className="text-gray-600 mb-3">{selected.title}</p>
//               <p className="text-gray-700">{selected.bio}</p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.main>
//   );
// };

// export default Heroes;




import { motion } from "framer-motion";

const heroesList = [
  "Hon Okon Jacob Esenowo",
  "Late Apostle John Unangekong",
  "Mr Effiong Etuk",
  "Late Engr Mike Umonta",
  "Late Elder Edward Amos",
  "Late Obongunwana (Sir) Vitalis John Unang",
  "Late Elder Thompson Ukoyo",
  "Late Hon Okon Joe Ndok",
  "Late Hon Peter Udo Essien",
  "Late Mr Donald Mbodi",
  "Rt Hon (Sir) Udo Kierian Akpan",
  "Obong Prince Akpan Ikim",
  "Dr Effiong Udongwo",
  "Dr Saturday Brendan Umanah",
  "Pst Emmanuel Kyrian Akpan",
];

const Heroes = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-4 py-20"
    >
      <h1 className="text-4xl font-bold text-[#065f46] mb-14 text-center">
         Heroes Of Mboho Anam
      </h1>
      <p>A whole lot of prominent persons have been instrumental to the establishment, growth, and  sustainability of Mboho Anam as a group and as an entity, </p>

      <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700 text-lg">
        {heroesList.map((hero) => (
          <motion.li
            key={hero}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-1"
          >
            {hero}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Heroes;