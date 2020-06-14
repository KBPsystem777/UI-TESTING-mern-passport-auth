import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="welcome-banner">
      <h1>Welcome to Testing Site!</h1>
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

export default Home;
