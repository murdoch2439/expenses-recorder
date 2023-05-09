import {createContext, useContext} from 'react'

export interface userType{
    username: string;
    password: string;
}

export interface authType{
    isLoggedIn: boolean
    setIsLoggedIn: (state:boolean)=>void
    user:{}
    setUser:(user:userType)=>void
}

export const MyUserContext = createContext<authType>({
    isLoggedIn:false,
    setIsLoggedIn:()=>{},
    user:{username:"", password:""},
    setUser:()=>{},
})

export const useUserContext = () => useContext(MyUserContext)