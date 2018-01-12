import React, {Component} from 'react'

class Counter extends Component {
	state = {
		counter: 0
	}

	componentDidMount() {
		this.setState({
			counter: this.state.counter + 1
		}, () => console.log('Component states update done !'))
	}

	onPlusClickHandler = () => {
		this.setState({counter: this.state.counter + 1})
	}

	onMinusClickHandler = () => {
		this.setState({counter: this.state.counter - 1})
	}

	render() {
		console.log('Render!', this.state)
		return (
			<div>{this.state.counter}<br/>
			<button onClick={this.onPlusClickHandler}>+</button>&nbsp;
			<button onClick={this.onMinusClickHandler}>-</button>
			</div>
		)
    }
}

export default Counter