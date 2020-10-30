import React from "react";
import Accordion from "./Accordion";
import "../assets/styles/landingright.css";
import { Link } from "react-router-dom";

// CardGiftcard = Schedule for voting
// HowToReg = Eligibity for voting

export default function LandingRIght() {
	return (
		<div>
			{/* This is where the infoemation about the vote is going to be. */}
			<div className='page__rightContent'>
				<h1>Faculty of Health Sciences Election </h1>
				<div className='landing__Mui'>
					<Accordion />
				</div>
				<div className='div__button'>
                    
                </div>
				<p className="landing__p">
					Vote today and elect the right leader <span aria-labelledby="emoji" role="img">👍</span> !!! Click Sign in if already
					have an account or create a new account with create account button{" "}
				</p>
				<Link to='sigin' className='landing__button'>
					Sign in
				</Link>
				<Link to='signup' className='landing__button'>
					Create Account
				</Link>
			</div>
		</div>
	);
}
