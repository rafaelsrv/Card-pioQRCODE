import { Link } from "react-router-dom"

import styles from './Navbar.module.css'




function Navbar(){
    return(
        <nav className={styles.navbar}>
   
       
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/Bebidas'>Bebidas</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/Cervejas'>Cervejas</Link>
                </li>
                <li className={styles.item}>    
                    <Link to='/espetos'>Espetos</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/variados'>Variados</Link>
                </li>
            </ul>
      
        
      </nav>
      )
}
export default Navbar