import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Request from './Components/Request/Request';
import Contact from './Components/Contactus/Contact';
import OurAchivment from './Components/OurAchivments/OurAchivment';
import Ourprocess from './Components/Imp&exp/Ourprocess';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services  />} />
          <Route path='/request' element={<Request />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/achivment' element={<OurAchivment />} />
          <Route path='/imp&exp' element={<Ourprocess />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
