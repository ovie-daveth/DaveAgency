import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import Helmet from '../components/Helmet'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'

const Profile = () => {
  const navigate = useNavigate()

  const auth = getAuth()

  function signout(){
    auth.signOut()
    navigate('/')
  }

  const [formData, setFormData] = useState({
    name: 'Omokefe Ovie',
    email: 'oviedavid77@gmail.com'
  })
  const {name, email} = formData
  return <Helmet title={'My Profile'}>
    <section className=' max-w-6xl mx-auto flex justify-center items-center flex-col'>
      <h1 className='text-center text-3xl text-black font-bold mt-6'>My Profile</h1>
      <div className=' w-full md:w-[50%] mt-6 px-3'>
        <form className=' flex flex-col gap-3'>
          <input disabled  className='w-full px-6 py-2 text-xl text-gray-700 bg-white border border-gray-200 rounded transition ease-out ' type="text" id="name"  value={name}/>
          <input disabled className='w-full px-6 py-2 text-xl text-gray-700 bg-white border border-gray-200 rounded transition ease-out ' type="text" id="email"  value={email}/>
         
         <div className=" flex justify-between items-center whitespace-nowrap text-sm sm:text-lg my-6 font-semibold">
          <p className=' text-gray-600'>Edit your profile? <span className='text-red-600 hover:text-red-700 transition ease-out duration-200 ml-2 cursor-pointer'>Edit</span></p>
          <p className=' text-blue-600 hover:text-blue-800 cursor-pointer transition ease-out duration-200' onClick={signout}>Sign Out</p>
         </div>
        </form>
      </div>
    </section>

  </Helmet>
}

export default Profile
