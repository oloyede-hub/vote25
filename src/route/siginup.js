import React,{useState, useEffect} from 'react'
import {auth} from "../components/firebase";

export default function Signup() {

    // First thing first...
    // use contextApi for username, user and password.
    // learn Jscramble for websecurity

    const [username, setUsername] = useState("");
    const [user, setUser] = useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");


    useEffect(()=> {

    },[user, username])

    const handleRegister = (event) => {
        event.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .catch(err => alert(err.message));
        window.location = "signin";
    }
    return (
        <div>
            <form className="app__login">
            <center>
            Login to <span>Vote25</span>
            </center>
            <div>
                <label>Username:</label>
                <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div htmlFor="password">
                <label htmlFor="password">Password:</label>
                <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleRegister}>Register</button>
          </form>
        </div>
    )
}
