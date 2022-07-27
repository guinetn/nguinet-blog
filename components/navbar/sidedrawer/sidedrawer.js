import React from 'react'
import Link from 'next/link';
import Navlinks from '../navlinks/navlinks'

import * as style from './sidedrawer.module.css'

function SideDrawer(props) {
    const { sidebarClose, sidebarShown } = props

    return (
        <div className={`${style.Backdrop} ${sidebarShown ? style.BackdropOpen : style.BackdropClose}`} onClick={sidebarClose}>
            <div className={`${style.SideBarBody} ${sidebarShown ? style.SideBarBodyOpen : style.SideBarBodyClose}`}>
                <div>
                    <Link href="/">
                        <a>nguinet.dev</a>
                    </Link>
                    <Navlinks />
                </div>
            </div>
        </div>
    )
}

export default SideDrawer