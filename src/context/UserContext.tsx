import {createContext, useContext} from 'react'

export interface userType{
    username: string;
    password: string;
}

export interface authType{
    isLoggedIn: boolean
    setIsLoggedIn: (state:boolean)=>void
    isEntrySuccess:boolean
    setIsEntrySuccess: (state:boolean)=>void
    user:{}|null
    setUser:(user:userType | null)=>void
    information:any,
    members:any,
    setInformation:(information:any)=>void,
    setMembers:(information:any)=>void,
    openFormModal:boolean,
    setOpenFormModal:(state:boolean)=>void
}

export const MyUserContext = createContext<authType>({
    isLoggedIn:false,
    isEntrySuccess:false,
    setIsEntrySuccess:()=>{},
    setIsLoggedIn:()=>{},
    user:{},
    setUser:()=>{},
    information:[],
    members:[],
    setInformation:()=>{},
    setMembers:()=>{},
    openFormModal:false,
    setOpenFormModal:()=>{},

})

export const useUserContext = () => useContext(MyUserContext)