import style from './me.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ConfigContext } from '../../components/configContext';
import Contact from '../../components/contact/contact';
import MyBackPack from './mybackpack/mybackpack';


            


export default function Me() {
	return (
		 <ConfigContext.Consumer>
    	 { config =>
			<section style={{marginTop:'10em'}}>

				<div className='flexcenter'>

					<div className={`${style.hello} roll-in`}>	
						<h1>Nicolas Guinet</h1>

						<div className='relative'>
							<div className={style.role}>Product developer</div>
							I <span>build</span> robust custom desktop/web solutions for the <span>satisfaction</span> of my clients
						</div>
						<div className='halign'>
							<div>
							<Link  href='/projects'> 
									<a  className='blue-button'>My projects</a> 
								</Link>
								<Link  href='#getintouch'> 
									<a  className='blue-button'>Get in touch</a> 
								</Link>
							</div>
						</div>

					</div>

					<div className={style.profileSize}>		
						<img className={`${style.profile} fade-in-down`} 
						src="/images/profile.jpg"
						height={256} width={256} alt={config.name} />
					</div>
				</div>
				
				<MyBackPack/>
				
						
				<div id='getintouch'>
					<h1> Have a project in mind?</h1>
					Let's exchange about it!

					<Contact/>

				</div>
	         
	        </section>
          }
    </ConfigContext.Consumer>)
}