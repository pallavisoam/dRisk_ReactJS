import React from 'react';
import { Avatar } from 'antd';
import './index.css';

const FooterCard = ({ cardHeading, cardDesc, cardAvatar }) => {
	return (
		<div className="footer-card">
			<Avatar
				icon={<img src={cardAvatar} alt="..." />}
				size={60}
				className="footer-avatar"
				style={{ padding: '1rem 1rem' }}
			/>
			<h3 className="footer-card-heading">{cardHeading}</h3>
			<p className="footer-card-desc">{cardDesc}</p>
		</div>
	);
};

export default FooterCard;
