import React from 'react';
import { Divider, Row, Col } from 'antd';

import LinkList from 'const/link';
import { RepusdMark } from 'img';

import './style.css';

export default () => {
	return (
		<Row>
			<Col span={2}></Col>
			<Col span={20} className="main-footer">
				<Row>
					<Col lg={8} xs={24} md={8} className="mark-container">
						<img src={RepusdMark} />
					</Col>
					{
						LinkList.map((linkGroup, index) => (
							<Col lg={4} xs={24} md={8} key={index} className="link-group">
								<span>{linkGroup.name}</span>
								{
									linkGroup.childLink.map((link, index) => (
										<a key={index} href={link.url}>
											{!!link.icon && link.icon}&nbsp;
											{link.name}
										</a>
									))
								}
							</Col>
						))
					}
				</Row>
				<Divider className="footer-divider" />
				<div className="copyright-container">
					<p className="copyright">2021 myapp.com All rights reserved.</p>
					<p className="policy">Privacy Policy - Refund Policy - Terms & Conditions</p>
				</div>
			</Col>
			<Col span={2}></Col>
		</Row>
	);
}