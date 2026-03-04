import "./Footer.scss"
import footerLogo from '../../assets/footerLogo.png'

export default function Footer(){
    return (<footer>
     <img src={footerLogo}/>
     <p>© 2020 Kasa. All rights reserved</p>
    </footer>)
}