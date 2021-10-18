import Link from 'next/link';
import navstyle from '../styles/nav.module.css';

const Nav = () => {
    return (

        <header id="header1" className={navstyle.nav}>

            <div className={navstyle.nav_inner}>
                <ul className={navstyle.listing_style_header}>
                    <li className={navstyle.menu_item}>
                        <Link  href="/"> 
                        <a className={navstyle.menu_a}>Home</a>
                        </Link>
                    </li>
                    <li className={navstyle.menu_item}>
                        <Link href="/about"> 
                        <a className={navstyle.menu_a}>About</a>
                        </Link>
                    </li>   

                     <li className={navstyle.menu_item}>
                        <Link href="/about"> 
                        <a className={navstyle.menu_a}>Services</a>
                        </Link>
                    </li> 

                     <li className={navstyle.menu_item}>
                        <Link href="/about"> 
                        <a className={navstyle.menu_a}>Projects</a>
                        </Link>
                    </li> 

                     <li className={navstyle.menu_item}>
                        <Link href="/about"> 
                        <a className={navstyle.menu_a}>Contact Us</a>
                        </Link>
                    </li>   

                </ul>
          </div>

          
        </header>
    )

}

export default Nav  