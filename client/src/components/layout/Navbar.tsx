import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={assets.logo1}
            alt="Mboho Anam Logo"
            className="h-14 w-auto"
          />
          <span className="font-bold text-[#065f46] text-[30px]">
            Mboho Anam
          </span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className="font-bold hover:text-gold text-[#065f46]">
            Home
          </NavLink>

          <NavLink to="/contact" className="font-bold hover:text-gold text-[#065f46]">
            Contact
          </NavLink>

          {/* Bursary */}
          <div className="relative group">
            <button className="font-bold text-[#065f46] hover:text-gold">
              Bursary
            </button>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow rounded w-56">
              <p className="px-4 py-3 text-sm text-dark">
                Learn about eligibility, requirements and application process for the Mboho Anam Bursary.
              </p>
            </div>
          </div>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="font-bold px-4 py-1.5 border border-[#f3f4f6] text-[#065f46] rounded hover:bg-[#f3f4f6] hover:text-gold transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="font-bold px-4 py-1.5 border border-[#f3f4f6] text-[#065f46] rounded hover:bg-[#f3f4f6] hover:text-gold  transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
