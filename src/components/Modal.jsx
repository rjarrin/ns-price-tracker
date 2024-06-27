import '../styles/Modal.css';

const Modal = ({isOpen, onClose}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <h2>Items Selected</h2>
                <p>some text</p>
                <p>some more text</p>
                <button className='close-modal-btn' onClick={onClose}>×</button>
            </div>
        </div>
    );
};

export default Modal;