import React, { useState } from 'react'
import Link from 'next/link';

import Navlinks from './navlinks/navlinks'
import SideDrawer from './sidedrawer/sidedrawer'

import * as style from './navbar.module.css'

function Navbar(props) {
    const [sidebarShown, setSidebarShown] = useState(false)

    return ( 
        <div className={style.NavBar}>
            <div className={style.NavContainer}>
                
                <div>                
                   <Link href="/">
                    <a className={style.logolink}>
                      <div className={style.monogram}>nguinet.dev</div>
                    </a>
                  </Link>                    
                </div>

                <div className={`${style.NavLinkHolder}`}>
                    <Navlinks />
                </div>
                <button
                    className={`${style.Toggler}`}
                    onClick={() => setSidebarShown(!sidebarShown)}>
                    <div className={`${style.Bar1} ${sidebarShown ? style.CrossBar1 : null}`} />
                    <div className={`${style.Bar2} ${sidebarShown ? style.CrossBar2 : null}`} />
                    <div className={`${style.Bar3} ${sidebarShown ? style.CrossBar3 : null}`} />
                </button>
               
            </div>
            <SideDrawer
                sidebarClose={() => setSidebarShown(false)}
                sidebarShown={sidebarShown}
            />
        </div>
           
    )
}

export default Navbar


