import DestaquesCard from '../DestaquesCard';
import styles from './Destaques.module.css';
import destaque1 from './destaque1.jpg';
import destaque2 from './destaque2.jpg';
import destaque3 from './destaque3.jpg';

function Destaques() {
    return(
        <section>
            <h3 id='destaques'>Destaques</h3>
            <h5>Eventos Memoráveis</h5>
            <p>Celebre momentos especiais em um cenário verdadeiramente paradisíaco. Do seu casamento de sonho à conferência executiva, nossas instalações versáteis e equipe dedicada garantirão que cada evento seja inesquecível.</p>
            <div className={styles.container}>
                <div id='destaquesCarousel' class="carousel slide" data-bs-ride="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <DestaquesCard src={destaque1} 
                            title='Restaurante reformado'
                            text='Venha conferir as novidades e provar nossas especialidades em nosso novo restaurante'/>
                        </div>
                        <div class="carousel-item">
                            <DestaquesCard src={destaque2} 
                            title='Vista magnífica'
                            text='Uma vista maravilhosa para descansar e aproveitar'
                            />
                        </div>
                        <div class="carousel-item">
                            <DestaquesCard src={destaque3} 
                            title='Piscinas e Spa'
                            text='Atendimento especilizado para massagens e outras atividades recreativas próximo a piscina'
                            />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#destaquesCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#destaquesCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Destaques;