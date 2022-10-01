import React from 'react';
import './dashboard.css'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const navigate = useNavigate();
	const navigateToLogin = () => {
		navigate('/login');
	};

	const navigateToSubscriptionStatus = () => {
		navigate('/subscription-status');
	};

	return (
		<div className="row d-flex justify-content-center">
			<div className='card p-5 mt-5'>
				<div className="card-body">
					<center>
						<h5 className="card-title">Choose the right plan for you</h5>
						<br />
						<form>
							<table class="table">
								<thead>
									<tr>
										<th scope="col">
											<div class="switches-container">
												<input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" checked="checked" />
												<input type="radio" id="switchYearly" name="switchPlan" value="Yearly" />
												<label for="switchMonthly">Monthly</label>
												<label for="switchYearly">Yearly</label>
												<div class="switch-wrapper">
													<div class="switch">
														<div>Monthly</div>
														<div>Yearly</div>
													</div>
												</div>
											</div>
										</th>
										<th scope="col">Mobile</th>
										<th scope="col">Basic</th>
										<th scope="col">Standard</th>
										<th scope="col">Premium</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Monthly Price</td>
										<td>₹100</td>
										<td>₹200</td>
										<td>₹500</td>
										<td>₹700</td>
									</tr>
									<tr>
										<td>Video Quality</td>
										<td>Good</td>
										<td>Good</td>
										<td>Better</td>
										<td>Best</td>
									</tr>
									<tr>
										<td>Resolution</td>
										<td>480p</td>
										<td>480p</td>
										<td>1080p</td>
										<td>4K+HDR</td>
									</tr>
									<tr>
										<td>Device you can watch</td>
										<td>Phone<br />Tablet</td>
										<td>Phone<br />Tablet<br />Computer<br />TV</td>
										<td>Phone<br />Tablet<br />Computer<br />TV</td>
										<td>Phone<br />Tablet<br />Computer<br />TV</td>
									</tr>
								</tbody>
							</table>
							<br />
							<br />
							<br />
							<button type="button" className="btn btn-block" onClick={navigateToSubscriptionStatus} style={{ backgroundColor: '#1d4c8f', color: 'white', width: 300 }}>Subscription Status</button>
							<button type="button" className="btn btn-block m-2" onClick={navigateToLogin} style={{ backgroundColor: '#1d4c8f', color: 'white', width: 300 }}>Logout</button>
							<button type="button" className="btn btn-block" style={{ backgroundColor: '#1d4c8f', color: 'white', width: 300 }}>Next</button>
						</form>
					</center>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
