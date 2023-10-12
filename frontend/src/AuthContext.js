import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [signupIsOpen, setSignupIsOpen] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [editNameShow, setEditNameShow] = useState(true);
    const [changePasswordShow, setChangePasswordShow] = useState(true);
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
        setEditNameShow(!editNameShow)
    }
    const toggleChangePassword = () => {
        setIsChangingPassword(!isChangingPassword);
        setChangePasswordShow(!changePasswordShow)
    }
    return (
        <AuthContext.Provider
            value={{
                signupIsOpen,
                isRegistering,
                toggleFormOverlay,
                toggleRegisteringOverlay,
                isEditingName,
                editNameShow,
                toggleEditingName,
                isChangingPassword,
                changePasswordShow,
                toggleChangePassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
