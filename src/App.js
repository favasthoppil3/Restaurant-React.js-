import './App.css';
import Header from './component/Header'
import Home from './component/Home'
import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Details from './component/Details';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/restaurant/details/:id' element={<Details/>}/>
      </Routes>
      </Router>
  );
}

export default App;
