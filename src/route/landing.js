import React from "react";
// import { auth, db } from "../components/firebase";
import "../assets/styles/landing.css";
import LandingRight from "../components/landingRight";

function Landing() {
	return (
		<div className="landing">
		<div className='landing__flex'>
			<div className='page__left'>
				<div className="page__leftContent">
                <img
					src='https://www.ui.edu.ng/sites/default/files/UI%20logo.png'
					alt="ui-logo"
				/>
				<h3>Vote25</h3>
				<h4>Let make our vote count!!! and let us come out with one voice</h4>
                </div>
			</div>
			<div className='page__right'>
                <LandingRight />
            </div>
		</div>
		<div className="landing__footer">
			<h5> Powered by Devsnowman....</h5>
			<p>sodiqoloyede295@gmail.com</p>
		</div>
		</div>
	);
}

export default Landing;
