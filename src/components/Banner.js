import '../style/components/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    return (
         <div className='headerContainer'>
            <img src={logo} alt='Kasa' className='headerLogo' />
            <p className='headerWelcome'>Accueil</p>
            <p className='headerAbout'>A propos</p>
        </div>
    )
}

export default Banner