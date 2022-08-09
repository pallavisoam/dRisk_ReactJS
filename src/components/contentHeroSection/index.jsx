import React from 'react';
import Accordion from '../Accordion';
import './index.css';

const ContentHeroSection = () => {
	return (
		<React.Fragment>
			<h1 className="content-heading-faq">Frequently Asked Questions</h1>
			<p className="content-heading-para">
				Got a burning question that you need answered pronto? Just click on one of the sections below to find
				the answer.
			</p>
			<div style={{ marginTop: '1.5rem' }}>
				<Accordion />
			</div>
		</React.Fragment>
	);
};

export default ContentHeroSection;
