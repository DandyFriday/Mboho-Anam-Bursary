// import { motion } from "framer-motion";
// import { useParams } from "react-router-dom";

// const clanData: any = {
//   "Abak Midim": {
//     wards: [
//       "Abak Midim I (Ward 10)",
//       "Abak Midim II (Ward 11)",
//       "Abak Midim III (Ward 12)",
//       "Abak Midim IV (Ward 13)",
//       "Abak Midim V (Ward 14)",
//     ],
//     villages: [
//       "Ediene Ikot Inyang",
//       "Eka Ediene",
//       "Enuekoro",
//       "Etuk Ediene",
//       "Ikot Adia",
//       "Ikot Akpakpan",
//       "Ikot Inuen",
//       "Ikot Akpan Etedue",
//       "Ikot Akpan Ntia",
//       "Ikot Akpan Essien",
//       "Ikot Akpan Otuk",
//       "Ikot Akpan Udo I",
//       "Ikot Eda",
//       "Ikot Mbong",
//       "Ikot Obio Asan",
//       "Ikot Obio Atara",
//       "Ikot Obio Aduak",
//       "Ikot Oko",
//       "Ikot Osute",
//       "Ikot Otok",
//       "Ikot Otu",
//       "Ikot Owobo",
//       "Ikot Ukpo",
//       "Ikot Upong Obioese",
//       "Ikot Uso Etok",
//       "Ikot Utiat",
//       "Offot Ikot Abasi Esu",
//       "Otung Aya",
//       "Ikot Ukpong Eren",
//       "Ukpom",
//       "Ute Etok",
//       "Utu Ikot Iwara",
//       "Utu Ikot Obio Ekpe",
//       "Ikot Esenam",
//       "Ikot Itor",
//       "Manta",
//       "Ikot Obong",
//     ],
//   },
//   "Ibesit Nnung Ikot": {
//     wards: [
//       "Ibesit Nnung Ikot I (Ward 15)",
//       "Ibesit Nnung Ikot II (Ward 16)",
//     ],
//     villages: [
//       "Anwa Udo",
//       "Eteben",
//       "Idung Ntuk Uma",
//       "Ikot Akama",
//       "Ikot Akpan Nsek",
//       "Ikot Akpan Udo",
//       "Ikot Iba",
//       "Ikot Idem",
//       "Ikot Ifot",
//       "Ikot Ikpene",
//       "Ikot Ndo",
//       "Ikot Oku",
//       "Ikot Omono",
//       "Ikot Oto",
//       "Ikot Owuk",
//       "Ikot Udo Offiong",
//       "Ikot Udoro",
//       "Ikot Ukpong Obio Kpong",
//       "Itung Ekpip",
//       "Ibesit Okpokoro",
//     ],
//   },
// };

// const ClanDetail = () => {
//   const { clanName } = useParams();
//   const clan = clanData[clanName as string];

//   if (!clan) {
//     return <div className="p-20">Clan not found</div>;
//   }

//   return (
//     <motion.div
//       className="max-w-6xl mx-auto px-4 py-16"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       <motion.h1
//         className="text-3xl font-bold mb-10 text-[#065f46]"
//         initial={{ y: -20 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {clanName} Clan
//       </motion.h1>

//       <h2 className="text-xl font-semibold mb-4 text-orange">
//         Political Wards
//       </h2>

//       <ul className="mb-10 list-disc pl-6">
//         {clan.wards.map((ward: string, index: number) => (
//           <motion.li
//             key={ward}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.05 }}
//           >
//             {ward}
//           </motion.li>
//         ))}
//       </ul>

//       <h2 className="text-xl font-semibold mb-4 text-orange">
//         Villages
//       </h2>

//       <ul className="grid md:grid-cols-2 gap-2 list-disc pl-6">
//         {clan.villages.map((village: string, index: number) => (
//           <motion.li
//             key={village}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.03 }}
//           >
//             {village}
//           </motion.li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// };

// export default ClanDetail;




import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const clanData: Record<string, { wards: string[]; villages: string[] }> = {
  "Abak Midim": {
    wards: [
      "Abak Midim I (Ward 10)",
      "Abak Midim II (Ward 11)",
      "Abak Midim III (Ward 12)",
      "Abak Midim IV (Ward 13)",
      "Abak Midim V (Ward 14)",
    ],
    villages: [
      "Ediene Ikot Inyang",
      "Eka Ediene",
      "Enuekoro",
      "Etuk Ediene",
      "Ikot Adia",
      "Ikot Akpakpan",
      "Ikot Inuen",
      "Ikot Akpan Etedue",
      "Ikot Akpan Ntia",
      "Ikot Akpan Essien",
      "Ikot Akpan Otuk",
      "Ikot Akpan Udo I",
      "Ikot Eda",
      "Ikot Mbong",
      "Ikot Obio Asan",
      "Ikot Obio Atara",
      "Ikot Obio Aduak",
      "Ikot Oko",
      "Ikot Osute",
      "Ikot Otok",
      "Ikot Otu",
      "Ikot Owobo",
      "Ikot Ukpo",
      "Ikot Upong Obioese",
      "Ikot Uso Etok",
      "Ikot Utiat",
      "Offot Ikot Abasi Esu",
      "Otung Aya",
      "Ikot Ukpong Eren",
      "Ukpom",
      "Ute Etok",
      "Utu Ikot Iwara",
      "Utu Ikot Obio Ekpe",
      "Ikot Esenam",
      "Ikot Itor",
      "Manta",
      "Ikot Obong",
    ],
  },
  "Ibesit Nnung Ikot": {
    wards: [
      "Ibesit Nnung Ikot I (Ward 15)",
      "Ibesit Nnung Ikot II (Ward 16)",
    ],
    villages: [
      "Anwa Udo",
      "Eteben",
      "Idung Ntuk Uma",
      "Ikot Akama",
      "Ikot Akpan Nsek",
      "Ikot Akpan Udo",
      "Ikot Iba",
      "Ikot Idem",
      "Ikot Ifot",
      "Ikot Ikpene",
      "Ikot Ndo",
      "Ikot Oku",
      "Ikot Omono",
      "Ikot Oto",
      "Ikot Owuk",
      "Ikot Udo Offiong",
      "Ikot Udoro",
      "Ikot Ukpong Obio Kpong",
      "Itung Ekpip",
      "Ibesit Okpokoro",
    ],
  },
};

const ClanDetail = () => {
  const { clanName } = useParams();
  const clan = clanData[clanName as string];

  if (!clan) {
    return <div className="p-20 text-center text-red-500 text-xl">Clan not found</div>;
  }

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl font-bold mb-10 text-[#065f46] text-center"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {clanName} Clan
      </motion.h1>

      {/* Political Wards */}
      <h2 className="text-2xl font-semibold mb-4 text-orange">Political Wards</h2>
      <ul className="mb-10 list-disc pl-6">
        {clan.wards.map((ward, index) => (
          <motion.li
            key={ward}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="text-gray-700 mb-1"
          >
            {ward}
          </motion.li>
        ))}
      </ul>

      {/* Villages */}
      <h2 className="text-2xl font-semibold mb-4 text-orange">Villages</h2>
      <ul className="grid md:grid-cols-2 gap-2 list-disc pl-6">
        {clan.villages.map((village, index) => (
          <motion.li
            key={village}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.03 }}
            className="text-gray-700 mb-1"
          >
            {village}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ClanDetail;