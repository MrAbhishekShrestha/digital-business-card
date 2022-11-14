import reactLogo from './assets/react.svg';
import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';

const App = () => (
  <div className='card'>
    <Info />
    <About /> 
    <Interest /> 
    <Footer /> 
  </div>
);

export default App;
