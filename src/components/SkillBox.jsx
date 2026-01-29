import { skills } from "../constants/index";
import Skill from "./Skill";

export default function SkillBox() {
    return (
        <section className="container" data-aos="fade-up">
            <h2 className="section-title">My Technical Arsenal</h2>

            <div className="skills-wrapper">
                {skills.map((skill, i) => (
                    <Skill
                        key={i}
                        icon={skill.icon}
                        name={skill.name}
                        skills={skill.skills}
                    />
                ))}
            </div>
        </section>
    )
}
