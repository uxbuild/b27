import React from "react";

export default function AlertErrorUsername() {
  return (
    <div className="alert alert-warning text-justify" role="alert">
      <p>Attention: Invalid username</p>
      
        May only contain upper-case, lower-case, and underscore.
      
    </div>
  );
}
