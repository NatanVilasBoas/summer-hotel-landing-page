import styles from './AcomodacoesCard.module.css'


function AcomodacoesCard(props){
    return(
        <div className={styles.card}>
            <img src={props.src} />
            <div className={styles.cardBody}>
                <h5>{props.title}</h5>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default AcomodacoesCard;