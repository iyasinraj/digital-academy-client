import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()
const fbProvider = new FacebookAuthProvider()
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
    const regWithGithub = () =>{
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }
    const regWithFb = () =>{
        setLoading(true)
        return signInWithPopup(auth, fbProvider)
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

    const authInfo = {loading, setLoading, auth, regWithEmail, regWithGoogle, loginWithEmail, regWithFb, regWithGithub, logout, user}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;