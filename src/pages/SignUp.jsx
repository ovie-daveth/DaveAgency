import React, { useState } from 'react'
import Helmet from '../components/Helmet'
import signin from '../assets/images/signin.jpg'
import { NavLink } from 'react-router-dom'
import GoogleSignIn from '../components/GoogleSignIn'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app, db } from '../firebaseConfig'
import { serverTimestamp, setDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'


const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const showPasswordEl = () =>{
    setShowPassword(!showPassword)
  }

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  const onChange = (e) =>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
      
    }))
  }

  const handleSubmit =  async (e) => {
    e.preventDefault() //to prevent page refresh

    //To authenticate user
    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      //to add the fullname (you can use this method to add other things say phone number or profiile picture)
      updateProfile(auth.currentUser, {
        displayName: fullname
      })

      //To get our user
      const user = userCredential.user

      //sucess message

      toast.success(`User created sucessfully`)

      //saving to our database. But first we want to delete the password and add time registered
      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp();

      //adding now to database
      await setDoc(doc(db, "users", user.uid), formDataCopy)

      //after signup navigate to homepage
      navigate('/')

    } catch (error) {  //incase of error
      toast.warning(`Can not register this user due to ${error}`)
    }
  }
  

  const {fullname, email, password} = formData

  return <Helmet title={'SignUp'}>
    <section className="w-full">
      <h3 className='text-black font-bold text-center mt-6 text-[1.2rem]'>Sign Up</h3>
      <div className="form_content flex items-center flex-wrap gap-4 justify-center px-6 py-12 max-w-6xl mx-auto">
        <div className="image md:w-[50%] lg:w-[50%] mb-12 md:mb-6">
            <img className=' w-full rounded-2xl' src={signin} alt="formimg" />
        </div>
        <div  className='w-full md:w-[67%] lg:w-[40%] md:ml-14'>
            <form onSubmit={handleSubmit} >
            <input className='mb-6 w-full shadow-md pl-4 text-sm py-2 rounded-sm border-gray-300 focus:outline-none  text-gray-500' type="text" placeholder='Full Name' required id='fullname' value={fullname} onChange={onChange} /> 
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
              <small className='text-gray-500'>Already have an account? <span className='text-red-500'><NavLink to='/signin'>Sign In</NavLink></span></small>
              
              </div>
              <button type='submit' className=' bg-blue-800 text-white font-semibold text-sm rounded-sm py-2 w-full my-6'>SIGN UP</button>
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

export default SignUp
