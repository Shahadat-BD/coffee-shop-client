import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {googleSignIn,setUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


    const handleGoogleLogin = () =>{
            googleSignIn()
            .then(data => {
                setUser(data.user)
                navigate(location?.state ? location.state : "/");
            })
    }

    return (
        <div className='text-center my-10'>
              <button onClick={handleGoogleLogin} className='font-bold btn btn-warning'>login with google</button>
        </div>
    );
};

export default Login;