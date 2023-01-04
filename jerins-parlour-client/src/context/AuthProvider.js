import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [Gloading, setGLoading] = useState(true);
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    const gProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const providerLogin = () => {
        setGLoading(true)
        return signInWithPopup(auth, gProvider);
    }

    const logOut = () => {
        return signOut(auth)
    }

    const updateUsersProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            setGLoading(false);
        })
        return () => unsubscribe();
    },[])

    const authInfo = {user, providerLogin, Gloading, setGLoading, loading, setLoading, logOut, createUser, signIn, updateUsersProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;