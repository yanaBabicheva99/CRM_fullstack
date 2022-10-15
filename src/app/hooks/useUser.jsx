import React, {useEffect, useState} from 'react';
import {getUser} from "../utils/User";

const UserContext = React.createContext();

const UseUser = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(getUser());
    }, []);

    return <UserContext.Provider value={{user}}>

    </UserContext.Provider>
};

export default UseUser;