// import { Link, NavLink } from "react-router-dom";
// import { assets } from "../../assets/assets";

// const Navbar = () => {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//       <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src={assets.logo1}
//             alt="Mboho Anam Logo"
//             className="h-14 w-auto"
//           />
//           <span className="font-bold text-[#065f46] text-[30px]">
//             Mboho Anam
//           </span>
//         </Link>

//         {/* Links */}
//         <nav className="hidden md:flex items-center gap-6">
//           <NavLink to="/" className="font-bold hover:text-gold text-[#065f46]">
//             Home
//           </NavLink>

//           <NavLink to="/contact" className="font-bold hover:text-gold text-[#065f46]">
//             Contact
//           </NavLink>

//           {/* Bursary */}
//           <div className="relative group">
//             <button className="font-bold text-[#065f46] hover:text-gold">
//               Bursary
//             </button>
//             <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow rounded w-56">
//               <p className="px-4 py-3 text-sm text-dark">
//                 Learn about eligibility, requirements and application process for the Mboho Anam Bursary.
//               </p>
//             </div>
//           </div>
//         </nav>

//         {/* Auth Buttons */}
//         <div className="flex items-center gap-3">
//           <Link
//             to="/login"
//             className="font-bold px-4 py-1.5 border border-[#f3f4f6] text-[#065f46] rounded hover:bg-[#f3f4f6] hover:text-gold transition"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             className="font-bold px-4 py-1.5 border border-[#f3f4f6] text-[#065f46] rounded hover:bg-[#f3f4f6] hover:text-gold  transition"
//           >
//             Register
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { assets } from "../../assets/assets";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={assets.logo1}
            alt="Mboho Anam Logo"
            className="h-12 w-auto"
          />
          <span className="font-bold text-[#065f46] text-2xl">
            Mboho Anam
          </span>
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          <NavLink to="/" className="font-bold text-[#065f46] hover:text-gold">
            Home
          </NavLink>

          <NavLink to="/contact" className="font-bold text-[#065f46] hover:text-gold">
            Contact
          </NavLink>

          <div className="relative group">
            <button className="font-bold text-[#065f46] hover:text-gold">
              Bursary
            </button>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow rounded w-64">
              <p className="px-4 py-3 text-sm text-dark">
                Learn about eligibility, requirements and application process for the Mboho Anam Bursary.
              </p>
            </div>
          </div>

          <NavLink to="/news" className="font-bold text-[#065f46] hover:text-gold">
            News
          </NavLink>
        </nav>

        {/* Auth Buttons (Right) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="font-bold px-4 py-1.5 border border-[#f3f4f6] text-[#065f46] rounded hover:bg-[#f3f4f6] hover:text-gold transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="font-bold px-4 py-1.5 border border-[#f3f4f6] text-[#065f46] rounded hover:bg-[#f3f4f6] hover:text-gold transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#065f46] text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="block font-bold text-[#065f46]"
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block font-bold text-[#065f46]"
          >
            Contact
          </NavLink>

          <NavLink
            to="/news"
            onClick={() => setOpen(false)}
            className="block font-bold text-[#065f46]"
          >
            News
          </NavLink>

          <div>
            <p className="font-bold text-[#065f46] mb-1">Bursary</p>
            <p className="text-sm text-gray-600">
              Learn about eligibility and application process.
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex-1 text-center font-bold px-4 py-2 border border-gray-200 text-[#065f46] rounded hover:bg-[#f3f4f6]"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="flex-1 text-center font-bold px-4 py-2 bg-[#065f46] text-white rounded"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
