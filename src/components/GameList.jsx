import { useEffect, useState } from "react";
import { getGamesAmerica, getQueriedGamesAmerica } from "nintendo-switch-eshop";

const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            const result = await getQueriedGamesAmerica("mario wonder");
            // Filter the results to only include Switch games
            const switchGames = result.filter(game => game.platformCode === "NINTENDO_SWITCH" && game.title.toLocaleLowerCase().includes("wonder"));
            setGames(switchGames);
        };
        fetchGames();
    }, []);

    return (
        <div>
            <h1>Nintendo eShop Games</h1>
            <ul>
                {games.map(game => (
                    <li key={game.id}>
                        {!process.env.NODE_ENV.includes('production') && <div>{console.log(game)}</div>}
                        {game.title}
                        <img src={game.boxart}/>    
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameList;