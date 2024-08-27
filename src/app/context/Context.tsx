'use client';
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Type, Users } from '../services/user';

interface UserContextType {
    user: Users,
    setUser: (user: Users) => void,
    searchValue: string,
    setSearchValue: (searchValue: string) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined);

function UserProvider( {children } : {children: ReactNode}) {

    const [user, setUser] = useState<Users >({
        login: '',             
        id: 0,                  
        node_id: '',
        avatar_url: '',
        gravatar_id: '',
        url: '',
        html_url: '',
        followers_url: '',
        following_url: '',
        gists_url: '',
        starred_url:         '',
        subscriptions_url:   '',
        organizations_url:   '',
        repos_url:           '',
        events_url:          '',
        received_events_url: '',
        type: Type.User,
        site_admin:false
    });
    const [searchValue, setSearchValue] = React.useState<string>('Octocat');

    const apiUrl = 'https://api.github.com'

    useEffect(() => {
        fetch(`${apiUrl}/users/${searchValue}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [ apiUrl ]);

    
    return (
        <UserContext.Provider value={ {
                user,
                setUser,
                searchValue,
                setSearchValue
            }}>
            { children }
        </UserContext.Provider>
    )
    
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("Error");
        
    }
    return context;
}


export { UserContext, UserProvider };