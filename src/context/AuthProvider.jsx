import { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    // here I will write every states
    const [user, setUser] = useState(null);
    // here I will write each and every authentication related functions


    //observer set

    // This is the object which would be passed into the AuthContext 
    const authInfo = {
        user,
        setUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;