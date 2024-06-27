import tempLogo from '../assets/react.svg';
import themeIcon from '../assets/theme-light-dark.svg';
import cartIcon from '../assets/cart-outline.svg';
import searchIcon from '../assets/magnify.svg';
import '../styles/Header.css';
import { useState } from 'react';
import Modal from './Modal';

const Header = ({ toggleTheme }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleMyCartClick = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    
    return (
        <>
            <header className='app-header'>
                <div className='header-container'>
                    <div className='header-top'>
                        <div className='logo-container'>
                            <img src={tempLogo} alt="Temporary Logo" />
                        </div>
                        <div className='title-container'>
                            <h1 className='website-title'>Wise Buys</h1>
                            <p className='subtitle'>Nintendo Switch Price Tracker</p>
                        </div>
                        <button onClick={toggleTheme} className='theme-toggle-button'>
                            <img src={themeIcon} alt="Toggle Theme" />
                        </button>
                    </div>
                    <div className='header-bottom'>
                        {/* <button className='browse-button'>Browse</button> */}
                        <select name="filterOption" id="filter-select" className='dropdown-menu'>
                            <option value="featured">Featured</option>
                            <option value="new">New Releases</option>
                            <option value="on-sale">On Sale</option>
                        </select>
                        <button className='my-cart-button' onClick={handleMyCartClick}>
                            <img className='icon-and-text' src={cartIcon} alt="Cart Icon" />
                            My Cart
                        </button>
                        <div className='search-container'>
                            <input type="text" placeholder='Search...' className='search-input' />
                            <button className='search-button'>
                                <img src={searchIcon} alt="Search Icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
        </>
    );
};

export default Header;