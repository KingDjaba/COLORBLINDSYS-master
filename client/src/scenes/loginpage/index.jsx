import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));


    useEffect(() => {
      const savedEmail = JSON.parse(localStorage.getItem('Email'));
      if (savedEmail) {
       setEmail(email);
      }
    }, []);

    useEffect(() => {
        const savedPass = JSON.parse(localStorage.getItem('Password'));
        if (savedPass) {
         setPassword(password);
        }
      }, []);


    const handleSubmit = (e) => {
    e.preventDefault()
    
          navigate("/dashboard");

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