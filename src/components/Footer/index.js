import styles from './Footer.module.css'
import logo from './ferias.png'

function Footer() {
    return(
        <section className={styles.container}>
            <div className={styles.info}>
                <p>Criado por <a href="https://github.com/NatanVilasBoas">NatanVilasBoas</a></p>
                <p>Copyright &copy; Natan Vilas Boas - 2024</p>
            </div>
            <div className={styles.image}>
                <img src={logo}/>
            </div>
        </section>
    )
}

export default Footer;