import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import SuccessPage from './SuccessPage';

import './App.css'; // Import custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">Home</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              </ul>
            </div>
          </div>
        </nav>
        <div className=" mt-4">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
    <h2 className="text-center mb-5">Welcome to Home Page</h2>
    <Link to="/login" className="btn btn-primary">Login</Link>
  </div>
);

export default App;
