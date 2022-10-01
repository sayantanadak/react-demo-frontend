import React from 'react';
// import './login.css'

const Login = () => (
	<div class="row d-flex justify-content-center">
		<div class='card p-5 mt-5' style={{ width: 600 }}>
			<div class="card-body">
				<center>
					<h5 class="card-title">Login to your account</h5>
				</center>
				<br />
				<form>
					<div class="form-outline mb-4">
						<label class="form-label" for="form2Example1">Email</label>
						<input type="email" id="form2Example1" class="form-control" placeholder='youremail@domain.com' />
					</div>

					<div class="form-outline mb-4">
						<label class="form-label" for="form2Example2">Password</label>
						<input type="password" id="form2Example2" class="form-control" />
					</div>

					<div class="row mb-4">
						<div class="col d-flex">
							<div class="form-check">
								<label class="form-check-label" for="form2Example31"> Remember me </label>
							</div>
						</div>
					</div>

					<button type="button" class="btn btn-block w-100 p-2.5" style={{ backgroundColor: '#1d4c8f', color: 'white' }}>Login</button>
					<br />
					<br />
					<div class="text-center">
						<p>New to MyApp? <a class='text-decoration-none' href="#!">Sign Up</a></p>
					</div>
				</form>
			</div>
		</div>
	</div>
);

export default Login;
