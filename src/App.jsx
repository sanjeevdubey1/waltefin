import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { LoanForm } from './components/LoanForm';
import { EmiCalculator } from './components/EMICalculator ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/apply" element={<LoanForm />} />
        <Route path='/emi-calculator' element={<EmiCalculator/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
