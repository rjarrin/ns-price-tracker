import "../styles/GameCard.css";
import { useCart } from "../context/CartContext";

const GameCard = ({ game, gameImage }) => {
  // OnClick functionality
  // TODO: OnClick, add the item to the cart
  const { addToCart } = useCart();

  const handleClick = () => {
    //console.log(`${game.title} selected`);
    addToCart({ ...game, gameImage });
  };

  return (
    <div className="game-card">
      <div className="game-image-container">
        <img src={gameImage} alt={game.title} />
        <div className="overlay-text">{game.title}</div>
      </div>
      <div className="game-info">
        <span>${game.price?.finalPrice ?? "N/A"}</span>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    </div>
  );
};

export default GameCard;
