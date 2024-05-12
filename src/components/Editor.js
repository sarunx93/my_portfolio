import React from 'react'
import { useNavigate } from 'react-router-dom'
import { usePortfolioContext } from '../context/portfolioContext'

const Editor = () => {
    const navigate = useNavigate()
    const { setUpUser, user, isLoggedIn, logoutUser } = usePortfolioContext()

    const handleLogout = async ()=>{
        await logoutUser()
        navigate('/')
    }
  return (
    <>
        <div>Editor</div>
        <button onClick={handleLogout}>logout</button>
    </>
  )
}

export default Editor