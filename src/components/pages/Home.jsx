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
            <div className="main">
            <h1>Mario Games</h1>
            <GameList searchTerm={"mario"} filterType={null} />
            <h1>Featured</h1>
            {/* <GameList searchTerm={null} filterType={"Featured"} /> */}
            <h1>Latest</h1>
            {/* <GameList searchTerm={null} filterType={"Latest"} /> */}
            <h1>On Sale</h1>
            {/* <GameList searchTerm={null} filterType={"OnSale"} /> */}
            </div>
            
        </div>
    );
};

export default Home;