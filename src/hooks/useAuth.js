
import React, { useEffect } from "react"
import { db, auth, createTimeStamp } from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth';

const useAuth = () => {
    const [user] = useAuthState(auth)
    console.log("Test1: ", auth)
    console.log("Test2: ", user)
    useEffect(()=> {
        if (user) {
            const ref = db.collection('users').doc(user.uid) // users is a collection that we will create in firebase
            ref.get().then(doc=>{   
                if(!doc.exists) {
                    ref.set({
                        name: user.displayName,
                        photoURL: user.photoURL,
                        timestamp: createTimeStamp()
                    })
                }
                console.log('doc: ',doc) // has id and exists props
            })  // get returns a promise // a document snapshot
        }
    }, [user])

    return user
}

export default useAuth