import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

const DEV_AUTH_LOGOUT_ADDRESS = "http://localhost:1993/logout";
const PROD_AUTH_LOGOUT_ADDRESS = "https://kbp-auth.now.sh/logout";

function Success(props) {
  const token = Cookies.get("app_token");
  const [data, setData] = useState([""]);

  function logOut() {
    // Delete the token cookie
    Cookies.remove("app_token");

    // Log out the session in the server side
    axios({
      method: "get",
      url: DEV_AUTH_LOGOUT_ADDRESS || PROD_AUTH_LOGOUT_ADDRESS,
    }).then((res) => setData(res.data));
  }

  return (
    <div className="welcome-banner">
      <h1>Login Success!</h1>
      <code>{token}</code>
      <div>
        <button onClick={logOut}>LogOut</button>
      </div>
    </div>
  );
}

export default Success;
