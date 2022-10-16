import React from 'react';
import {useUser} from "../../../hooks/useUser";


const Personal = () => {
  const {user} = useUser();
  console.log(user);
    return (
        <h1>Personal</h1>
    );
};

export default Personal;