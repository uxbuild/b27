import React from 'react'

export default function AlertErrorPassword() {
  return (
    <div className="alert alert-warning text-justify" role="alert">
        <p>Attention: Invalid Password</p>
    Must be at least 8 characters including uppercase, lowercase, number, and a special character.
  </div>
  )
}
