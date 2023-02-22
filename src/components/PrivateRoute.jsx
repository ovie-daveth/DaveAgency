import React from 'react'
import { Outlet, Navigate} from 'react-router'
import {useAuthStatus} from '../hook/useAuthStatus'

const PrivateRoute = () => {
  const { loggedin, loading } = useAuthStatus()
  if(loading) {
    return <h3>Loading...</h3>
  }

  return loggedin ? <Outlet /> : <Navigate to="/signin" />
}

export default PrivateRoute
