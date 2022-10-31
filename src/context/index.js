import React, { createContext, useState } from 'react';

export const context = createContext();

export const ContextProvider = props => {
    const [userData, setUserData] = useState([])
    const [repos, setRepos] = useState([])

    return (
        <context.Provider
        value={{
            repos,
            setRepos,
            userData,
            setUserData
        }}
        >
            {props.children}
        </context.Provider>
    )
}