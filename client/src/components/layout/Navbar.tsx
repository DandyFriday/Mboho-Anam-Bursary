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
            className="h-9 w-auto"
          />
          <span className="font-bold text-primary text-lg">
            Mboho Anam
          </span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className="hover:text-gold text-primary">
            Home
          </NavLink>

          <NavLink to="/contact" className="hover:text-gold text-primary">
            Contact
          </NavLink>

          {/* Bursary */}
          <div className="relative group">
            <button className="text-primary hover:text-gold">
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
            className="px-4 py-1.5 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-1.5 bg-primary text-white rounded hover:bg-opacity-90 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
