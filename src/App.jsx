import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;