import Link from 'next/link';

const Index = () => (
	<div>
		<h1>SSR Magician</h1>
		<Link href="/about">
			<button>GO TO ABOUT</button>
		</Link>
		<Link href="/robots">
			<button>GO TO ROBOTS</button>
		</Link>
	</div>
);

export default Index;
