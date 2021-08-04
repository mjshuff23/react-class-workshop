import React from 'react';
import Header from './components/Header';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			handleChildMount: true,
		};
	}

	handleChildUnmount = () => {
		this.setState({
			handleChildMount: false,
		});
	};

	render() {
		return (
			<>
				{this.state.handleChildMount && <Header />}
				{this.state.handleChildMount && (
					<button onClick={this.handleChildUnmount}>Remove Header</button>
				)}
			</>
		);
	}
}

export default App;
