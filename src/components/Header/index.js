import { useState } from 'react';
import styles from './Header.module.css';
import logo from './ferias.png';
import { useEffect } from 'react';


function Header() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            {isSmallScreen ?
                (
                    <section className={styles.container}>
                        <div className="dropdown">
                            <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H14M4 18H9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className='dropwdown-item' href='#inicio'>Início</a></li>
                                <li><a className='dropwdown-item' href='#destaques'>Destaques</a></li>
                                <li><a className='dropwdown-item' href='#acomodacoes'>Acomodações</a></li>
                                <li><a className='dropwdown-item' href='#equipe'>Equipe</a></li>
                                <li><a className='dropwdown-item' href='#contato'>Contato</a></li>
                            </ul>
                        </div>
                        <img src={logo} alt='logo' />
                    </section>
                )
                :
                (
                    <section className={styles.container}>
                        <div>
                            <a href='#inicio'>Início</a>
                            <a href='#destaques'>Destaques</a>
                            <a href='#acomodacoes'>Acomodações</a>
                            <a href='#equipe'>Equipe</a>
                            <a href='#contato'>Contato</a>
                        </div>
                        <img src={logo} alt='logo' />
                    </section>
                )
            }

        </div>
    )
}

export default Header;