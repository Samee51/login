import React, { useEffect } from 'react';
import { useNavigate , Outlet  } from 'react-router-dom';

const ProtectedRoute = ({isAuthenticated}) => {

    const navigate = useNavigate();
   
    useEffect(() => {!isAuthenticated && navigate('/login')} ,[])
    

    
    return(isAuthenticated ? <Outlet/> : null );
   

}

export default ProtectedRoute ;