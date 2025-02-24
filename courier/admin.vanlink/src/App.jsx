import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllQuotations from "./Feature/Quotations/AllQuotations";
import Admin from "./Feature/Admin/Admin";
import NotFound from "./pages/NotFound";
import AdminProtected from "./helpers/AdminProtected";
import LoginForm from "./pages/Login";
import Adminlayout from "./Feature/Admin/Adminlayout";
import QuotationsDetails from "./UI/QuotationsDetails";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* admin  */}
        <Route
          path="/admin"
          element={
            <AdminProtected>
              <Adminlayout />
            </AdminProtected>
          }
        >
          <Route path="dashboard" index element={<Admin />} />
          <Route path="all-quotations" element={<AllQuotations />} />
          <Route path="quote-detail" element={<QuotationsDetails />} />

          {/* <Route path="/admin/employeers" element={<AdminEmployeerList />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/view-jobs" element={<AdminViewJobs />} />
          <Route path="/admin/pending-jobs" element={<PendingJobs />} /> */}
        </Route>
        <Route path="/" element={<LoginForm />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
