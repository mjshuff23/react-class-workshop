import React from 'react';
import './styles/Errors.css';

class Errors extends React.Component {
	componentDidMount() {
		console.log('Errors component has mounted!');
	}

	render() {
		return <div id="errors"></div>;
	}
}

export default Errors;
