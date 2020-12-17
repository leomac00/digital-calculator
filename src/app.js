import React from 'react';
import Calculator from './containers/calculator';
import './app.css';

export function App() {
	return (
		<div className="screen">
			<div className="divSup"/>
			<Calculator />
			<div className="divInf"><h1>Calculadora</h1></div>
		</div>
	);
}
