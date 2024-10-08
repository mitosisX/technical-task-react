import { Route, Routes } from "react-router-dom";

import AccountLogin from "../pages/authentication/AccountLogin";
import GettingStarted from "../components/user/GettingStarted";
import ScheduleSwingAnalysis from "../components/user/ScheduleSwigAnalysis";
import AccountHistory from "../components/user/AccountHistory";
import FittingProgress from "../components/user/FittingProgress";
import MyProfile from "../components/user/MyProfile";
import Home from "../components/user/Home";
import ScheduleFitting from "../components/user/ScheduleFitting";

import UserProfiles from "../components/admin/UserProfiles";
import GettingStartedAdmin from "../components/admin/GettingStartedAdmin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AccountLogin />} />

      {/* Consumer */}
      <Route path="/home" element={<Home />} />
      <Route path="/getting-started" element={<GettingStarted />} />
      <Route path="/account-history" element={<AccountHistory />} />
      <Route path="/fitting-progress" element={<FittingProgress />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/schedule-fitting" element={<ScheduleFitting />} />
      <Route
        path="/schedule-swig-analysis"
        element={<ScheduleSwingAnalysis />}
      />

      {/* Admin */}
      <Route path="/user-profiles" element={<UserProfiles />} />
      <Route path="/get-started-admin" element={<GettingStartedAdmin />} />
    </Routes>
  );
};

export default AppRoutes;
