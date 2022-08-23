import { ConfigContext } from '../../../components/global/configContext/configContext';
import Layout from '../../../components/global/layout/layout';

export default function About() {
	return (
		<ConfigContext.Consumer>
			{config =>
				<Layout>
					<section style={{ marginTop: '5em' }}>

						<div className='profileSizeContainer'>

							<div className='profileSize fade-in-down marginhcenter'>
								<img className='profile '
									src="/images/profile.jpg"
									height={200} width={200} alt={config.name} />
								<h1 class='marginH1'>Nicolas Guinet</h1>
								<small>Senior Software Engineer</small>
							</div>

							<div>
								<h1>That's me!</h1>
								<p>
									My name's Nicolas Guinet, I'm a software engineer with more than 20 years of experience in a variety of domains. I enjoy creating things for the web or to improve backend/desktop app's performance.
									<br/>This blog is intended to be about technology, science, programming and all stuff related to a scientist developer journeys in a broad sense. 
									<br />During my career, I've written software in many languages, and I'm the most proficient in C#, C, NodeJS, Python and recently playing with Go and Rust. I though the mix wasm/wasmedge + rust + microservices is the next step in development so, as a constant learner, I stay focused on that ecosystem. I aslo take time to train me some IA (Tensorflow/Python/R) projects.
									<br /> I’ve had the privilege of working for a lot of great companies: Axa IM, Suez, Thales, Kepler Equities, Dexia, Rockwool and many smaller entities.
									<br /><br />I'm French, living at Saint-Germain-en-Laye, a city near from Paris. A lot of my own work is Open Source software, and you can find it on this website and github. I create this blog (with NextJS) as I enjoy sharing my learning, be on this blog or Twitter.
									<br/>I would be happy if you connect with me on social media.

								</p>

								<h2>CV/Resume</h2>
								<p>
									<a class='glink marginleft1em' href="GUINET_Nicolas_Resume.pdf" download>👨‍🎓 my resume in pdf</a>
								</p>
								
								<h2>Hobbies and Interests</h2>
								<ul>
									<li>Science</li>
									<li>Geology</li>
									<li>IA</li>
									<li>Maths</li>
									<li>Algorithms</li>
									<li>Web 3.0</li>
									<li>Tech trend: Languages (Rust, Carbon...), Web frameworks, IA (cnn...)</li>
									<li>Mountain bike</li>
								</ul>
					
							</div>		

						</div>		
					</section>
				</Layout>

			}
		</ConfigContext.Consumer>)
}