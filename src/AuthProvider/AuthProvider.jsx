import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState([])
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () =>{
        setLoading(true)
       return  signInWithPopup(auth,googleProvider)
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setLoading(false)
            setUser(currentUser)
        });
        return () =>{
            unSubscribe()
        }
      },[])

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const userInfo = {
        googleSignIn,
        user,
        setUser,
        loading,
        logOut
    }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;