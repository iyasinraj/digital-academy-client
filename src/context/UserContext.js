import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const UserContext = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const regWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const regWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)

    }
    const loginWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = ()=> {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
       const unSubcribe = onAuthStateChanged (auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubcribe();
    },[])

    const authInfo = {loading, regWithEmail,regWithGoogle, loginWithEmail, logout, user}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;