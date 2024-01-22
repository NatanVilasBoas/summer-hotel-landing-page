import AcomodacoesCard from '../AcomodacoesCard';
import styles from './Acomodacoes.module.css';
import room1 from './room1.jpg';
import room2 from './room2.jpg';
import room3 from './room3.jpg';

function Acomodacoes() {
    return(
        <section className={styles.container}>
            <h3 id='acomodacoes'>Acomodações</h3>
            <h5>Nossos quartos disponíveis</h5>
            <p>Desfrute de acomodações elegantes e espaçosas que foram projetadas para proporcionar o máximo conforto. Desde suítes à beira-mar até vilas privativas, cada espaço é cuidadosamente decorado para refletir o charme tropical do nosso paraíso.</p>
            <div className={styles.cardGroup}>
                <AcomodacoesCard src={room1} 
                title='Suíte Deluxe'
                text='Experimente o luxo na nossa suíte deluxe, onde cada detalhe foi cuidadosamente projetado para oferecer uma experiência única. Com vistas panorâmicas deslumbrantes, móveis elegantes e comodidades modernas, a Suíte Deluxe é um refúgio perfeito para casais em busca de romance e conforto.'
                />
                <AcomodacoesCard src={room2} 
                title='Vila à Beira-Mar'
                text='Nossas Vilas à Beira-Mar oferecem uma experiência exclusiva à beira da praia, combinando privacidade e conforto. Cada vila é uma escapada tranquila, cercada pela natureza exuberante, proporcionando aos hóspedes uma sensação de paz e serenidade.'
                />
                <AcomodacoesCard src={room3} 
                title='Suíte Familiar'
                text='Perfeita para famílias, a Suíte Familiar oferece espaços amplos e amenidades projetadas para garantir que todos os membros da família desfrutem de uma estadia confortável. Com áreas de convivência e quartos separados, é o lar longe de casa para aventuras em família inesquecíveis.'
                />
            </div>
        </section>
    )
}

export default Acomodacoes;