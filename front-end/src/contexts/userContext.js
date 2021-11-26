import React, {
  createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userClient = JSON.parse(localStorage.getItem('user'));
    if (userClient) {
      setUser(userClient);
    }
  }, []);

  return (
    <UserContext.Provider value={ { user, setUser } }>{children}</UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
