import React, { Component } from 'react';

class Button extends Component {
	handleClick() {
		const { disabled, onClick } = this.props;
		if (onClick && !disabled) this.props.onClick();
	}

	render() {
		const cssButtonClass = this.props.disabled ? 'button glitch-box disabled' : 'button glitch-box';
		return (
			<div
				className={cssButtonClass}
				onClick={this.handleClick.bind(this)}
			>
				{this.props.display}
			</div>
		);
	}
}

export default Button;
