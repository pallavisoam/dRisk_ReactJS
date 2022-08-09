import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import dashboardIcon from '../../assets/dashboardIcon.svg';
import dollarIcon from '../../assets/dollarIcon.svg';
import linkIcon from '../../assets/linkIcon.svg';
import noteIcon from '../../assets/noteIcon.svg';
import umbIcon from '../../assets/umbIcon.svg';
import siderTrigger from '../../assets/siderTriggerIcon.svg';
import siderTriggerCollapsed from '../../assets/siderTriggerCollapsed.svg';
import ContentHeroSection from '../../components/contentHeroSection';
import ContactDetails from '../../components/contactDetails';
import '../styles/layout.css';
const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label
	};
}

const items = [
	getItem('Dashboard', '1', <img src={dashboardIcon} alt="..." />),
	getItem('Link Exchange', '2', <img src={linkIcon} alt="..." />),
	getItem('Buy Cover', '3', <img src={umbIcon} alt="..." />),
	getItem('All Covers', '4', <img src={noteIcon} alt="..." />),
	getItem('All Claims', '5', <img src={dollarIcon} alt="..." />)
];

const ScreenLayout = () => {
	const [ collapsed, setCollapsed ] = useState(true);
	return (
		<Layout
			style={{
				width: '95%',
				margin: '1rem auto',
				borderRadius: '13px',
				background: 'transparent'
			}}
		>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
				trigger={null}
				style={{ borderRadius: '13px' }}
			>
				<div className="logo" />
				<Menu defaultSelectedKeys={[ '1' ]} mode="inline" items={items} />
				<img
					src={collapsed ? siderTriggerCollapsed : siderTrigger}
					onClick={() => setCollapsed(!collapsed)}
					className="trigger sider-trigger-icon"
					alt="..."
				/>
			</Sider>
			<Layout className="site-layout" style={{ background: 'transparent' }}>
				<Content
					style={{
						margin: '0 auto',
						width: '94%'
					}}
				>
					<ContentHeroSection />
					<ContactDetails />
				</Content>
			</Layout>
		</Layout>
	);
};

export default ScreenLayout;
