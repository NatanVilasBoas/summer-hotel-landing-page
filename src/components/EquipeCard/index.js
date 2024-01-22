import styles from './EquipeCard.module.css'


function EquipeCard(props) {
    return(
    <div className="col">
    <div className={`card h-100 ${styles.card}`}>
      <div className="card-body">
        <h5 className='card-title'>{props.name}</h5>
        <h6 className='card-subtitle'>{props.cargo}</h6>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  </div>
    )
}

export default EquipeCard;