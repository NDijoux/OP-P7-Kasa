import '../style/pages/Home.css'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import backgroundhome from '../assets/backgroundhome.png'

const Home = ({lodgings}) => {
    return (
        <div className='homeContainer'>
            <Banner />
            <div className='homeBody'>
                <h1 className='homeTitle'>Chez vous, partout et ailleurs</h1>
                <img src={backgroundhome} alt='background' className='homeBackground' />
            </div>
            <Footer />
        </div>
    )
}

export default Home