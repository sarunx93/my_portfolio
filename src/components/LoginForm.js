import React,{useRef, useState} from 'react'
import styled from 'styled-components'


const LoginForm = () => {
    const form = useRef()
    const email = useRef()
    const password = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({
            email: email.current.value,
            password: password.current.value
        })
    }
    return (
        <>
            <Header className='heading-title'>LoginForm</Header>
       
            <Wrapper>
                <form action="" className='form-itself'>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        name='email'
                        placeholder='email'
                        className='input-field'
                        ref={email} 
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text"
                        name='password'
                        placeholder='password'
                        className='input-field'
                        ref={password} 
                    />
                    <button onClick={handleSubmit}>
                        Login
                    </button>
                </form>
            </Wrapper>
            
            
        
        </>
    )
}


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    flex-direction: column;

    .form-itself{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .input-field {
        width: 20rem;
        height: 3rem;
        padding: 0.3em;
        outline: none;
        border: 2px solid var(--orange);
        border-radius: 8px;
        font-size: 16px;
        margin-left: 0.5rem;
      }
    
`

const Header = styled.h2`
    text-align: center
`

export default LoginForm