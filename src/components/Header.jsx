import tempLogo from '../assets/react.svg';
import themeIcon from '../assets/theme-light-dark.svg';
import '../styles/Header.css';

const Header = ({ toggleTheme }) => {
    return (
        <header className='app-header'>
            <div className='logo-container'>
                <img src={tempLogo} alt="Temporary Logo" />
            </div>
            <div className='title-container'>
                <h1 className='website-title'>Wise Buys</h1>
                <p className='subtitle'>Nintendo Switch Price Tracker</p>
            </div>
            <button onClick={toggleTheme} className='theme-toggle-button'>
                <img src={tempLogo} alt="Toggle Theme" />
            </button>
        </header>
    );
};

export default Header;