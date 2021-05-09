import './App.css';
import Header from './components/Header';
import { AppBar } from '@material-ui/core';
import LeftNavigation from './components/LeftNavigation';
import Footer from './components/Footer'


function App() {
  return (
    <div className="">
      <LeftNavigation></LeftNavigation>
      <Footer>Copyright @ Jonathan Yang 2021</Footer>
      
    </div>
    
  );
}

export default App;
