import React, { useState, useEffect } from "react";
import qs from "qs";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const AUTH_LOGIN_ADDRESS = "https://kbp-auth.now.sh/login";

console.log(AUTH_LOGIN_ADDRESS);
function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([""]);
  const [cookies, setCookies] = useCookies([""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: AUTH_LOGIN_ADDRESS,
      data: qs.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).then((res) =>
      setCookies("app-token", res.data, {
        path: "/",
        httpOnly: false,
        maxAge: 1000 * 60 * 60,
      })
    );
  };

  useEffect(() => {
    console.log(cookies);
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Login</h2>
      </div>
      <input
        type="email"
        required
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        required
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Login" />
      <div>
        No Account yet? <Link to={"/signup"}>Sign up</Link> now
      </div>
    </form>
  );
}

export default LoginForm;
