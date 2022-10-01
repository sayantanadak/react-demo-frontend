import React from 'react';
import { useNavigate } from "react-router-dom";

const Subscription = () => {
    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div className="row d-flex justify-content-center">
            <div className='card mt-5' style={{ width: 600 }}>
                <div className="card-body">
                    <h5 className="card-title">Current Plan Details <span className="badge bg-warning m-2">Cancelled</span></h5>
                    <label>Basic</label><br/>
                    <label>Phone+Tablet</label>
                    <h2>₹2000/yr</h2><br/>
                    <button type="button" onClick={navigateToDashboard} className="btn btn-outline-primary mb-1">Choose Plan</button>
                    <div class="alert alert-secondary" role="alert">
                        Your subscription was can cancelled and you will loose access to services on Jul 11,2023
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
