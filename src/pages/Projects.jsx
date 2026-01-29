import { Link } from 'react-router-dom';
import { personalInfo, projects } from "../constants";

export default function Projects() {
    return (
        <>
            <title>{`Projects | ${personalInfo.name} - Portfolio of Web Applications`}</title>
            <meta name="description" content={`Browse a collection of web development projects by ${personalInfo.name}, featuring sustainable marketplaces, custom OTP systems, and real-time apps.`} />
            <section className="container" data-aos="fade-up">
                <h2 className="section-title">Featured Projects</h2>
                <div className="table-responsive">
                    <table className="project-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Project Name</th>
                                <th>Built with</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project, i) => (
                                <tr key={i}>
                                    <td>{project.year}</td>
                                    <td>{project.name}</td>
                                    <td>{project.skills.map((item, j) => (
                                        <span key={j}>{item}, </span>
                                    ))}</td>
                                    {project.webLink ?
                                        <td><a href={project.webLink} className="table-link">Live Link</a></td> :
                                        <td><a href="#" className="table-link" onClick={(e) => e.preventDefault()} data-tooltip="Coming Soon: This project is not deployed yet!">
                                            Live Link
                                        </a></td>
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
