import styles from './bebidas.module.css'

function Bebidas() {
    return (
        <div className={styles.fundo} >
            <div></div>
            <div className={styles.div_list}>
                <li className={styles.titulo_list}>BEBIDAS </li>
                <li className={styles.itens_list}>YPIOCA BRANCA(DOSE) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . R$ 6,00</li>
                <li className={styles.itens_list}>YPIOCA BRANCA(LITRO). . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . R$ 6,00</li>
                <li className={styles.itens_list}>YPIOCA BRANCA(DOSE) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . R$ 6,00</li>
                <li className={styles.itens_list}>YPIOCA BRANCA(LITRO) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  R$ 6,00</li>
                <li className={styles.itens_list}>WHISKY BLACK WHITE(DOSE) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .R$ 6,00</li>
                <li className={styles.itens_list}>WHISKY BLACK WHITE(LITRO) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . R$ 6,00</li>
                <li className={styles.itens_list}>VINHO SÃO BRAS(COPO) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . R$ 6,00</li>
                <li className={styles.itens_list}>VINHO QUINTAS DO MORGADO . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . R$ 6,00</li>
                <li className={styles.itens_list}>SMIRNOFF ICE  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . R$ 6,00</li>
                
            
            </div>

            
        </div>
    )
}
export default Bebidas