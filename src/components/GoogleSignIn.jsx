import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';



const GoogleSignIn = () => {

    const navigate = useNavigate()

    const handleSignin = async () => {
        
        try {
            const auth = getAuth()
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider)
        const user = result.user;

        //add conditions before adding to data base: if user already exist
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)

        if(!docSnap.exists()){
            await setDoc(docRef, {
                name: user.displayName,
                email: user.email,
                timestamp: serverTimestamp()
            })
        } 
        navigate("/")
            
        } catch (error) {
            toast.error('Something Went wrong, try again in few minutes')
        }
    }
  return             <button onClick={handleSignin} className=' bg-red-600 text-white flex items-center justify-center gap-2 rounded-sm font-semibold text-sm py-2 w-full my-6'> <FcGoogle className='text-2xl bg-white rounded-full p-1'/> CONTINUE WITH GOOGLE</button>
}

export default GoogleSignIn
