import React from 'react';
import './Navigation.scss'

function Navigation({ toggleForm}) {
    return (
        <header className="header">
            <div className="logo">SuckMyDick</div>
            <nav>
                <div>
                    <button className="loginButton" onClick={toggleForm}>Login</button>
                    <button className="signupButton" onClick={toggleForm}>Sign Up</button>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
