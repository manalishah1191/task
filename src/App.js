
import './App.css';
import { Footer } from './components/layout/Footer';
import {Navbar} from './components/layout/Navbar';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Page1/>
      <Page2/>
      <Footer/>
    </div>
  );
}

export default App;
