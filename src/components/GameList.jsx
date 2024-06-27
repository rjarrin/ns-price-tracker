import { useEffect, useReducer, useRef, useState } from "react";
import { getQueriedGamesAmerica } from "nintendo-switch-eshop";
import GameCard from "./GameCard";
import '../styles/GameList.css';

const GameList = ({ searchTerm, filterType }) => {
    const [games, setGames] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    // const visibleCount = 4.8;
    const [visibleCount, setVisibleCount] = useState(5);
    const gameListRef = useRef(null);

    useEffect(() => {
        const calculateVisibleCount = () => {
            let count;
            if (window.innerWidth <= 600) {
                count = 2.8;
            } else if (window.innerWidth <= 1900) {
                count = 4.8;
            } else {
                count = 6.8;
            }
            setVisibleCount(count);
        };
        calculateVisibleCount();
        window.addEventListener('resize', calculateVisibleCount);
        return () => window.removeEventListener('resize', calculateVisibleCount);
    }, []);

    useEffect(() => {
        const fetchGames = async () => {
            if (searchTerm !== null) {
                const result = await getQueriedGamesAmerica(searchTerm);
                const switchGames = result.filter(game => game.platformCode === "NINTENDO_SWITCH" && game.title.toLocaleLowerCase().includes(searchTerm));
                setGames(switchGames);
            } else if (filterType) {
                const result = await getQueriedGamesAmerica();
                if (filterType === "Featured") {
                    const switchGames = result.filter(game => game.platformCode === "NINTENDO_SWITCH" && game.featured);
                    console.log("IN FILTER FEATURED")
                    setGames(switchGames);
                } else if (filterType === "Latest") {
                    const cutoffDate = new Date();
                    cutoffDate.setMonth(cutoffDate.getMonth() - 4);
                    const switchGames = result.filter(game => game.platformCode === "NINTENDO_SWITCH" &&  new Date(game.updatedAt) >= cutoffDate);
                    console.log("new reelease");
                    setGames(switchGames);
                } else if (filterType == "OnSale") {
                    const switchGames = result.filter(game => game.platformCode === "NINTENDO_SWITCH" && game.price && game.price.finalPrice < game.price.regPrice);
                    console.log("ON SALE IN HERE");
                    setGames(switchGames);
                }
            }
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
            <button className="nav-button right" onClick={handleNextClick} disabled={currentIndex >= games.length - visibleCount * 1}>&gt;</button>
        </div>
    );
};

export default GameList;