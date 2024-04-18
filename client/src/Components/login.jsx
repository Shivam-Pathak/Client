import React, { useState } from 'react';
import './login.scss'; // Import CSS file for styling

function Login({toggleForm,isSignIn}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const handelName = (event) => {
    setName(event.target.value);
  }

  const handelEmail = (event) => {
    setEmail(event.target.value);
  }

  const handelPassword = (event) => {
    setPassword(event.target.value);
  }

  const handelSignup = (event) => {
    event.preventDefault();
    const obj = {
      name,
      email,
      password
    }
    console.log(obj);
    setEmail("");
    setName("");
    setPassword("");
    console.log(obj);
  }

  const handelLogin = (event) => {
    event.preventDefault();
    const obj = {
      email,
      password
    }
    console.log(obj);
    setEmail("");
    setPassword("");
    console.log(obj);
  }


  return (
    <div className={`container box ${isSignIn ? '' : 'active'}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handelSignup}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" value={name} onChange={handelName} />
          <input type="email" placeholder="Email" value={email} onChange={handelEmail} />
          <input type="password" placeholder="Password" value={password} onChange={handelPassword} />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handelLogin}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" value={email} onChange={handelEmail} />
          <input type="password" placeholder="Password" value={password} onChange={handelPassword} />
          <a href="#">→ Forget Your Password? ←</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className={`hidden ${isSignIn ? 'active' : ''}`} id="login" onClick={toggleForm}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className={`hidden ${isSignIn ? '' : 'active'}`} id="register" onClick={toggleForm}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
