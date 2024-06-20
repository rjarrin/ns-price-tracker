import { useEffect, useState } from "react";
import { getGamesAmerica } from "nintendo-switch-eshop";

const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            const result = await getGamesAmerica();
            setGames(result);
        };
        fetchGames();
    }, []);

    return (
        <div>
            <h1>Nintendo eShop Games</h1>
            <ul>
                {games.map(game => (
                    <li key={game.id}>{game.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default GameList;