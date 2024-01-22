import styles from './Contato.module.css'


function Contato() {
    return(
        <section className={styles.container}>
            <hr/>
            <h3 id='contato'>Contato</h3>
            <h5>Reserve sua estadia agora</h5>
            <p>Email: <strong>email@email.com</strong></p>
            <p>Telefone e Whastapp: <strong>(XX) xxxxx-xxxx</strong></p>
        </section>
    )
}

export default Contato;