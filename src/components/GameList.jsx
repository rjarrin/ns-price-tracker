import { useEffect, useState } from "react";
import { getGamesAmerica, getQueriedGamesAmerica } from "nintendo-switch-eshop";
import GameCard from "./GameCard";

const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            const result = await getQueriedGamesAmerica("mario");
            // Filter the results to only include Switch games
            const switchGames = result.filter(game => game.platformCode === "NINTENDO_SWITCH" && game.title.toLocaleLowerCase().includes("mario"));
            setGames(switchGames);
        };
        fetchGames();
    }, []);

    return (
        <div>
            {/* <h1>Nintendo eShop Games</h1> */}
            <ul>
                {games.map(game => (
                    <GameCard key={game.nsuid} game={game} gameImage={`https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/${game.productImage}`} />
                    
                    // <li key={game.id}>
                    //     {!process.env.NODE_ENV.includes('production') && <div>{console.log(game)}</div>}
                    //     {game.title}
                    //     <img src={`https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/${game.productImage}`} alt={game.title}/>    
                    // </li>
                ))}
            </ul>
        </div>
    );
};

export default GameList;