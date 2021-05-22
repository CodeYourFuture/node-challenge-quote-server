import React, { useState, useEffect } from 'react';
import QuoteComponent from './QuoteComponent.js';

const RandomQuote = ({ ranCount }) => {
	const [ranQuote, setRanQuote] = useState('');
	useEffect(() => {
		fetch('/quotes/random')
			.then(res => res.json())
			.then(data => setRanQuote(data))
	}, [ranCount]);


	return (ranQuote && <QuoteComponent quote={ranQuote} />)
}

export default RandomQuote;