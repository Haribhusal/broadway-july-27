import HeaderComponent from './components/Header'
import MenuLinks from './components/MenuLinks';
import ServicesComponent from './components/Services';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
   
    <div>
      <MenuLinks></MenuLinks>
    </div>
  );
}

export default App;
