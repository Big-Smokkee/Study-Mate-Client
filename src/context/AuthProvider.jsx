import { useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

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

    //observer set

    // This is the object which would be passed into the AuthContext 
    const authInfo = {
        user,
        setUser,
        signUpUserWithEmailAndPassword,
        loginWithGoogle,
        loginUserWithEmailAndPassword,
        signoutAnUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;