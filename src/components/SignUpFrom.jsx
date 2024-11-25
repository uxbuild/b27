import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useRef } from "react";
import AlertErrorUsername from "./AlertErrorUsername";
import AlertErrorPassword from "./AlertErrorPassword";

import { validateUsername, validatePassword } from "../utilities/validate";
import '../App.css';


export default function SignUpFrom({ token, setToken }) {

  // state
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  
  // some reference to form elements; will use for form validation.
  // const refA = useRef(null);
  // const refB = useRef(null);


  // validate functions imported from file
  function validate() {
    const validU = validateUsername(username);
    const validP = validatePassword(password);
    setErrorUsername(!validU);
    setErrorPassword(!validP);
    return validU && validP;
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted..");
    if (validate()) {
      // try catch ..
      try {
        console.log("submit try-catch..");
        const url = "https://fsa-jwt-practice.herokuapp.com/signup";
        const credentials = JSON.stringify({ username, password });
        const params = { method: "POST", body: credentials };
        const response = await fetch(url, params);
        const result = await response.json();
        console.log("result", result);
        setToken(result.token);
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}

      <div className="bg-rounded">
        <div className="mb-3">
          <form className="row g-3" onSubmit={handleSubmit}>

            <div>
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              />
            </div>
            <div>
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
          <div>{errorUsername && <AlertErrorUsername />}</div>
          <div>{errorPassword && <AlertErrorPassword />}</div>
      </div>
    </>
  );
}
