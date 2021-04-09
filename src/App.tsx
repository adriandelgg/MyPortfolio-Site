import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Intro from './components/Intro';
import { Button, Grid } from '@material-ui/core';

const App = () => {
	return (
		<>
			<Header />
			<Grid container>
				<Grid item component="main" className="intro">
					<Intro />
				</Grid>
			</Grid>
		</>
	);
};

export default App;
