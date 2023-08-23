import React from "react";
import "./Login.css";
import logo from "./logobus.png";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = (event) => {
    

  };
  return (
    <div className="login-container">
        <div className="side-bar"></div>
      <div className="login-box">
        <div className="login-logo">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
         <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}