import { useEffect, useState } from 'react';

export default function App() {
	const [message, setMessage] = useState('');

	useEffect(() => {
		async function getTasks() {
			const res = await fetch('/api/tasklistify');
			const tasks = await res.json();

			setMessage(tasks.mssg);
		}
		getTasks();
	}, []);

	return (
		<main className='container'>
			<h1>Hello world</h1>
			{message && <p>{message}</p>}
		</main>
	);
}
