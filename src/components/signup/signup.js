import React, { userState } from 'react';
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const navigate = useNavigate();
	const navigateToLogin = () => {
		navigate('/login');
	};

	const [user, setUser] = userState ({
		name:"",
		email:"",
		password:"",
	});

	return (
		<div className="row d-flex justify-content-center">
			<div className='card p-5 mt-5' style={{ width: 600 }}>
				<div className="card-body">
					<center>
						<h5 className="card-title">Create Account</h5>
					</center>
					<br />
					<form>
						<div className="form-outline mb-4">
							<label className="form-label">Name</label>
							<input type="text" name="name" value="name" id="" className="form-control" placeholder='Enter your name...' />
						</div>

						<div className="form-outline mb-4">
							<label className="form-label">Email</label>
							<input type="email" name="email" value="email" id="" className="form-control" placeholder='your.email@domain.com' />
						</div>

						<div className="form-outline mb-4">
							<label className="form-label">Password</label>
							<input type="password" name="password" value="password" id="" className="form-control" />
						</div>

						<div className="row mb-4">
							<div className="col d-flex">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="form2Example31" />
									<label className="form-check-label"> Remember me </label>
								</div>
							</div>
						</div>

						<button type="button" className="btn btn-block w-100 p-2.5" style={{ backgroundColor: '#1d4c8f', color: 'white' }}>Sign Up</button>
						<br />
						<br />
						<div className="text-center">
							<p>Already have an account?<button className="btn btn-link text-decoration-none p-1 mb-1" onClick={navigateToLogin}>Login</button></p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
