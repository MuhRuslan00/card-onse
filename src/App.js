import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import FullCard from './components/FullCard';


function App() {
  const data = [
  {
    title: 'HTML',
    diskription: 'This is HTML'
  },

  {
    title: 'CSS',
    diskription: 'This is CSS'
  },

  {
    title: 'VUE',
    diskription: 'This is VUE'
  },

  {
    title: 'Angular',
    diskription: 'This is Angular'
  },

  {
    title: 'React',
    diskription: 'This is React'
  },

  {
    title: 'GULP',
    diskription: 'This is GULP'
  },



]



  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero data={data} />}/>
        <Route path='/card/:title' element={<FullCard data={data} />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
