import React from "react";
import { Link } from "react-router-dom";

function Failed() {
  return (
    <div className="welcome-banner">
      <h1>Login Failed!</h1>
      <div>
        <h3>
          <Link to={"/login"}>Login</Link> to view the app
        </h3>
        <div>
          New to us? <Link to={"/signup"}>Signup</Link> now
        </div>
      </div>
    </div>
  );
}

export default Failed;
