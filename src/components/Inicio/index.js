import styles from './Inicio.module.css';


function Inicio() {
    return(
        <section className={styles.container}>
                <h3 id='inicio'>Início</h3>
                <h5>Bem-vindo ao Paraíso Tropical Resort</h5>
                <p>
                Descubra o refúgio perfeito onde o luxo encontra a serenidade. No Paraíso Tropical Resort, oferecemos uma experiência única que combina beleza natural, conforto excepcional e serviços de classe mundial. Seu refúgio de sonhos espera por você.
                </p>
        </section>
    )
}

export default Inicio;