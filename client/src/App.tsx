import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, Home, About, MBBSAbroad, StudyAbroad, StudyIndia, ContactUs, CanadaAustralia, UKEurope } from './components/paths';
import Footer from './components/Footer';
import { AiOutlineWhatsApp } from 'react-icons/ai';

// import { menuItems } from './assets/utility/utility';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full md:w-[80%] flex flex-col mx-auto relative">
        <Header />

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mbbs_abroad" element={<MBBSAbroad />} />
          <Route path="/study_abroad" element={<StudyAbroad />} />
          <Route path="/uk&Europe" element={<UKEurope />} />
          <Route path="/study_india" element={<StudyIndia />} />
          <Route path="/canada&Australia" element={<CanadaAustralia />} />
          <Route path="/contact_us" element={<ContactUs />} />
        </Routes>
        <a href="https://api.whatsapp.com/send?phone=+919847899217&text=Hello...">
        <AiOutlineWhatsApp className="text-[70px] cursor-pointer text-[#0c4740] fixed bottom-5 right-5  z-20" />

        </a>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
