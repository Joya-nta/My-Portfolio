import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { personalInfo } from "../constants/index";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar" data-aos="fade-down">
            <div className="logo">{personalInfo.name}</div>
            <button className="nav-toggle" onClick={toggleMenu}>
                {isOpen ? "✖" : "☰"}
            </button>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <div className="theme-switch-wrapper">
                        <label className="theme-switch" htmlFor="checkbox">
                            <input type="checkbox" id="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                            <div className="slider round">
                                <span className="icon sun">☀️</span>
                                <span className="icon moon">🌙</span>
                            </div>
                        </label>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
