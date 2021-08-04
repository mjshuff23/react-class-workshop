import React from 'react';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			header: 'Header',
		};
	}

	componentDidMount() {
		console.log('Header mounted');
	}

	componentDidUpdate() {
		console.log(this.state.header);
	}

	updateHeader = (e) => {
		this.setState({
			header: e.target.value,
		});
	};

	render() {
		return (
			<header className="Header">
				<h1>{this.state.header}</h1>
				<label>
					Update Header:
					<input
						className="header-input"
						type="text"
						value={this.state.header}
						onChange={this.updateHeader}
					/>
				</label>
			</header>
		);
	}
}

export default Header;
