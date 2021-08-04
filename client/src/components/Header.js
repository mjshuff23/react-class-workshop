import React from 'react';
// import { connect } from 'react-redux'
class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			header: 'This is a Header!',
			name: '',
		};
	}

	componentDidMount() {
		console.log('Header mounted!');
	}

	componentDidUpdate() {
		console.log('Component Updated');
	}

	componentWillUnmount() {
		console.log('Unmounting Header');
	}

	updateHeader = (e) => {
		this.setState({
			header: e.target.value,
		});
	};

	render() {
		const { header } = this.state;
		return (
			<header className="Header">
				<h1>{header}</h1>
				<label>
					Update Header:
					<input
						className="header-input"
						type="text"
						value={header}
						onChange={this.updateHeader}
					/>
				</label>
				<hr />
			</header>
		);
	}
}

/* const mapStateToProps = state => ({
   counter: state.counter
 });

const mapDispatchToProps = () => {
	return {
		increment,
		decrement,
	};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(App); */

export default Header;
