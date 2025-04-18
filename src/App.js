import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router'; // using testreact-b's choice
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer'; 

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper"> 
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
