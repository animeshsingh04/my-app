import './App.css';
import LoginButton from './LoginAuth'
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './login';
import Register from './Register';
import Dashboard from './Dashboard';

const App = () => {
  // const { user, isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      
        
    </div>
  );
}

export default App;
