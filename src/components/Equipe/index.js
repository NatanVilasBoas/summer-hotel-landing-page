import EquipeCard from '../EquipeCard';


function Equipe() {
    return(
        <section>
            <h3 id='equipe'>Equipe</h3>
            <h5>Conheça nossa equipe</h5>
            <p>Na equipe do Paraíso Tropical Resort, estamos dedicados a tornar a sua estadia verdadeiramente excepcional. Com uma equipe diversificada e experiente, cada membro é apaixonado por proporcionar um serviço de classe mundial e garantir que todos os detalhes da sua experiência conosco sejam impecáveis.</p>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                <EquipeCard 
                    name='Maria Silva' 
                    cargo='Diretora de Atendimento ao Cliente'
                    text='Maria é apaixonada por garantir que cada hóspede tenha uma estadia inesquecível. Com uma vasta experiência em hospitalidade, ela lidera nossa equipe dedicada a garantir o mais alto padrão de serviço ao cliente.'/>
                <EquipeCard 
                    name='João Santos' 
                    cargo='Chef Executivo'
                    text='João é o gênio culinário por trás das experiências gastronômicas exclusivas no Paraíso Tropical Resort. Sua paixão pela culinária local e internacional resulta em pratos que encantam os sentidos e cativam os paladares mais exigentes.'/>
                <EquipeCard 
                    name='Ana Rodrigues'
                    cargo='Diretora de Bem-Estar'
                    text='Ana é especialista em proporcionar momentos relaxantes e rejuvenescedores aos nossos hóspedes. Seja no spa ou em atividades de bem-estar, ela está comprometida em garantir que cada visitante deixe nosso resort sentindo-se renovado e revigorado.'/>
                <EquipeCard 
                    name='Carlos Oliveira'
                    cargo='Coordenador de Atividades Recreativas'
                    text='Carlos é responsável por garantir que a diversão nunca pare no Paraíso Tropical Resort. Sua energia contagiante e criatividade tornam as atividades recreativas uma experiência emocionante para todos os hóspedes, desde crianças até adultos.'/>
                <EquipeCard 
                    name='Gabriela Costa'
                    cargo='Coordenadora de Eventos'
                    text='Gabriela é a mente brilhante por trás dos eventos memoráveis realizados no resort. Com atenção aos detalhes e criatividade sem limites, ela trabalha de perto com os hóspedes para garantir que cada ocasião seja única e inesquecível.'/>

            </div>
        </section>
    )
}

export default Equipe;