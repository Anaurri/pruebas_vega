import { Route, BrowserRouter as Router, Routes, Redirect } from 'react-router-dom';
import Data from './screens/Data';

import './App.css';

function App() {
  return (
    <Router>
      <div className='bg' style={{ backgroundColor: "#171721" }}>
        <div className="container mt-5 pt-5 pb-5">
          <Routes>
            <Route exact path="" element={<Data/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
