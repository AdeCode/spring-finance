import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import FooterSection from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsandConditions from './pages/TermsandConditions';
import ScrollToTop from './components/ScrollToTop';
import InstitutionPage from './pages/InstitutionPage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <ScrollToTop>
      <div className="App bg-background h-auto">
        <Navbar />
        <Routes>
          <Route exact path='/' element={< LandingPage />}></Route>
          <Route exact path='/privacy-policy' element={< PrivacyPolicy />}></Route>
          <Route exact path='/terms-and-condition' element={< TermsandConditions />}></Route>
          <Route exact path='/institution' element={< InstitutionPage />}></Route>
          <Route exact path='/about' element={< AboutUs />}></Route>
        </Routes>
        <FooterSection />
      </div>
      </ScrollToTop>
    </Router>

  );
}

export default App;
