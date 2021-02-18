import React, { useContext, useState, useEffect, createContext } from 'react';

import { authenticate } from '../services/auth';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        (async () => {
            const user = await authenticate();
            if (!user.errors) {
                setUser(user);
                setAuthenticated(true);
            }
            setLoaded(true);
        })();
    }, []);

    if (!loaded) return null;

    return (
        <UserContext.Provider value={{ user, setUser, authenticated, setAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
