import Link from 'next/link';

const Robots = (props) => {
	return (
		<div>
			<h1>Robots</h1>
			<Link href="/">
				<button>HOME</button>
			</Link>
			<div>
				{
					props.robots.map(robot => (
						<li key={robot.id}>
							<Link href={`robots/${robot.id}`}>
								<button>{robot.name}</button>
							</Link>
						</li>
					))
				}
			</div>
		</div>
	)
}

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()
	return {
		props: {
			robots: data
		}
	}
}

// Robots.getInitialProps = async function(){
// 	const res = await fetch('https://jsonplaceholder.typicode.com/users')
// 	const data = await res.json()
// 	console.log(data)
// 	return {
// 		robots: data
// 	}
// }

export default Robots;
