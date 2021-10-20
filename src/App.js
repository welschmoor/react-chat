

import Login from "./components/Login.js"


function App() {
  return (
    <div className="App">
      <Login />
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
