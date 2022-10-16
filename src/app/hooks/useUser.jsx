import React, {useContext, useEffect, useState} from 'react';
import {getUserInfo} from "../utils/User";

const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext);
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({address: '', oldPassword: '', newPassword: ''});

    useEffect(() => {
        const userInfo = getUserInfo();
        const {name, lastName, companyName, email} = userInfo;

        setUser(prevState => (
            {
                ...prevState,
                name,
                lastName,
                companyName,
                email
            }));

    }, []);

    return <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
};

export default UserProvider;