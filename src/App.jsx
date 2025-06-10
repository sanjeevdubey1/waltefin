import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { LoanForm } from './components/LoanForm';
import { EmiCalculator } from './components/EmiCalculator ';
import TermsAndServices from './pages/TermsAndServices ';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/apply" element={<LoanForm />} />
        <Route path='/emi-calculator' element={<EmiCalculator/>} /> 
        <Route path='/terms' element={<TermsAndServices/>}/>
      </Routes>
    </Router>
  );
}

export default App;
