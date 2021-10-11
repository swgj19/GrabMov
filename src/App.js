import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
// <Movie /> component below in children
import Movie from './SingleMovie';

function App() {
	return (
		<Switch>
			<Route path='/' exact>
				<Home />
			</Route>
			<Route path='/movies/:id' children={<Movie />} />
		</Switch>
	);
}

export default App;
