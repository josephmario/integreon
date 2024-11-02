import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DoMore from './components/DoMore';
import OnePartner from './components/OnePartner';
import GlobalTeam from './components/GlobalTeam';
import InnovationShort from './components/InnovationShort';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <DoMore />
      <OnePartner />
      <GlobalTeam />
      <InnovationShort />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
