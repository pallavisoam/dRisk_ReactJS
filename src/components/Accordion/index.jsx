import React from 'react';
import { Collapse } from 'antd';
import './index.css';
import { collapseArray } from '../../staticData/accordionData';

const { Panel } = Collapse;
const Accordion = () => (
	<React.Fragment>
		{collapseArray.map((collapseData) => {
			return (
				<Collapse
					accordion
					expandIconPosition="end"
					bordered={false}
					className="collapse-parent"
					key={collapseData.id}
					style={{ marginTop: '1rem' }}
				>
					<Panel header={collapseData.heading} key={collapseData.id}>
						<p className="collapse-desc">{collapseData.collapseDesc}</p>
					</Panel>
				</Collapse>
			);
		})}
	</React.Fragment>
);

export default Accordion;
