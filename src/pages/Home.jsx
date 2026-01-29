import { Link } from "react-router-dom"
import { personalInfo } from "../constants/index"
import Image from "../assets/Profile.jpeg"

export default function Home() {
    return (
        <>
            <title>{`${personalInfo.name || 'User'} | Full Stack Developer & Laravel Expert`}</title>
            <meta name="description" content={`Portfolio of ${personalInfo.name}, a Full Stack Developer specializing in Laravel, React, and modern web solutions. Explore my projects and technical expertise.`} />
            <header id="home" className="hero-section">
                <div className="container hero-flex">

                    <div className="hero-text" data-aos="fade-right">
                        <h1>Hi, I'm <span style={{ color: "var(--primary-color)" }}>{personalInfo.name}</span></h1>
                        <p>
                            Computer Science Student at <strong>KGEC</strong> |
                            Full Stack Developer specializing in <strong>Laravel & React</strong>
                        </p>
                        <div className="hero-btns">
                            <Link to="/projects" className="btn" data-aos="zoom-in">View My Work</Link>
                        </div>
                    </div>

                    <div className="hero-image-box" data-aos="zoom-in" data-aos-delay="200">
                        <img src={Image} alt="My Profile Picture" className="profile-img" />
                    </div>

                </div>
            </header>

            <section className="resume-section">
                <div className="resume-content" data-aos="fade-right">
                    <div className="resume-text">
                        <h3>My Professional Resume</h3>
                        <p>To learn more about my professional experience, education, and technical expertise, click the
                            button below to download my resume.</p>
                    </div>
                    <div className="resume-action">
                        <a href={`https://drive.google.com/uc?export=download&id=${personalInfo.cv}`} download
                            className="btn btn-resume" target="_blank" data-aos="zoom-in" data-aos-delay="500">
                            <span>Download CV</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="resume-icon">
                                <path
                                    d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
