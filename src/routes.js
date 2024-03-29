import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsandConditions from './pages/TermsandConditions';
import ScrollToTop from './components/ScrollToTop';
import InstitutionPage from './pages/InstitutionPage';
import AboutUs from './pages/AboutUs';
import Layout from './common/Layout';
import NotFound from './components/NotFound';
import Login from './pages/auth/Login';
import Dashboard from './components/Dashboard';
import ComingSoon from './pages/ComingSoon';
import Home from './components/dashboard/Home';
import ForgotPassword from './pages/auth/ForgotPassword';
import NewPassword from './pages/auth/NewPassword';
import PasswordChangeSuccess from './pages/auth/PasswordChangeSuccess';
import Waitlist from './components/dashboard/Waitlist';
import Customers from './components/dashboard/Customers';
import Customer from './components/dashboard/Customer';
import BasicTable from './components/@shared/BasicTable';
import Example from './components/@shared/AdvancedT';
import CustomerTable from './components/@tables/CustomerTable';
import Payins from './components/dashboard/Payins';
import Payouts from './components/dashboard/Payouts';
import SpringStaff from './components/dashboard/SpringStaff';
import AddStaff from './components/dashboard/AddStaff';
import Notification from './components/dashboard/Notification';
import Coupon from './components/dashboard/Coupon';
import Roles from './components/dashboard/Roles';


function Routers() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<LandingPage/>}></Route>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/privacy-policy' element={< PrivacyPolicy />}></Route>
            <Route path='/terms-and-condition' element={< TermsandConditions />}></Route>
            <Route path='/institution' element={< InstitutionPage />}></Route>
            <Route path='/about' element={< AboutUs />}></Route>
            <Route path='*' element={<NotFound/>}/>
          </Route>
          <Route path='/login' element={< Login />}></Route>
          <Route path='/forgot-password' element={< ForgotPassword />}></Route>
          <Route path='/new-password' element={< NewPassword />}></Route>
          <Route path='/new-password-success' element={< PasswordChangeSuccess />}></Route>
          <Route path='/dashboard' element={< Dashboard />}>
            <Route index element={<Home />} />
            <Route path='/dashboard/waitlist' element={< Waitlist />}></Route>
            <Route path='/dashboard/customers' element={< Customers />}></Route>
            <Route path='/dashboard/customer' element={< Customer />}></Route>
            <Route path='/dashboard/basicTable' element={< BasicTable />}></Route>
            <Route path='/dashboard/advanced' element={< Example />}></Route>
            <Route path='/dashboard/customer-table' element={< CustomerTable />}></Route>
            <Route path='/dashboard/payins' element={< Payins />}></Route>
            <Route path='/dashboard/payouts' element={< Payouts />}></Route>
            <Route path='/dashboard/spring-staff' element={< SpringStaff />}></Route>
            <Route path='/dashboard/add-staff' element={< AddStaff />}></Route>
            <Route path='notification' element={< Notification />}></Route>
            <Route path='coupon' element={< Coupon />}></Route>
            <Route path='roles' element={< Roles />}></Route>
          </Route>
          <Route path='/holiday-card' element={< ComingSoon />}></Route>
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default Routers