
import './App.css';
import Development from './components/Developmentservices';

// import Delegate from './components/Delegate';
// import Development from './components/Developmentservices';
// import Footer from './components/Footer';
import Infrastructure from './components/Infrastructure';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
// import Letstalk from './components/Letstalk';
// import Navbar from './components/Navbar';
import OurPartners from './components/OurPartners';
// import Resolute from './components/Resolute';
import Delegate from "./components/Delegate"
import Resolute from './components/Resolute';
import Letstalk from "./components/Letstalk"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
     <Development />
     <Infrastructure />
  <OurPartners />
  <Delegate />
  <Resolute />
  <Letstalk />
  <Footer />
    </div>
  );
}

export default App;
