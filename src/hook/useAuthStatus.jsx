import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

export function useAuthStatus() {
    const [loading, setLoading] = useState(true)
    const [loggedin, setLoggedin] = useState(false)

    useEffect(() => {
        const auth=getAuth()
        onAuthStateChanged(auth, (user) =>{
            if(user){
                setLoggedin(true)
            }
            setLoading(false)
        })
    }, [])
    
  return {loggedin, loading}
}




