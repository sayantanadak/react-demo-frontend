import React from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const navigate = useNavigate();
	const navigateToDashBoard = () => {
		navigate('/signup');
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
										<th scope="col">#</th>
										<th scope="col">First</th>
										<th scope="col">Last</th>
										<th scope="col">Handle</th>
										<th scope="col">Handle</th>
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
							<button type="button" className="btn btn-block" style={{ backgroundColor: '#1d4c8f', color: 'white', width: 300 }}>Next</button>
						</form>
					</center>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
