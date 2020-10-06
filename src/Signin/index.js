import React from "react";
import "./style.css";

const Signin = () => {
  return (
    <div className="signinContainer">
      <h1 className="sign">Sign in</h1>
      <form
        action="http://localhost:5000/login"
        method="POST"
        encType="application/json"
      >
        <div className="row">
          <div className="col-25">
            <label htmlFor="name">Name</label>
          </div>
          <div className="col-75">
            <input
              autoFocus
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Email</label>
          </div>
          <div className="col-75">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Password</label>
          </div>
          <div className="col-75">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password.."
              required
            />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Sign in" />
        </div>
      </form>
    </div>
  );
};
export default Signin;
