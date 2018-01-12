import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Counter from './Counter'

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Counter />
			</MuiThemeProvider>
		)
	}
};

export default App