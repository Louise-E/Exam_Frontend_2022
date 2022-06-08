import React, {useState} from "react";

const Login = ({onAdd}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            alert("Please enter username");
            return;
        }
        if (!password) {
            alert("Please enter password");
            return;
        }
        onAdd({username, password});

        setUsername("");
        setPassword("");
    };

    return(
        <div>
      <div className="border-0">
          <h2>login</h2>
          <form onSubmit={onSubmit}>
              <div className="login-control">
                  <label>Username</label>
                  <input className="inputForm" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}>
                      </input>
              </div>
              <div className="login-control">
                  <label>Password</label>
                  <input
                      className="inputForm"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}>
                  </input>
                  <button type="submit" value="login" className="loginButton"/>
              </div>
          </form>
      </div>
        </div>
    );
};

export default Login;