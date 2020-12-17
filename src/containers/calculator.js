import { Component } from 'react';
import Button from '../components/button';
import Display from '../components/display';
import classNames from 'classnames';

class Calculator extends Component {
	initialState = { firstValue: 0, secondValue: 0, operator: 1, operation: '' };

	constructor(props) {
		super(props); //Faz herdar o 'props' do Component
		this.state = this.initialState;
	}

	putValue = (value) => {
		const { firstValue, secondValue, operator } = this.state;
		const lastValue = operator === 1 ? firstValue : secondValue;

		switch (operator) {
			case 1:
				this.setState({ firstValue: lastValue * 10 + value });
				break;
			case 2:
				this.setState({ secondValue: lastValue * 10 + value });
				break;
		}
	};

	handleOperation = () => {
		const { firstValue, secondValue, operation } = this.state;
		switch (operation) {
			case '+':
				return firstValue + secondValue;
			case '-':
				return firstValue - secondValue;
			case '*':
				return firstValue * secondValue;
			case '/':
				if(secondValue === 0) {
					return `Erro: não dá para dividir por zero`;
				} else {
					return firstValue / secondValue;
				};
			case 'x*x':
				return firstValue * firstValue;
		}
	};

	getValue = () => {
		const { firstValue, secondValue, operator, operation } = this.state;
		switch (operator) {
			case 1:
				return firstValue;
			case 2:
				return secondValue;
			case 3:
				return this.handleOperation();
		}
	};

	pickOperation = (res) => {
		this.setState({ operator: 2, operation: res });
	};

	execOperation = () => {
		this.setState({ operator: 3 });
	};

	clear = () => {
		this.setState(this.initialState);
	};

	render() {
		const { operator, classes } = this.state;

		return (
			<div className={'calculator glitch-box'} >
				<div>
					<Display value={this.getValue()} />
				</div>

				<div className="buttonsContainer">
					<Button
						display={'1'}
						onClick={() => this.putValue(1)}
						disabled={operator === 3}
					/>
					<Button
						display={'2'}
						onClick={() => this.putValue(2)}
						disabled={operator === 3}
					/>
					<Button
						display={'3'}
						onClick={() => this.putValue(3)}
						disabled={operator === 3}
					/>
					<Button
						display={'4'}
						onClick={() => this.putValue(4)}
						disabled={operator === 3}
					/>
					<Button
						display={'5'}
						onClick={() => this.putValue(5)}
						disabled={operator === 3}
					/>
					<Button
						display={'6'}
						onClick={() => this.putValue(6)}
						disabled={operator === 3}
					/>
					<Button
						display={'7'}
						onClick={() => this.putValue(7)}
						disabled={operator === 3}
					/>
					<Button
						display={'8'}
						onClick={() => this.putValue(8)}
						disabled={operator === 3}
					/>
					<Button
						display={'9'}
						onClick={() => this.putValue(9)}
						disabled={operator === 3}
					/>
					<Button
						display={'0'}
						onClick={() => this.putValue(0)}
						disabled={operator === 3}
					/>
					<Button
						display={'+'}
						onClick={() => this.pickOperation('+')}
						disabled={operator !== 1}
					/>
					<Button
						display={'-'}
						onClick={() => this.pickOperation('-')}
						disabled={operator !== 1}
					/>
					<Button
						display={'*'}
						onClick={() => this.pickOperation('*')}
						disabled={operator !== 1}
					/>
					<Button
						display={'/'}
						onClick={() => this.pickOperation('/')}
						disabled={operator !== 1}
					/>
					<Button
						display={'^2'}
						onClick={() => this.pickOperation('x*x')}
						disabled={operator !== 1}
					/>
					<Button
						display={'='}
						onClick={() => this.execOperation()}
						disabled={operator === 1}
					/>
					<Button display={'C'} onClick={() => this.clear()} />
				</div>
			</div>
		);
	}
}

export default Calculator;
