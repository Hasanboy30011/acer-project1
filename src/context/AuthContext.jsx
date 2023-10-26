import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [isAuth,setIsAuth] = useState(false)
    useEffect(()=>{
   
    },[isAuth])
  return (
    <AuthContext.Provider value={{isAuth,setIsAuth}}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider