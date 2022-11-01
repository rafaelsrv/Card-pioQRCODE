import { Link } from "react-router-dom"

import styles from './Navbar.module.css'




function Navbar(){
    return(
        <nav className={styles.navbar}>
   
       
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/home'>Todos</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/Bebidas'>Bebidas</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/Cervejas'>Cervejas</Link>
                </li>
                <li className={styles.item}>    
                    <Link to='/Espetos'>Espetos</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/Variados'>Variados</Link>
                </li>
            </ul>
      
        
      </nav>
      )
}
export default Navbar