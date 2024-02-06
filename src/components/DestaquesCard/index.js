import styles from './DestaquesCard.module.css';

function DestaquesCard(props) {
    return(
        <div className={`card mb-3 ${styles.card}`}>
            <img src={props.src} className={`card-img-top img-fluid`} alt={props.title}/>
            <div className={`card-body ${styles.cardBack}`}>
                <h5 className={`card-title ${styles.cardTitle}`}>{props.title}</h5>
                <p className={`card-text ${styles.cardText}`}>{props.text}</p>
            </div>
        </div>
    )
}

export default DestaquesCard