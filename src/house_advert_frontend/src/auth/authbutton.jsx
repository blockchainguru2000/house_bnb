import React from 'react'
import { useAuth } from './authetication';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const AuthButton= () => {
  const { isAuthenticated, login, principal, logout } = useAuth()
  const navigate=useNavigate();
  return (
    <>
      {isAuthenticated ? (
     
        <Button onClick={()=>navigate("/home")}>welcome </Button>
     
      ) : (
       
           <Button onClick={login} >Sign Up To Explore</Button>
        
      )}
    </>
  )
}

export default AuthButton;