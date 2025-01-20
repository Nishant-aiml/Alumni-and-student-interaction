import { Link } from 'react-router-dom';
import { FaBell, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-indigo-600 text-2xl font-bold">AlumNet</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/events" className="text-gray-700 hover:text-indigo-600">Events</Link>
            <Link to="/directory" className="text-gray-700 hover:text-indigo-600">Directory</Link>
            <Link to="/mentorship" className="text-gray-700 hover:text-indigo-600">Mentorship</Link>
            <Link to="/jobs" className="text-gray-700 hover:text-indigo-600">Jobs</Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search alumni, events, jobs..."
                className="w-64 px-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button className="text-gray-600 hover:text-indigo-600">
              <FaBell className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600">
              <FaUser className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
