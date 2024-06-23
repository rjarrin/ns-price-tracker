import '../styles/GameCard.css';

const GameCard = ({ game, gameImage }) => {
    // OnClick functionality
    // TODO: OnClick, add the item to the cart
    const handleClick = () => {
        console.log('Button hit');
    }

    return (
        <div className='game-card'>
            <div className='game-image-container'>
                <img src={gameImage} alt={game.title} />
                <div className='overlay-text'>{game.title}</div>
            </div>
            <div className='game-info'>
                <span>${game.price.finalPrice}</span>
                <button onClick={handleClick}>Add to cart</button>
            </div>
        </div>
    );
};

export default GameCard;