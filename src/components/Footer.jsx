import { Link } from "react-router-dom";
import githubImage from "../assets/github.svg";
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-top">
                <img src={githubImage} alt="GitHub Logo" />
                <a href="https://github.com/rjarrin/ns-price-tracker" target="_blank" rel="noopener noreferrer">Developed by rjarrin</a>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} NS Price Tracker by rjarrin. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;