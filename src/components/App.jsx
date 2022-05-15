import React from "react";

function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} />;
}

function Login() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

var isLoggedIn = true;

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
