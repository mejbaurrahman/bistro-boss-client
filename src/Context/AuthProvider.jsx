
import { createContext } from 'react'
import app from '../Firebase/Firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext(null);
const auth = getAuth(app)
export default function AuthProvider({children}) {
    
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
 
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    }, [])
    const authInfo={
        user,
        loading,
        login,
        createUser,
        logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
