import React from 'react'
import { useAuth } from './authetication';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const AuthButton= () => {
  const { isAuthenticated, login, principal, logout } = useAuth()
  const navigate=useNavigate();

  return (
    <>
      {isAuthenticated ? (
     
        <Button  onClick={logout}  variant="outline"><LogOut/> </Button>
     
      ) : (
       
           <Button onClick={login} >Sign Up</Button>
        
      )}
    </>
  )
}

export default AuthButton;