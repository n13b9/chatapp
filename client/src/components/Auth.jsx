import React, {useState} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'

import signInImage from '../assets/signup.jpeg'

const cookies = new Cookies();

const initialState = {
    fullName:'',
    username:'',
    password:'',
    phoneNumber:'',
    avatarURL:''
}

const Auth = () => {
    const [isSignup, setIsSignup] = useState(true)
    const [form, setForm] = useState(initialState);

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})

        
    }

    const switchMode = ()=> {
        setIsSignup((prevIsSignup)=>!prevIsSignup); 
    }

    const handleSubmit =async (e)=> {
        e.preventDefault();

        const {fullName,username,password,phoneNumber,avatarURL} = form;

        const URL = 'http://localhost:5000/auth';

        const {data:{token,userId,hashedPassword}} = await axios.post(`${URL}/${isSignup ? 'signup':'login'}`, {
            username,password,fullName,phoneNumber,avatarURL,
        });

        cookies.set('token',token);
        cookies.set('username',username);
        cookies.set('fullName',fullName);
        cookies.set('userId',userId);

        if(isSignup) {
            cookies.set('phoneNumber',phoneNumber);
            cookies.set('avatarURL',avatarURL);
            cookies.set('hashedPassword',hashedPassword);
        }

        window.location.reload();
    }

  return (
    <div className='auth__form-container'>
        <div className='auth__form-container_fields'>
            <div className='auth__form-container_fields-content'>
                <p> {isSignup  ? 'SignUp':'SignIn'}</p>
                <form onSubmit={handleSubmit} action="">
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'> 
                            <label htmlFor='fullName'>Full Name</label>
                            <input
                                name='fullName'
                                type='text'
                                placeholder='full name'
                                onChange={handleChange}
                                required                            
                            ></input>
                        </div>
                    )}
                    <div className='auth__form-container_fields-content_input'> 
                            <label htmlFor='username'>Username</label>
                            <input
                                name='username'
                                type='text'
                                placeholder='username'
                                onChange={handleChange}
                                required                            
                            ></input>
                    </div>
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'> 
                            <label htmlFor='Phone number'> Phone Number</label>
                            <input
                                name='phone number'
                                type='text'
                                placeholder='Phone Number'
                                onChange={handleChange}
                                required                            
                            ></input>
                        </div>
                    )}
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'> 
                            <label htmlFor='avatar url'>Avatar Url</label>
                            <input
                                name='avatar url'
                                type='text'
                                placeholder='avatar url'
                                onChange={handleChange}
                                required                            
                            ></input>
                        </div>
                    )}
                    <div className='auth__form-container_fields-content_input'> 
                            <label htmlFor='passowrd'>Password</label>
                            <input
                                name='password'
                                type='password'
                                placeholder='Password'
                                onChange={handleChange}
                                required                            
                            ></input>
                    </div>
                    {isSignup && (
                    <div className='auth__form-container_fields-content_input'> 
                            <label htmlFor='confirm passowrd'>Confirm Password</label>
                            <input
                                name='confirm password'
                                type='password'
                                placeholder='Confirm Password'
                                onChange={handleChange}
                                required                            
                            ></input>
                    </div>
                    )}
                    <div className='auth__form-container_fields-content_buttion'>
                        <button> 
                            {isSignup ? 'Sign Up':'Sign In'}
                        </button>
                    </div>
                </form>
                <div className='auth__form-container_fields-account'>
                        <p> 
                            {isSignup ? 'already have account?' : 'Dont have an account?'}
                            <span onClick={switchMode}>
                                {isSignup ? 'sign In': 'sign Up'}
                            </span>
                        </p>
                </div>
            </div>
        </div>
        <div className='auth__form-container_image'>
            <img src={signInImage} alt='sign in' />
        </div>
    </div>
  )
}

export default Auth