import Link from 'next/link';
import Image from '../components/Image';


const About = () => (
	<div>
		<h1>About</h1>
		<Image />
		<Link href="/">
			BACK
		</Link>
	</div>
);

export default About;