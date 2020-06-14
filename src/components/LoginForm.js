import React, { useState, useEffect } from "react";
import qs from "qs";
import axios from "axios";
import { Link, Router, Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Success from "./Success";
import Failed from "./Failed";

const DEV_AUTH_LOGIN_ADDRESS = "http://localhost:1993/login";
const PROD_AUTH_LOGIN_ADDRESS = "https://kbp-auth.now.sh/login";

console.log(DEV_AUTH_LOGIN_ADDRESS || PROD_AUTH_LOGIN_ADDRESS);

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([""]);

  // Building the Cookie setter
  function buildCookies() {
    Cookies.set("app_token", data.token, {
      path: "/",
      expires: 12,
    });
  }
  const handleSubmit = (e, err, res, req) => {
    e.preventDefault();
    axios({
      method: "post",
      url: DEV_AUTH_LOGIN_ADDRESS || PROD_AUTH_LOGIN_ADDRESS,
      data: qs.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).then((res) => setData(res.data));
  };

  useEffect(() => {
    buildCookies();
  });

  return (
    <div>
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
      <Route to="/">
        {data.status === "SUCCESS" ? (
          <Redirect to="/success" />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
    </div>
  );
}
