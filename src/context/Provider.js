import React, {createContext, useReducer} from 'react'
import authInitialState from './initialStates/authInitialState';
import contactsInitialState from './initialStates/contactsInitialState';
import authReducer from './reducers/authReducer';
import contactsReducer from './reducers/contactsReducer';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);
    const [contactsState, contactsDispatch] = useReducer(contactsReducer, contactsInitialState);
    

    return <GlobalContext.Provider value={{authState, contactsState, authDispatch, contactsDispatch}}>{children}</GlobalContext.Provider>
}

export default GlobalProvider;