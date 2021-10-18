import styles from '../styles/Layout.module.css';
import Nav from './nav.component'



const Layout = ({children}) => {
    return (
        <div className={styles.main_container}>
            <Nav>

            </Nav>
        <main className={styles.main}>
        {children}
        </main>

       
        
       

        </div>
    )
}

export default Layout