
export default function Skill({ icon, name, skills }) {
    return (
        <div className="skill-category-box">
            <h3><i className="icon">{icon}</i> {name}</h3>

            {skills.map((skill, i) => (
                <div className="skill-box" key={i}>
                    <div className="skill-info"><span>{skill.name}</span><span>{skill.value}%</span></div>
                    <div
                        className="progress-line"
                        role="progressbar"
                        aria-valuenow={skill.value}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        <span style={{ width: `${skill.value}%` }}></span>
                    </div>
                </div>
            ))}
        </div>
    )
}
