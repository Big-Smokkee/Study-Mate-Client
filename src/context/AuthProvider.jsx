import { useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    // here I will write every states
    const [user, setUser] = useState(null);
    // here I will write each and every authentication related functions
    const signUpUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //observer set

    // This is the object which would be passed into the AuthContext 
    const authInfo = {
        user,
        setUser,
        signUpUserWithEmailAndPassword
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;