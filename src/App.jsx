import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { LoanForm } from './components/LoanForm';
import { EmiCalculator } from './components/EmiCalculator ';
import TermsAndServices from './pages/TermsAndServices ';
import { Service } from './pages/Service';
import Contactus from './pages/Contactus';
import AboutUs from './pages/AboutUs';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
    
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/apply" element={<LoanForm />} />
        <Route path='/emi-calculator' element={<EmiCalculator/>} /> 
        <Route path='/terms' element={<TermsAndServices/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
