import "./Header.scss"
import kasaLogo from '../../assets/kasaLogo.png'

export default function Header(){
    return (<header>
     <img src={kasaLogo}/>
     <nav>
        <a>Accueil</a>
        <a>A Propos</a>
     </nav>
    </header>)
}