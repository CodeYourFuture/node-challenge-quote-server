import React from 'react';
import './QuoteComponent.css';

const QuoteComponent = ({ quote }) => (
	<div className='quote-container'>
		<h4 className='quote-text'>{quote.quote}</h4>
		<p className='quote-author'>{quote.author}</p>
	</div>
)

export default QuoteComponent;