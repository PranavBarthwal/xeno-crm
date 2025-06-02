import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-white shadow-md px-6 py-10">
      <h1 className="text-2xl font-bold mb-8 text-indigo-600">CRM Dashboard</h1>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <Link to="/create-customer" className="hover:text-indigo-600">Create Customer</Link>
        <Link to="/customers" className="hover:text-indigo-600">Customer List</Link>
        <Link to="/create-order" className="hover:text-indigo-600">Create Order</Link>
        <Link to="/orders" className="hover:text-indigo-600">Order List</Link>

        {/* New single CampaignPage link */}
        <Link to="/campaign" className="hover:text-indigo-600 font-semibold text-indigo-700">
          Campaigns
        </Link>

        <Link to="/communication-log" className="hover:text-indigo-600">Communication Log</Link>
      </nav>
    </div>
  );
};

export default Sidebar;


