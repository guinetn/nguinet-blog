import Head from 'next/head';
import Image from 'next/image';

import Layout, { siteTitle } from '../components/layout';
import { ConfigContext } from '../components/configContext';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
     <ConfigContext.Consumer>
     { config => 
      <Layout home>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Welcome</h2>
          
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt={config.name}
          />

         
        </section>
      </Layout>
    }
    </ConfigContext.Consumer>
  );
}