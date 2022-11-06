import styles from './espetos.module.css'



function Espetos() {
    return (
        <div className={styles.fundo} >
            
            
                     
           <li className={styles.titulo_list}> ESPETOS </li>
           <div className={styles.div_list}>
                <div className={styles.divEsquerda}>              
                <li className={styles.itens_list}> CARNE </li>
                <li className={styles.itens_list}> CARNE COM BACON </li>
                <li className={styles.itens_list}> CARNE COM BACON </li>
                <li className={styles.itens_list}> CARNE COM BACON </li>
                <li className={styles.itens_list}> CARNE COM BACON </li>
                <li className={styles.itens_list}> CARNE COM BACON </li>
                <li className={styles.itens_list}> CARNE COM BACON </li>
                
                </div>

                <div className={styles.divMeio}>
                <li className={styles.itens_list}>__________________________________________________</li>
                <li className={styles.itens_list}>__________________________________________________</li>
                <li className={styles.itens_list}>__________________________________________________</li>
                <li className={styles.itens_list}>__________________________________________________</li>
                <li className={styles.itens_list}>__________________________________________________</li>
                <li className={styles.itens_list}>__________________________________________________</li>
                <li className={styles.itens_list}>__________________________________________________</li>
                <li className={styles.itens_list}>__________________________________________________</li>

                </div>
               
                <div className={styles.divDireita}>
                
                <li className={styles.itens_list}> R$ 6,00 </li>
                <li className={styles.itens_list}> R$ 6,00 </li>
                <li className={styles.itens_list}> R$ 6,00 </li>
                <li className={styles.itens_list}> R$ 6,00 </li>
                <li className={styles.itens_list}> R$ 6,00 </li>
                <li className={styles.itens_list}> R$ 6,00 </li>
                <li className={styles.itens_list}> R$ 6,00 </li>
                
                
               

                </div>
            
            
            </div>

            
        </div>
    )
}
export default Espetos