import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsandConditions from './pages/TermsandConditions';
import ScrollToTop from './components/ScrollToTop';
import InstitutionPage from './pages/InstitutionPage';
import AboutUs from './pages/AboutUs';
import Layout from './common/Layout';
import NotFound from './components/NotFound';

function App() {
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
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
