import { Link } from "react-router-dom";
import { personalInfo } from "../constants/index";

export default function Footer() {
    return (
        <footer className="main-footer" data-aos="fade-up">
            <div className="footer-container">
                <div className="footer-info">
                    <h3>{personalInfo.name}</h3>
                    <p>Computer Science Student | Full Stack Developer</p>
                </div>
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </footer>
    )
}
