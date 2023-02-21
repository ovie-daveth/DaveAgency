import React, { useState } from 'react'
import Helmet from '../components/Helmet'
import signin from '../assets/images/signin.jpg'
import { NavLink } from 'react-router-dom'
import GoogleSignIn from '../components/GoogleSignIn'


const ForgotPassword = () => {


  const [email, setEmail] = useState('')

  const onChange = (e) => {
    setEmail(e.target.value)
  }

  // const handleSubmit =  async () => {
  //   await signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });
  // }


  return <Helmet title={'Reset Password'}>
    <section className="w-full">
      <h3 className='text-black font-bold text-center mt-6 text-[1.2rem]'>Reset Password</h3>
      <div className="form_content flex items-center flex-wrap gap-4 justify-center px-6 py-12 max-w-6xl mx-auto">
        <div className="image md:w-[50%] lg:w-[50%] mb-12 md:mb-6">
            <img className=' w-full rounded-2xl' src={signin} alt="formimg" />
        </div>
        <div  className='w-full md:w-[67%] lg:w-[40%] md:ml-14'>
            <form action="" >
              <input className='w-full shadow-md pl-4 text-sm py-2 mb-6 rounded-sm border-gray-300 focus:outline-none  text-gray-500' type="email" placeholder='Email address' required id='email' value={email} onChange={onChange} />
              <div className="aside flex justify-between items-center">
              <small className='text-gray-500'>Don't have an account? <span className='text-red-500'><NavLink to='/signup'>Register</NavLink></span></small>
              <small className=' text-blue-600'><NavLink to='/signin'>SignIn instead</NavLink></small>
              </div>
              <button type='submit' className=' bg-blue-800 text-white font-semibold text-sm rounded-sm py-2 w-full my-6'>SEND RESET EMAIL</button>
             <div className="flex items-center before:border-t before:flex-1 before:border-gray-500 after:border-t after:flex-1 after:border-gray-500">
             <p className='text-center text-black text-sm mx-3'>OR</p>
             </div>
            </form>
            <GoogleSignIn />
        </div>
      </div>
    </section>

  </Helmet>
}

export default ForgotPassword
