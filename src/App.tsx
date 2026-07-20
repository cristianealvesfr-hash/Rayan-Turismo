import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ExperienceDetail } from './pages/ExperienceDetail';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { PasseiosPatacho } from './pages/PasseiosPatacho';
import { FloatingActions } from './components/shared/FloatingActions';
import { LgpdBanner } from './components/shared/LgpdBanner';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/passeios-em-patacho" element={<PasseiosPatacho />} />
          <Route path="/passeio/:id" element={<ExperienceDetail />} />
        </Routes>
        <FloatingActions />
        <LgpdBanner />
      </div>
    </Router>
  );
}

export default App;
