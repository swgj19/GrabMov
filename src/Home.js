import React from 'react';
import Form from './SearchForm';
import Movies from './Movies';
import { useGlobalContext } from './context';
const Home = () => {
	// const data = useGlobalContext();
	// console.log(data);
	return (
		<main>
			<section className='title'>
				<h2>GrabMov</h2>
			</section>
			<Form />
			<Movies />
		</main>
	);
};

export default Home;
