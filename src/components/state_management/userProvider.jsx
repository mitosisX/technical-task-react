import React, { createContext, useContext, useState } from 'react';

// Create a context
const UserContext = createContext();

// Create a UserProvider component
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        // Perform login logic
        setUser(userData);
    };

    const logout = () => {
        // Perform logout logic
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to consume the user context
const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export { UserProvider, useUser };
