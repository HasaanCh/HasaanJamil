import styles from '../styles/header.module.scss';
import Link from 'next/link';

const Header = () => 
{
    


    return (
        <div className={styles.header_main}>
           <div className={styles.header_content} data-aos="fade-up" data-aos-duration="1000" >

                <div data-aos="fade-right" data-aos-delay="2000"  className={styles.headerbackground}>

                </div>


               <div className={styles.small_title}>
                  <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" > I am <strong>Hasaan Jamil</strong></h1>
               </div>
               <div className={styles.main_heading}>
                   <h2 data-aos="fade-down" data-aos-delay="600"  data-aos-duration="1000">Freelancer for all</h2>
                   <h2 data-aos="fade-down" data-aos-delay="900" data-aos-duration="1000">Your Needs</h2>
                   <p data-aos="fade-down" data-aos-delay="1200" data-aos-duration="1000">I am Hasaan Jamil Your All in one Full-Stack Developer</p>
                   <Link href="/services"><a  data-aos="fade-left"  data-aos-delay="1500" className="btn-5" data-aos-duration="1000">Get to know us</a></Link>

            
               </div>
           </div>

        </div>
    )
}

export default Header