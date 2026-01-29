import Education from "../components/Education";
import Experience from "../components/Experience";
import SkillBox from "../components/SkillBox";
import { personalInfo } from "../constants";

export default function About() {
    return (
        <>
            <title>{`About Me | ${personalInfo.name || 'User'} - Background & Skills`}</title>
            <meta name="description" content={`Learn more about ${personalInfo.name}'s journey in software development, technical stack including PHP, Laravel, and React, and professional experience.`} />
            <Experience />
            <Education />
            <SkillBox />
        </>
    )
}
