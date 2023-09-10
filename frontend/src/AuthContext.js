import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [signupIsOpen, setSignupIsOpen] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const toggleFormOverlay = () => {
        setSignupIsOpen(!signupIsOpen);
        setIsRegistering(false);
    };

    const toggleRegisteringOverlay = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <AuthContext.Provider
            value={{
                signupIsOpen,
                isRegistering,
                toggleFormOverlay,
                toggleRegisteringOverlay,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
