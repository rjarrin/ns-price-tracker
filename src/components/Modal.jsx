import { useCart } from '../context/CartContext';
import '../styles/Modal.css';

const Modal = ({isOpen, onClose, cartItems}) => {

    const { removeFromCart } = useCart();
    
    if (!isOpen) {
        return null;
    }

    const handleRemove = (gameId) => {
        removeFromCart(gameId);
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price?.finalPrice?? 0), 0);

    return (
        <div className='modal-overlay'>
            <button className='close-modal-btn' onClick={onClose}>×</button>
            <div className='modal-content'>
                
                <h2>Items in Cart:</h2>
                <div className="item-container">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                        <img src={item.gameImage} alt={item.title} className="cart-item-image" />
                        <div className="cart-item-details">
                            <div className="cart-item-title">{item.title}</div>
                            <div className="cart-item-price">${item.price?.finalPrice?? 'N/A'}</div>
                        </div>
                        <button className='remove-button' onClick={() => handleRemove(item.nsuid)}>Remove</button>
                        </div>
                    ))}
                </div>
                <div className='total-price-container'>
                    <span>Total Price:</span>
                    <span className='total-price'>${totalPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default Modal;