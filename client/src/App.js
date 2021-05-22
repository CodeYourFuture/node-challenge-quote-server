import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import AllQuotes from './components/AllQuotes';
import RandomQuote from './components/RandomQuote.js';
import IntroQuote from './components/IntroQuote';


function App() {
	const [ranCount, setRanCount] = useState(0);
	return (
		<BrowserRouter>
			<main className='main-component'>
				<Header setRanCount={setRanCount} ranCount={ranCount} />
				<Switch>
					<Route exact path='/' render={() => (<IntroQuote />)} />
					<Route exact path='/quotes' render={() => (<AllQuotes />)} />
					<Route exact path='/quotes/random' render={() => (<RandomQuote ranCount={ranCount} />)} />
				</Switch>
				<Footer />
			</main>
		</BrowserRouter>
	)
}

export default App;