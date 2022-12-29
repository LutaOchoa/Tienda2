import './NavBar.css';

const Cabecera = () => {
return(
    <header className="Cabecera">
        <h1 className="Cabecera-h1">
            <a href="#" className="Cabecera-a">
                LOGO
            </a>
        </h1>

        <button className='Cabecera-button'>
        <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>

        <nav className='Cabecera-nav isActive'>
            <ul className='Cabecera-ul'>
                <li className='Cabecera-li'><a href='#' className='Cabecera-a'> ITEM 1</a></li>
                <li className='Cabecera-li'><a href='#' className='Cabecera-a'> ITEM 2</a></li>
                <li className='Cabecera-li'><a href='#' className='Cabecera-a'> ITEM 3</a></li>
                <li className='Cabecera-li'><a href='#' className='Cabecera-a'> ITEM 4</a></li>
                <li className='Cabecera-li'><a href='#' className='Cabecera-a'> ITEM 5</a></li>
            </ul>
        </nav>

    </header>
)
}

export default Cabecera 