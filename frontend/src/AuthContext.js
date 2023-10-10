import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [signupIsOpen, setSignupIsOpen] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true);

    const toggleFormOverlay = () => {
        setSignupIsOpen(!signupIsOpen);
        setIsRegistering(false);
        console.log(signupIsOpen)

    };

    const toggleRegisteringOverlay = () => {
        setIsRegistering(!isRegistering);
    };

    const toggleEditingName = () => {
        setIsEditingName(!isEditingName);
        setButtonVisible(!buttonVisible)
    }
    return (
        <AuthContext.Provider
            value={{
                signupIsOpen,
                isRegistering,
                toggleFormOverlay,
                toggleRegisteringOverlay,
                isEditingName,
                buttonVisible,
                toggleEditingName
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
