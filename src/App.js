import React from "react"
import Login from "./components/Login.js"
import useAuth from "./hooks/useAuth.js"

import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {
  const user = useAuth()

  if (!user) {
    return <Login />
  }

  return (
    <div className="App">
      <div className="maindiv">
        <Header user={user} />
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App
