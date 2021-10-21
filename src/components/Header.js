// Header Component for messenger app

import React from "react"
import { auth } from "../firebase"





const Header = ({user}) => {

    const signOut = () => {
        auth.signOut()
    }

  return (
    <header className="mainheader">
      Main Header
      <div className="profileimg-div">
        {" "}
        <img src={user.photoURL} alt="your Google Account photo ." />{" "}
      </div>
      <h6 className="username">{user?.displayName}</h6>
      <button onClick={signOut}>Log Out</button>
    </header>
  )
}

export default Header
