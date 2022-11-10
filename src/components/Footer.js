import '../style/components/Footer.css'
import logofooter from '../assets/logofooter.png'

function Footer() {
    return (
         <div className='footerContainer'>
            <img src={logofooter} alt='kasa' className='footerLogo' />
            <p className='footerCopyrights'>&copy;2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer