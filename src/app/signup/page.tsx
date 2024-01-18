/** @format */

// pages/signup/page.tsx
import React from 'react';

const SignupPage = () => {
	return (
		<div
			className="container"
			style={{maxWidth: '500px', margin: '0 auto'}}
		>
			<h1>Sign Up</h1>
			<form>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						placeholder="Choose a username"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						placeholder="Enter your email"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						placeholder="Create a password"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="confirm-password">Confirm Password</label>
					<input
						type="password"
						id="confirm-password"
						placeholder="Confirm your password"
					/>
				</div>
				<button type="submit" className="button primary">
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignupPage;
