import style from '../me.module.css';
import Image from 'next/image';
import { ConfigContext } from '../../../components/configContext';
import Layout from '../../../components/layout';

export default function About() {
	return (
		 <ConfigContext.Consumer>
    	 { config =>
	  	<Layout>
			<section style={{marginTop:'5em'}}>

				<div className='flexcenter'>

					<div className={style.profileSize}>		
						<img className={`${style.profile} fade-in-down`} 
						src="/images/profile.jpg"
						height={200} width={200} alt={config.name} />
					</div>

					<div>
						<h1>That's me!</h1> 
						<p>
							My name's Nicolas Guinet and I enjoy creating things for the web or to improve backend/desktop app's performance.
							I'm a software engineer with a scientific masters degree.<br/> I’ve had the privilege of working for a lot of great companies: Axa IM, Suez, Thales, Kepler Equities, Dexia, Rockwool and a many smaller entities. 
							I'm French, living at Saint-Germain-en-Laye, a city not too far from Paris. 
							A lot of my work is Open Source software, and you can find it on this website and github.
						</p>
						
						<h2>CV/Resumé</h2>
						<p>
				           <a href="https://github.com" target="_blank">PDF To do</a>
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


						<h2>Where I’ve Worked</h2>
						<p>
							to be completed
				        </p>   
					</div>

				</div>
	         
	        </section> 
      </Layout>

	}
    </ConfigContext.Consumer>)
}