import tempLogo from '../assets/react.svg';
import themeIcon from '../assets/theme-light-dark.svg';
import cartIcon from '../assets/cart-outline.svg';
import searchIcon from '../assets/magnify.svg';
import '../styles/Header.css';
import { useState } from 'react';
import Modal from './Modal';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = ({ toggleTheme }) => {
    const {cart} = useCart();
    const itemCount = cart.length;
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?term=${encodeURIComponent(searchTerm)}`);

    }
    
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
                            {/* <img src={tempLogo} alt="Temporary Logo" /> */}
                            <Link to="/">
                                <img src={tempLogo} alt="Temp Logo" />
                            </Link>
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
                            {itemCount > 0 && <span className='cart-item-count'>{itemCount}</span>}
                        </button>

                        <form onSubmit={handleSearchSubmit}>
                            <div className='search-container'>
                                <input type="text" placeholder='Search...' className='search-input' value={searchTerm} onChange={handleSearchChange} />
                                <button type='submit' className='search-button'>
                                    <img src={searchIcon} alt="Search Icon" />
                                </button>
                            </div>
                        </form>
                        
                        
                        {/* <div className='search-container'>
                            <input type="text" placeholder='Search...' className='search-input' />
                            <button className='search-button'>
                                <img src={searchIcon} alt="Search Icon" />
                            </button>
                        </div> */}
                    </div>
                </div>
            </header>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} cartItems={cart}/>}
        </>
    );
};

export default Header;