import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate()
    
    
   
    

    const handleSubmit = (e) => {
        e.preventDefault();

       

    };
    const gotoLoginPage = () => navigate("/loginpage");

    

    return (
        <div className='signup__container'>
            <h2>Sign up </h2>
            <form className='signup__form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                
                <label htmlFor='tel'>Confirm Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    minLength={8}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='signupBtn'>SIGN UP</button>
                <p>
                    Already have an account?{" "}
                    <span className='link' onClick={gotoLoginPage}>
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
};



export default Signup;