import './App.css';
import React, { useState } from 'react';
import Navigation from './Components/Navigation';
import LoginForm from './Components/login';



function App() {

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(prevState => !prevState);
  };

  return (
    <div>
      <Navigation toggleForm={toggleForm}></Navigation>
      <LoginForm toggleForm={toggleForm} isSignIn={isSignIn}></LoginForm>
    </div>
    
  );
}

export default App;
