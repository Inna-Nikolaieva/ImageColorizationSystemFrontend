import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from "./pages/RegistrationPage";
import AuthorizationPage from "./pages/AuthorizationPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
      </Routes>
    </Router>
  );
};

export default App;

