import Inicio from '../Inicio';
import styles from './Content.module.css';

function Content() {
    return(
        <section className={styles.container}>
            <Inicio />
        </section>
    )
}

export default Content;