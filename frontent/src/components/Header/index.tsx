import logo from '../../assets/img/logo.svg'
import "./styles.css" 

function Header(){
    return(
        <>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="" />
            <h1>Vendas</h1>
            <p>
                Desenvolvido por: 
                <a href="https://github.com/robsonpereiradasilva"> Robson Silva</a>
            </p>

        </div>
        </>
    )
}

export default Header