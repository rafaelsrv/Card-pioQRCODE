import {BsInstagram, BsWhatsapp, BsLinkedin, BsGithub} from 'react-icons/bs'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'
function Footer() {

    return(
        <div>
           
            <div className={styles.footer}>

            <div className={styles.iten1}>
            
            <a href="https://www.instagram.com/botecoo_do_tiao/" target="_blank" rel="noreferrer"><BsInstagram /></a>    
            
            </div>
            <div className={styles.iten2}>
            <a href="https://www.instagram.com/botecoo_do_tiao/" target="_blank" rel="noreferrer"><BsWhatsapp/></a>
            </div>
            <div className={styles.iten3}>
                <a href="https://www.linkedin.com/in/rafael-saraiva-b45aaa170/" target ="_blank" rel="noreferrer"><BsLinkedin/></a>
            </div>
            <div className={styles.iten4}>
                <a href="https://github.com/rafaelsrv" target ="_blank" rel="noreferrer"><BsGithub/></a>
            </div>
            </div>
            
        </div>
    )
}
export default Footer