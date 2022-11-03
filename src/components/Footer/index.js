import {BsInstagram, BsWhatsapp} from 'react-icons/bs'
import styles from './footer.module.css'
function Footer() {

    return(
        <div>
           
            <div className={styles.footer}>

            <div className={styles.iten1}>
            <BsInstagram/>     
            </div>
            <div className={styles.iten2}>
            <BsWhatsapp/>
            </div>

            </div>
            
        </div>
    )
}
export default Footer