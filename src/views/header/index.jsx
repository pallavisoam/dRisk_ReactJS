import React from 'react';
import Headset from '../../assets/headsetIcon.svg';
import Profile from '../../assets/profileIcon.svg';
import ArrowDown from '../../assets/arrowDownIcon.svg';
import { Row, Col } from 'antd';
import '../styles/header.css';
const Header = () => {
	return (
		<Row
			style={{ width: '90%', margin: '0rem auto' }}
			align="center"
			justify="center"
			className="header-parent-row"
		>
			<Col span={24}>
				<Row align="middle" justify="center">
					<Col span={21}>
						<span className="header-left">Assignment</span>
					</Col>
					<Col span={3}>
						<span className="header-right">
							<img src={Headset} alt="..." />
							<img src={Profile} alt="..." />
							<img src={ArrowDown} alt="..." />
						</span>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Header;
