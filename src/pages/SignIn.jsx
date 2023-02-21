import React, { useState } from 'react'
import Helmet from '../components/Helmet'
import signin from '../assets/images/signin.jpg'
import { NavLink } from 'react-router-dom'

const Signin = () => {

  const [showPassword, setShowPassword] = useState(false)

  const showPasswordEl = () =>{
    setShowPassword(!showPassword)
  }

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onChange = (e) =>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
      
    }))
  }

  const {email, password} = formData

  return <Helmet title={'SignIn'}>
    <section className="w-full">
      <h3 className='text-black font-bold text-center mt-6 text-[1.2rem]'>Sign In</h3>
      <div className="form_content flex items-center flex-wrap gap-4 justify-center px-6 py-12 max-w-6xl mx-auto">
        <div className="image md:w-[50%] lg:w-[50%] mb-12 md:mb-6">
            <img className=' w-full rounded-2xl' src={signin} alt="formimg" />
        </div>
        <div  className='w-full md:w-[67%] lg:w-[40%] md:ml-14'>
            <form action="">
              <input className='w-full shadow-md pl-4 text-sm py-2 rounded-sm border-gray-300 focus:outline-none  text-gray-500' type="email" placeholder='Email address' required id='email' value={email} onChange={onChange} />
             <div className="pass w-full relative my-6">
             <input className=' shadow-md w-full pl-4 text-sm py-2 rounded-sm border-gray-300 focus:outline-none text-gray-500'  
             type={showPassword ? 'text' : 'password'} 
             placeholder='Password' required id="password" value={password} onChange={onChange} /> 
              <p className='absolute top-1 right-2 cursor-pointer'
              onClick={showPasswordEl}
              > { showPassword ? 
             (<i class="ri-eye-off-line"></i>)
             : (<i class="ri-eye-line "></i>)
             }</p>
             </div>
              <div className="aside flex justify-between items-center">
              <small className='text-gray-500'>Don't have an account? <span className='text-red-500'><NavLink to='/signup'>Register</NavLink></span></small>
              <small className=' text-blue-600'><NavLink to='/forgotpassword'>Forgot Password?</NavLink></small>
              </div>
              <button type='submit' className=' bg-blue-800 text-white font-semibold text-sm rounded-sm py-2 w-full my-6'>SIGN IN</button>
              <p className='text-center text-black text-sm'>OR</p>
            </form>
            <button className=' bg-red-600 text-white flex items-center justify-center gap-2 rounded-sm font-semibold text-sm py-2 w-full my-6'> <span className=' text-white text-1xl'><i class="ri-google-fill"></i></span> CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    </section>

  </Helmet>
}

export default Signin
