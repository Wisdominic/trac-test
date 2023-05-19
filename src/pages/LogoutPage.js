import React, { useEffect } from 'react'
import { useAuth } from '../service/Theme'
import { useNavigate } from 'react-router-dom'

export default function LogoutPage() {
    const navigate = useNavigate(); 
    const {logout}= useAuth()
   
    useEffect(() => {
        (async () => {
            await logout();
            navigate("/login");
          })();
    }, [])
    
  return (
    <div>LogoutPage</div>
  )
}
