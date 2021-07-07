import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

import './style.css';

const LandingComponent = (...rest) => {

	return (
		<div className="site-card-wrapper">
			<Card bordered={false} className="landing-card">
				<div className="connect-wallet-container">
					<p className="title">PLEASE CONNECT YOUR WALLET</p>
					<p className="description">To see your deposited / borrowed assets, you need to connect your wallet.</p>
					<Button type="primary" shape="round" className="connect-btn">
						CONNECT
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default LandingComponent;
