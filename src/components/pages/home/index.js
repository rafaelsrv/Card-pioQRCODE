import Espetos from "../espetos"
import Bebidas from "../bebidas"
import Cervejas from "../cervejas"
import Variados from "../variados"


function Home(){
    return(
        <div>
            <Bebidas/>
            <Cervejas/>
            <Espetos/>
            <Variados/>
        </div>
    )
}
export default Home