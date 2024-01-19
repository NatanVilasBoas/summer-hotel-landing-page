import Destaques from '../Destaques';
import Inicio from '../Inicio';
import styles from './Content.module.css';

function Content() {
    return(
        <section className={styles.container}>
            <Inicio />
            <Destaques />
        </section>
    )
}

export default Content;