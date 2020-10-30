import React, { useEffect, useState } from "react";
import { auth } from "../components/firebase";

export default function Sigin() {
	const [user, setUser] = useState(null);
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.catch((err) => alert(err.message));

		window.location = "/voterslist";
	};

	return (
		<div className='signin'>
			<form onSubmit={handleLogin} className='signin__form'>
				<center>
					Login to <span>Vote25</span>
				</center>
				<div>
                <label>Email</label>
                <input
                    placeholder='Email'
                    name="email"
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='signin__input'
				/>
                </div>
				<div>
                    <label htmlFor="password">Password</label>
                <input
                    placeholder='Password'
                    name="password"
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='signin__input'
				/>
                </div>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
}
