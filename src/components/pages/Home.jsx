import { useEffect, useState } from "react";
import Header from "../Header";

const Home = () => {
    // const [theme, setTheme] = useState('light');

    // const toggleTheme = () => {
    //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    //     console.log("hit");
    // };

    const [theme, setTheme] = useState('light');
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
        </div>
    );
};

export default Home;