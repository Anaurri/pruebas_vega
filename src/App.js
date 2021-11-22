import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './screens/Home';

import './App.css';

function App() {
  return (
    <Router>
      <div className='bg' >
        <div className="container mt-5 pt-5 pb-5">
          <Routes>
            <Route exact path="" element={<Home/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
