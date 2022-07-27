import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { ConfigContext } from './configContext';
import Navbar from './navbar/navbar';

export default function Layout({ children }) { 

  return (
    <ConfigContext.Consumer>
     { config =>
      <div className={styles.container}>
       

        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content={config.siteDescription}
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              config.siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={config.siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
       
       <Navbar/>
        
        <main className={styles.mainpage}>
          {children}
        </main>

      </div>
    }
    </ConfigContext.Consumer>
  );
}

