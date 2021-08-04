import React from 'react';
import Header from './components/Header';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			headerMounted: true,
		};
	}

	unmountHeader = () => {
		this.setState({
			headerMounted: false,
		});
	};

	render() {
		const { headerMounted } = this.state;
		return (
			<>
				{headerMounted && <Header />}
				{headerMounted && (
					<button onClick={this.unmountHeader}>Remove Header</button>
				)}
			</>
		);
	}
}

// function App() {
// 	let [headerMounted, setHeaderMounted] = useState(true);

// 	const unmountHeader = () => {
// 		setHeaderMounted(false);
// 	};

// 	return (
<>
	{/* {headerMounted && <Header title={title} />}
			{headerMounted && <button onClick={unmountHeader}>Remove Header</button>} */}
</>;
// 	);
// }

export default App;
