
import './login.css';
import React from "react";
function Login() {
    const login = () => {
        alert(`Login function triggered`);
    };
    return (
        <div>
<h2 id="text1">Login to your account!</h2>
        <form  onsubmit={(e) => e.preventDefault()}>
            <h5 className="textform">Enter your Email or Username</h5>
         <input type="text" id="email" placeholder="Email or Username" required/><br />
            <h5 className="textform">Enter your Password</h5>
            <input  type="password" id="password" placeholder=" Password" required/><br />
            <button onclick="login()" class="button" type="submit">Login</button>
            <h3 className="textform1">Don't have account?<a class="textform2" href="Getstarted.html" one>Create an Account</a></h3>
            
        </form>
        </div>
    );
}

export default Login;