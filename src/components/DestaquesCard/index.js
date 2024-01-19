import styles from './DestaquesCard.module.css';

function DestaquesCard(props) {
    return(
        <div class="card mb-3 d-block w-80">
            <img src={props.src} class="card-img-top" alt={props.title}/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default DestaquesCard