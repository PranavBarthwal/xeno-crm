import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

// Page Components
import LandingPage from "./LandingPage"; // Import landing page
import DashboardHome from "./components/DashboardHome";
import CreateCustomer from "./components/CreateCustomer";
import CustomerList from "./components/CustomerList";
import CreateOrder from "./components/CreateOrder";
import OrderList from "./components/OrderList";
import CampaignPage from "./components/CampaignPage";
import CommunicationLogPage from "./components/CommunicationLog";

function App() {
  const location = useLocation();
  const showSidebar = location.pathname !== "/";

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <div className={showSidebar ? "ml-64 w-full min-h-screen bg-gray-50 p-6" : "w-full"}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/create-customer" element={<CreateCustomer />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/campaign" element={<CampaignPage />} />
          <Route path="/communication-log" element={<CommunicationLogPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;







