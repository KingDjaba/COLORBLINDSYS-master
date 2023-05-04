import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    const savedEmail = JSON.parse(localStorage.getItem('Email'));
    const savedPass = JSON.parse(localStorage.getItem('Password'));

    useEffect(() => {
     
      if (savedEmail) {
       setEmail(email);
      }
    }, []);

    useEffect(() => {
        
        if (savedPass) {
         setPassword(password);
        }
      }, []);


    const handleSubmit = (e) => {
    e.preventDefault()
    if (savedEmail === email&&savedPass === password) {
    localStorage.setItem ("authenticated", true);
          navigate("/dashboard");
    }else{ 
        alert("Please Enter valid Credential")
    }
};

    const gotoSignUpPage = () => navigate("/signup");

    return (
        <div className='login__container'>
            <h2>Login </h2>
            <form className='login__form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    minLength={8}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='loginBtn'>SIGN IN</button>
                <p>
                    Don't have an account?{" "}
                    <span className='link' onClick={gotoSignUpPage}>
                        Sign up
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;