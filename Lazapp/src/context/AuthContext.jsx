
import React from "react";
import  {useContext, createContext, useEffect, useState} from "react";
import {
    GoogleAuthProvider,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
    } from 'firebase/auth';
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();

export const AuthContextProvider=({children})=>{
    const [user, setUser]=useState({});
    const googleSignIn=()=>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider);
    }
    const logOut=()=>{
        signOut(auth);
    }
    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsuscribe();
        }
    },[]);

    return(
        <AuthContext.provider value={{googleSignIn,logOut,user}}>
            {children}
        </AuthContext.provider>
    )
}

export const UserAuth =()=>{
    return useContext(AuthContext)
}
