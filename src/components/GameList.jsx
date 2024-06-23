import { useEffect, useState } from "react";
import { getGamesAmerica, getQueriedGamesAmerica } from "nintendo-switch-eshop";
import GameCard from "./GameCard";
import '../styles/GameList.css';

const GameList = () => {
    const [games, setGames] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 4;

    useEffect(() => {
        const fetchGames = async () => {
            const result = await getQueriedGamesAmerica("mario");
            // Filter the results to only include Switch games
            const switchGames = result.filter(game => game.platformCode === "NINTENDO_SWITCH" && game.title.toLocaleLowerCase().includes("mario"));
            setGames(switchGames);
        };
        fetchGames();
    }, []);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const hanedleNextClick = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, games.length - visibleCount));
    };

    return (
        
        <div className="game-list-container">
            <button className="nav-button left" onClick={handlePrevClick}>&lt;</button>
            <div className="game-list">
                {games.slice(currentIndex, currentIndex + visibleCount).map(game => (
                    <GameCard key={game.productImage} game={game} gameImage={`https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/${game.productImage}`} />
                ))}
            </div>
            <button className="nav-button right" onClick={hanedleNextClick}>&gt;</button>

            {/* <h1>Nintendo eShop Games</h1> */}
            
            
            {/* <ul>
                {games.map(game => (
                    <GameCard key={game.nsuid} game={game} gameImage={`https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/${game.productImage}`} />
                    
                ))}
            </ul> */}
        </div>
    );
};

export default GameList;