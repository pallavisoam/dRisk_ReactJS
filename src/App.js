import React from 'react';
import ScreenLayout from './views/screenLayout';
import Header from './views/header';
import './App.css';

function App() {
	return (
		<React.Fragment>
			<Header />
			<ScreenLayout />
		</React.Fragment>
	);
}

export default App;
