import React from 'react'
import LoginForm from '../components/LoginForm'
import Editor from '../components/Editor'
import { usePortfolioContext } from '../context/portfolioContext'

const AdminPanel = () => {
  const { setUpUser, user, isLoggedIn, logoutUser } = usePortfolioContext()
  
  return (
    <>
      {
        !user ? 
          <LoginForm/>
          :
          <Editor/>
      }
     
    </>
  )
}

export default AdminPanel