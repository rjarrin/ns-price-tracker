import { useEffect, useState } from "react";
import Header from "../Header";
import GameList from '../GameList';

const Home = () => {
    const [theme, setTheme] = useState('dark');
    
    useEffect(() => {
        document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        console.log('hit');
    };

    return (
        <div>
            <Header toggleTheme={toggleTheme} />
            <GameList />
        </div>
    );
};

export default Home;