import { getAuth, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import Helmet from '../components/Helmet'

import { useNavigate } from 'react-router'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { toast } from 'react-toastify'

const Profile = () => {
  const navigate = useNavigate()
  const [details, setDetails] = useState(false)

  const auth = getAuth()

  function signout(){
    auth.signOut()
    navigate('/')
  }

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  const {name, email} = formData

  function onchange (e) {
    setFormData((preState) =>({
      ...preState,
      [e.target.id]: e.target.value
    }))
  }

  const edit = async () => {
    setDetails(!details)
    if(details){
     try {
      if(auth.currentUser.displayName !== name){
        //update name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name
        })

        // update name in firestore

        const docRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(docRef, {
          fullname: name,
        })
      }
      
        toast.success('Profile Updated')
      
     } catch (error) {
      toast.error("Could not update profile")
     }
    }
    
  }
  return <Helmet title={'My Profile'}>
    <section className=' max-w-6xl mx-auto flex justify-center items-center flex-col'>
      <h1 className='text-center text-3xl text-black font-bold mt-6'>My Profile</h1>
      <div className=' w-full md:w-[50%] mt-6 px-3'>
        <form className=' flex flex-col gap-3'>
          <input disabled={!details} 
          className={`w-full px-6 py-2 text-xl text-gray-700 bg-white border ${details ? 'border-red-300' : 'border-gray-200'} rounded transition ease-out `} type="text" id="name"  value={name}
          onChange={onchange}
          />
          <input disabled={!details} 
          className={`w-full px-6 py-2 text-xl text-gray-700 bg-white border ${details ? 'border-red-300' : 'border-gray-200'} rounded transition ease-out `} type="text" id="email"  value={email}
          onChange={onchange}
          />
         
         <div className=" flex justify-between items-center whitespace-nowrap text-sm sm:text-lg my-6 font-semibold">
          <p className=' text-gray-600'>Edit your profile? <span onClick={edit} className='text-red-600 hover:text-red-700 transition ease-out duration-200 ml-2 cursor-pointer'>
            {
              details ? 'Apply Changes' : 'Edit'
            }
            </span></p>
          <p className=' text-blue-600 hover:text-blue-800 cursor-pointer transition ease-out duration-200' onClick={signout}>Sign Out</p>
         </div>
        </form>
      </div>
    </section>

  </Helmet>
}

export default Profile
