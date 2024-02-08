
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
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
        const res = await fetch('/api/auth/signup', {
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
        } catch (error) {
         setLoading(false);
         setError(error.message);
        console.log(data);  
        }
        
};
      console.log(formData);
             
    return (
        <div className='signup__container'>
            <h2>Sign up </h2>
            <form className='signup__form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    required
                    onChange={handleChange}
                />
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    required
                    onChange={handleChange}
                />
                <label htmlFor='tel'>Phone Number</label>
                <input
                    type='tel'
                    name='tel'
                    id='tel'
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
                    {loading ? 'Loading...' : 'Sign Up'}
                </button>
                </form>
                   <p>Already have an account?</p>
                   <Link to={'/Login'}>
                     <span className='link' onClick={handleSubmit}>
                        Login
                     </span>
                </Link>
                {error && <p>{error}</p>}            
        </div>
    );
};

