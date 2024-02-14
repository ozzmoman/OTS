
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
        [e.target.id]: e.target.value,
    });
};

 //   const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        setLoading(true);
        const res = await fetch('/api/auth/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });
         const data = await res.json();
         if (data.success === false) {
            setError(data.message);
            return;
         }  
         setLoading(false);
         setError(null);
         navigate("/Dashboard");
        } catch (error) {
         setLoading(false);
         setError(error.message);
        }
        
};
      console.log(formData);
             
    return (
        <div className='signup__container'>
            <h2>Sign in </h2>
            <form className='signup__form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    required
                    onChange={handleChange}
                />
                <label htmlFor='tel'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    minLength={8}
                    required
                    onChange={handleChange}
                />
                <button disabled={loading} className='signupBtn'>
                    {loading ? 'Loading...' : 'Sign In'}
                </button>
                </form>
                   <p>Dont have an account?</p>
                   <Link to={'/register'}>
                     <span className='link'>
                        Sign up
                     </span>
                </Link>
                {error && <p>{error}</p>}            
        </div>
    );
};

