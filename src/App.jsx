import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate'
import SignUpFrom from './components/SignUpFrom'

export default function App() {
  
  // passing token from sign up to authenticate..
  const [token, setToken] = useState(null);
  
  return (
    // <div className="container mt-5 text-center">
    <div className="container-md text-left bg-rounded">
    <SignUpFrom token={token} setToken={setToken} />
    <Authenticate token={token} />
    </div>
  )
}
