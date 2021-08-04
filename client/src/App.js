import React, { useState } from 'react';
import Header from './components/Header';

function App() {
	let [headerMounted, setHeaderMounted] = useState(true);

	const unmountHeader = () => {
		setHeaderMounted(false);
	};

	return (
		<>
			{headerMounted && <Header />}
			{headerMounted && <button onClick={unmountHeader}>Remove Header</button>}
		</>
	);
}

export default App;
