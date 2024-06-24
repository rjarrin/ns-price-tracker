import { useEffect, useReducer, useRef, useState } from "react";
import { getGamesAmerica, getQueriedGamesAmerica } from "nintendo-switch-eshop";
import GameCard from "./GameCard";
import '../styles/GameList.css';

const GameList = () => {
    const [games, setGames] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 4;
    const gameListRef = useRef(null);

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
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            if (gameListRef.current) {
                gameListRef.current.style.transition = 'transform 0.5s ease-in-out';
                gameListRef.current.style.transform = `translateX(-${(currentIndex - 1) * (100 / visibleCount)}%)`;
            }
        }
    };

    const handleNextClick = () => {
        const maxIndex = games.length - visibleCount;
        if (currentIndex < maxIndex) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            if (gameListRef.current) {
                gameListRef.current.style.transition = 'transform 0.5s ease-in-out';
                gameListRef.current.style.transform = `translateX(-${(currentIndex + 1) * (100 / visibleCount)}%)`;
            }
        }
    };

    return (
        <div className="game-list-container">
            <button className="nav-button left" onClick={handlePrevClick} disabled={currentIndex === 0}>&lt;</button>
            <div className="game-list-wrapper">
                <div className="game-list" ref={gameListRef}>
                    {games.map(game => (
                        <GameCard key={game.nsuid} game={game} gameImage={`https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/${game.productImage}`} />
                    ))}
                </div>
            </div>
            <button className="nav-button right" onClick={handleNextClick} disabled={currentIndex >= games.length - visibleCount * 2}>&gt;</button>
        </div>
    );
};

export default GameList;