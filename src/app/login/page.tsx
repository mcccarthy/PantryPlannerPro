/** @format */

// pages/login/page.tsx
import React from 'react';

const LoginPage = () => {
	return (
		<div className="container" style={{width: '25%', margin: '0 auto'}}>
			<h1>Login</h1>
			<form style={{width: '100%'}}>
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
						placeholder="Enter your password"
					/>
				</div>
				<button type="submit" className="button">
					Log In
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
