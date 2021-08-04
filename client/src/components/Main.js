import React, { useEffect, useState } from 'react';

function Main() {
	let [body, setBody] = useState('');
	let [counter, setCounter] = useState(0);
	let [bodyLoaded, setBodyLoaded] = useState(false);
	let [lastLoaded, setLastLoaded] = useState(0);

	useEffect(() => {
		(async () => {
			let randomPerson = Math.floor(Math.random() * 15 + 1);
			while (randomPerson === lastLoaded) {
				randomPerson = Math.floor(Math.random() * 15 + 1);
			}
			const response = await fetch(
				`https://swapi.dev/api/people/${randomPerson}`
			);
			const data = await response.json();
			setBody(data.name);
			setBodyLoaded(true);
			setLastLoaded(randomPerson);
		})();
	}, [counter]);

	const updateCounter = () => {
		setCounter(++counter);
		console.log(counter);
	};

	return (
		<main>
			<p>{body}</p>
			{bodyLoaded && <button onClick={updateCounter}>Fetch new person</button>}
		</main>
	);
}

export default Main;
