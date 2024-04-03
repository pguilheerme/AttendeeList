import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import NavLink from './navLink'

export default function Header(){
    return(
        <div className='flex items-center gap-5 py-3'>
            <img src={nlwUniteIcon} alt="" />
            
            <nav className='flex items-center gap-5'>
                <NavLink href='/eventos'>Eventos</NavLink>
                <NavLink  href='/participantes'>Participantes</NavLink>
            </nav>
        </div>
    )
}