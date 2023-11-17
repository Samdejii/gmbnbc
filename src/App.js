//import './App.css';
//import Aboutglobal from './components/Aboutglobal';
//import Activities from './components/Activities';
import Events from './components/Events';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import History from './components/History'
//import Team from './components/Team';
import { Routes, Route } from 'react-router-dom'
import Board from './components/Board';
import Managment from './components/Managment';
import Homem from './components/Homem';
import NBC from './components/NBC';
import HFM from './components/HFM';
import Abia from './components/states/Abia';
import SFM from './components/SFM';
import Etche from './components/specialized/Etche';
import TMR from './components/TMR';
import HR from './components/HR';
import Blank from './components/Blank';
import Training from './components/Training';
import Media from './components/Media';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar />  
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/history' element={<History />} />
      <Route path='/board' element={ <Board />} />
      <Route path='/management' element={ <Managment />} />
      <Route path='/home_missionaries' element={ <Homem />} />
      <Route path='/NBC' element={ <NBC />} />
      <Route path='/hfm' element={ <HFM />} />
      <Route path='/abia' element={ <Abia />} />
      <Route path='/sfm' element={ <SFM />} />
      <Route path='/etche' element={ <Etche />} />
      <Route path='/tmr' element={ <TMR />} />
      <Route path='/hr' element={ <HR />} />
      <Route path='/404' element={ <Blank />} />
      <Route path='/training' element={ <Training />} />
      <Route path='/events' element={ <Events />} />
      <Route path='/media' element={ <Media />} />
      <Route path='/contact' element={ <Contact />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
