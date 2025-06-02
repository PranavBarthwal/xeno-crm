// LandingPage.jsx
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-white to-indigo-200 flex items-center justify-center px-6">
  <div className="text-center max-w-3xl">
    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
      Welcome to <span className="text-indigo-600">Smart CRM</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-600 mb-10">
      Streamline customer relationships. Manage orders. Run impactful campaigns — all in one place.
    </p>
    <Link
      to="/dashboard"
      className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
    >
      Go to Dashboard
    </Link>
  </div>
</div>

    
  );
};

export default LandingPage;
