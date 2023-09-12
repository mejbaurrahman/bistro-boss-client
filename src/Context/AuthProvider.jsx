
import { createContext } from 'react'
import app from '../Firebase/Firebase.init';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext('');
const auth = getAuth(app)
export default function AuthProvider({children}) {
    
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider()

    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const socialLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const updateUser =(name, photoUrl)=>{
        
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
          })
    }
    const createUser =(email, password)=>{
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
        logOut,
        updateUser,
        socialLogin
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
