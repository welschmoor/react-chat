
import React from "react"
import Login from "./components/Login.js"
import useAuth from "./hooks/useAuth.js"

import Sidebar from './components/Sidebar'

const App = () => {
  const user = useAuth()

  if (!user) {
    return <Login />
  }

  return (
    <div className="App">
      <Sidebar user={user} />
      <div>
        Chat History Goes here...
      </div>
      <div className="formdiv">
        <form className="form">
          <input type="text" placeholder="enter message" required />
          <button type="submit" childen="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
