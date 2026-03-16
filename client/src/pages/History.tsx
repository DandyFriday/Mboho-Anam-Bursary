// import { motion } from "framer-motion";

// const events = [
//   { year: "1995", title: "Foundation", description: "Organization established." },
//   { year: "2005", title: "First Bursary", description: "Educational support began." },
//   { year: "2024", title: "Digital Launch", description: "Online system introduced." },
// ];

// const History = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="pt-24 max-w-4xl mx-auto px-4 pb-16"
//     >
//       <h1 className="text-4xl font-bold text-[#065f46] mb-12">
//         Our History
//       </h1>

//       <div className="border-l-4 border-[#065f46] pl-6 space-y-10">
//         {events.map((event, index) => (
//           <motion.div
//             key={event.year}
//             initial={{ x: -20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: index * 0.2 }}
//           >
//             <h2 className="text-xl font-semibold mb-1">
//               {event.year} — {event.title}
//             </h2>
//             <p className="text-gray-600">{event.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default History;






import { motion } from "framer-motion";

const History = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 max-w-4xl mx-auto px-4 pb-16 space-y-8"
    >
      <h1 className="text-4xl font-bold text-[#065f46] mb-8 text-center">Our History</h1>

      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          The establishment of Mboho Anam as a sociocultural body of the Anam People of Oruk Anam dates back to 1978, with renowned names like Hon Okon Esenowo, Engr Mike Umonta, Effiong Etuk and others. Engr Mike Umonta emerged as the pioneer president of the apex organization. His reign witnessed an increase in membership strength of the association.
        </p>

        <p>
          Engr Umonta was later succeeded by Mr Edward Amos, who led for some time.
        </p>

        <p>
          In what could be termed a return of the legend, Engr Umonta again became the national president of Mboho Anam for a period, and was later succeeded by Chief Thompson Ukoyo.
        </p>

        <p>
          In Ukoyo's era, prominent names emerged—waxing strong in strength, numbers, and influence, including Obong Vitalis Unang, Sir Udo Kierian, etc. His time also witnessed tremendous development in the organization, like the building of Mboho Anam secretariat at the defunct Anam Local Government Headquarters, Ikot Akpan Essien. By this time, a Board of Trustees (BOT) was formed with Obong Unang as Chairman.
        </p>

        <p>
          Chief Ukoyo was succeeded by Dr Effiong Udongwo, consolidating past achievements and expanding the humanitarian reach of the organization, especially in the education endowment fund for Anam students in tertiary institutions.
        </p>

        <p>
          Sir Udo Kierian Akpan is the current BOT Chairman of Mboho Anam, supporting and providing advisory contributions to the growth and stability of the organization.
        </p>
      </div>
    </motion.div>
  );
};

export default History;