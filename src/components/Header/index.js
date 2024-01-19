import styles from './Header.module.css';
import  logo  from './ferias.png';


function Header() {
    return(
        <div>
            <section className={styles.container}>
                <div>
                    <a href='#inicio'>Início</a>
                    <a href='#destaques'>Destaques</a>
                    <a href='#acomodacoes'>Acomodações</a>
                    <a href='#atividades'>Atividades</a>
                    <a href='#contato'>Contato</a>
                </div>
                <img src={logo} />
            </section>
        </div>
    )
}

export default Header;