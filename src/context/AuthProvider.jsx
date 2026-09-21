import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    // here I will write every states
    const [user, setUser] = useState(null);
    //google auth provider
    const googleProvider = new GoogleAuthProvider();
    // here I will write each and every authentication related functions
    const signUpUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const loginUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signoutAnUser = () => {
        return signOut(auth);
    }
    const updateTheCurrentUser = (updatedProfileObject) => {
        return updateProfile(auth.currentUser, updatedProfileObject);
    }

    //observer set
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    // This is the object which would be passed into the AuthContext 
    const authInfo = {
        user,
        setUser,
        signUpUserWithEmailAndPassword,
        loginWithGoogle,
        loginUserWithEmailAndPassword,
        signoutAnUser,
        updateTheCurrentUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;