import React, { useState, useEffect } from 'react';

function Header() {
	// This is the same as this.state in a class component
	const [header, setHeader] = useState('This is a Header!');
	const [initialMount, setInitialMount] = useState(false);
	// useEffect with an empty dependency array is the equivalent of componentDidMount();
	useEffect(() => {
		// A little hacky, but this is how you can separate componentDidMount() and componentDidUpdate()
		if (!initialMount) {
			console.log('Header mounted');
			setInitialMount(true);
		} else {
			console.log(header);
		}
	}, [header]);

	const updateHeader = (e) => {
		setHeader(e.target.value);
	};

	return (
		<header className="Header">
			<h1>{header}</h1>
			<label>
				Update Header:
				<input
					className="header-input"
					type="text"
					value={header}
					onChange={updateHeader}
				/>
			</label>
		</header>
	);
}

export default Header;
