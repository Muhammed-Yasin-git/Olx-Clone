import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/NavBar'
import SecondNavbar from './components/SecondNavBar'
import Footer from './components/Footer'
import { auth } from './Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { db } from './Firebase'
import { collection, getDocs } from 'firebase/firestore'

export const UserDataContext = createContext();
function Layout({children}) {
  const [loginedUser,setLoginedUser] = useState()
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        console.log(user)
        setLoginedUser((user.uid).toString())
      }
    })
 
    
  
  },[])
  // console.log('logged',logedUser)
  return (
    <>
    <UserDataContext.Provider value={loginedUser} >
    <Navbar />
    <SecondNavbar/>
    {children}
    <Footer/>
    </UserDataContext.Provider>
    </>
  )
}

export default Layout
