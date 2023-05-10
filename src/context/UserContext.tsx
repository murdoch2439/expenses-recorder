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
    information:any,
    setInformation:(information:any)=>void,
    openFormModal:boolean,
    setOpenFormModal:(state:boolean)=>void
}

export const MyUserContext = createContext<authType>({
    isLoggedIn:false,
    setIsLoggedIn:()=>{},
    user:{username:"", password:""},
    setUser:()=>{},
    information:[],
    setInformation:()=>{},
    openFormModal:false,
    setOpenFormModal:()=>{},

})

export const useUserContext = () => useContext(MyUserContext)