
import React from "react"
import { auth, provider } from "../firebase.js" // provider is what you're signing in with (google ie)


const Login = () => {

    const login = () => {
        auth.signInWithRedirect(provider) // this takes us to Google to Sign In
    }

    return (
        <div>
            <button onClick={login}>Google Sign In</button>
        </div>
    )
}

export default Login
