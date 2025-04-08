import lightBg from '../assets/images/bg-desktop-light.jpg'
import darkBg from '../assets/images/bg-desktop-dark.jpg'
import sun from '../assets/images/icon-sun.svg'
import moon from '../assets/images/icon-moon.svg'


export function Header(props) {
    const { darkTheme, setDarkTheme } = props

    var BgImage = {
        backgroundImage: darkTheme ? `url(${darkBg})` : `url(${lightBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'300px',
        display:'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop:'60px'
    }

    
    return (
        <header style={BgImage}>
        <div className='header-div'>
            <h1>TODO</h1>
            <button onClick={() => setDarkTheme(!darkTheme)} style={{ background:'none', border:'none'}}><img src={darkTheme ? sun : moon} /></button>
            </div>
        </header>
    )
    
}
