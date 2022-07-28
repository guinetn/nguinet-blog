import style from './me.module.css';
import Image from 'next/image';
import { ConfigContext } from '../../components/configContext';

export default function Me() {
	return (
		 <ConfigContext.Consumer>
    	 { config =>
			 <section style={{marginTop:'10em'}}>

			  <div className={style.aboutme}>

			  	<div className={`${style.hello} roll-in`}>	
	          		<h1>Hello I'm Nicolas</h1>
	          		<div>I <span>build</span> robust custom desktop/web solutions for the <span>satisfaction</span> of my clients</div>
	          		<div>
	          		
			  			<button>My projects</button>
			  			<button>Get in touch</button>
			  		</div>
			  	</div>

			  	<div className={style.profileSize}>		
		          <img
		          	className={`${style.profile} fade-in-down`} 
		            src="/images/profile.jpg"
		            height={256}
		            width={256}
		            alt={config.name} />
			  </div>

			  </div>
	         
	        </section>
          }
    </ConfigContext.Consumer>)
}