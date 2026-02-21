
//import React from 'react'
import Button from '../ui/Button'
import { BsArrowRight } from 'react-icons/bs'
import { assets } from "../../assets/assets";


const Neighbourhood = () => {
return (
<section className="py-12 bg-white">
<div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="order-2 lg:order-1">
<h3 className="text-3xl font-bold mb-3 text-[#065f46]">Our Objectives</h3>
<p className="text-sm mb-3">The aim for the establishment of Mboho Anam includes fostering unity, promoting peace, love and respect among the Anam people. Mboho Anam is dedicated to human capital development through scholarships and bursaries.</p>
<div className="mt-4">
<Button text="Read More" className="bg-primary text-white  hover:bg-goldSoft hover:text-[#4b5563]" icon={<BsArrowRight />} />
</div>
</div>


<div className="order-1 lg:order-2">
<img src={assets.N_gallery} alt="Gallery" className="w-full h-auto rounded-lg shadow-lg" />
</div>
</div>
</section>
)
}


export default Neighbourhood;




// import Button from '../ui/Button'
// import { BsArrowRight } from 'react-icons/bs'
// import { assets } from "../../assets/assets";

// const Neighbourhood = () => {
//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

//         {/* LEFT TEXT SECTION */}
//         <div className="order-2 lg:order-1">
//           <h3 className="text-3xl font-bold mb-3 text-[#065f46]">
//             Our Objectives
//           </h3>

//           <p className="text-sm mb-3">
//             The aim for the establishment of Mboho Anam includes fostering unity, 
//             promoting peace, love and respect among the Anam people. 
//             Mboho Anam is dedicated to human capital development through 
//             scholarships and bursaries.
//           </p>

//           <div className="mt-4">
//             <Button
//               text="Read More"
//               className="bg-primary text-white hover:bg-goldSoft hover:text-[#4b5563]"
//               icon={<BsArrowRight />}
//             />
//           </div>
//         </div>

//         {/* RIGHT IMAGE GRID SECTION */}
//         <div className="order-1 lg:order-2">
//   <div className="grid grid-cols-4 grid-rows-[260px_260px_220px] gap-4">

//     {/* BIG IMAGE */}
//     <img
//       src={assets.kiriean}
//       alt="Main"
//       className="col-span-3 row-span-2 w-full h-full object-cover rounded-xl shadow-lg"
//     />

//     {/* RIGHT TOP SMALL */}
//     <img
//       src={assets.Dr_Ekem}
//       alt="Small 1"
//       className="col-span-1 row-span-1 w-full h-full object-cover rounded-xl shadow-md"
//     />

//     {/* RIGHT BOTTOM SMALL */}
//     <img
//       src={assets.Dr_Ikim}
//       alt="Small 2"
//       className="col-span-1 row-span-1 w-full h-full object-cover rounded-xl shadow-md"
//     />

//     {/* BOTTOM LEFT (aligned under big image area only) */}
//     <img
//       src={assets.general_sec}
//       alt="Bottom 1"
//       className="col-start-1 col-span-2 w-full h-full object-cover rounded-xl shadow-md"
//     />

//     {/* BOTTOM RIGHT */}
//     <img
//       src={assets.national_pre}
//       alt="Bottom 2"
//       className="col-start-3 col-span-2 w-full h-full object-cover rounded-xl shadow-md"
//     />

//   </div>
// </div>

//       </div>
//     </section>
//   )
// }

// export default Neighbourhood;