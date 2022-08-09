import React from 'react';
import { Row, Col } from 'antd';
import { contactDetailsArr } from '../../staticData/contactDetailsData';
import FooterCard from '../cards/FooterCards';
import './index.css';

const LayoutFooter = () => {
	return (
		<React.Fragment>
			<Row style={{ width: '100%', marginTop: '1rem' }}>
				<Col span={24} style={{ margin: '0.5rem 0rem' }}>
					<span className="footer-heading">Get in touch with us</span>
				</Col>
				<Col span={24}>
					<Row style={{ width: '100%' }} align="middle" justify="space-between">
						{contactDetailsArr.map((conDetail) => {
							return (
								<Col
									span={5}
									style={{
										padding: '1rem 0rem',
										borderRadius: '7px',
										background: '#f4f4f4'
									}}
									key={conDetail.id}
								>
									<FooterCard
										cardHeading={conDetail.contactHeader}
										cardDesc={conDetail.contactDesc}
										cardAvatar={conDetail.img}
									/>
								</Col>
							);
						})}
					</Row>
				</Col>
			</Row>
		</React.Fragment>
	);
};

export default LayoutFooter;
