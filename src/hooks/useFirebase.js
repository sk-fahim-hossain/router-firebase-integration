import { useEffect, useState } from "react"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from './../firebase.init';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, user =>{
            setUser(user);
        })
    }, [])

    const signInWithGoogle = () =>{
     signInWithPopup(auth, googleProvider)
     .then(result =>{
        const user = result.user;
        setUser(user)
        console.log(user)
     })
     .catch(error=>{
        console.log(error)
     })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('sign out successfully')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    

    return {
        user,
        signInWithGoogle,
        handleSignOut
    };
}

export default useFirebase;