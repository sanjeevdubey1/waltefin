import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { LoanForm } from './components/LoanForm';
import { EmiCalculator } from './components/EmiCalculator ';
import TermsAndServices from './pages/TermsAndServices ';
import { Service } from './pages/Service';
import Contactus from './pages/Contactus';
import AboutUs from './pages/AboutUs';
import ScrollToTop from './ScrollToTop';
import Blogs from './pages/Blogs';
import { BlogHomeLoanOptions } from './pages/blogs/BlogHomeLoanOptions ';
import { BlogBusinessLoanPanvel } from './pages/blogs/BlogBusinessLoanPanvel';
import LoanDocuments from './pages/LoanDocuments';
import RealEstatePanel from './pages/RealEstatePanel';
import ApplyNowForm from './pages/ApllyNowForm';
import BlogHomeLoanPanvel from './pages/blogs/BlogHomeLoanPanvel';
import BlogImproveCIBILScore from './pages/blogs/BlogImproveCIBILScore';
import BlogHomeLoanIndia from './pages/blogs/BlogHomeLoanIndia';
import HomeLoanPanvelBlog from './pages/blogs/HomeLoanPanvelBlog';
import Mumbai3HomeLoansBlog from './pages/blogs/Mumbai3HomeLoansBlog';

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
        <Route path='/loan-documents' element={<LoanDocuments/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blog/home-loan-options' element={<BlogHomeLoanOptions/>}/>
        <Route path='/blog/business-loan-tips' element={<BlogBusinessLoanPanvel/>}/>
        <Route path='/blog/best-home-loan-provider' element={<BlogHomeLoanPanvel/>}/>
        <Route path='/blog/how-to-improve-cibil-score-india' element={<BlogImproveCIBILScore/>}/>
        <Route path='/blog/how-to-get-a-home-loan-india' element={<BlogHomeLoanIndia/>}/>
        <Route path='/blog/home-loan-in-panvel' element={<HomeLoanPanvelBlog/>}/>
        <Route path='/blog/mumbai-3-home-loans' element={<Mumbai3HomeLoansBlog/>}/>
        <Route path='/real-estate' element={<RealEstatePanel/>}/>
        <Route path='/apply-now' element={<ApplyNowForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
