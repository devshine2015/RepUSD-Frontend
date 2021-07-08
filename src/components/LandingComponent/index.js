import React from 'react';
import { Card, Button } from 'antd';

import './style.css';

const LandingComponent = (...rest) => {
	const goToDashboard = () => {
		window.location.href = '/dashboard';
	}
	return (
		<div className="site-card-wrapper">
			<Card bordered={false} className="landing-card">
				<div className="connect-wallet-container">
					<p className="landing-title">PLEASE CONNECT YOUR WALLET</p>
					<p className="landing-description">To see your deposited / borrowed assets, you need to connect your wallet.</p>
					<Button type="primary" shape="round" className="landing-connect-btn" onClick={() => goToDashboard()}>
						CONNECT
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default LandingComponent;
