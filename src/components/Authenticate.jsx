import React from "react";
import { useState } from "react";

export default function Authenticate({ token }) {
  // state : error
  const [error, setError] = useState(null);
  // state: success message
  const [successMessage, setSuccessMessage] = useState();

  function handleClick(e){
    e.preventDefault();
    authenticate();
  }
  // async method, calling API with token..
  const authenticate = async () => {
    console.log("authenticate", token);
    try {
      const url = "https://fsa-jwt-practice.herokuapp.com/authenticate";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const params = { method: "GET", headers: headers };
      const response = await fetch(url, params);
      const result = await response.json();
      console.log("result", result);
      const msg = result.data.username ? `${result.message}. Thank you, ${result.data.username}`: result.message;
      setSuccessMessage(msg);
    } catch (error) {
      console.log("oopsy!");
      setError(error.message);
    }
  };
  return (
    <div>
      <h2 style={!token ? { color: "lightgrey" } : { color: "black" }}>
        Authenticate
      </h2>
      {/* success message from API call.. */}
      {successMessage && <p>{successMessage}</p>}
      {/* try-catch error */}
      {error && <p>{error}</p>}
      {/* authenticate button here.. */}
      <button
        className="btn btn-primary"
        onClick={handleClick}
        disabled={!token}
      >
        Authenticate
      </button>
    </div>
  );
}
