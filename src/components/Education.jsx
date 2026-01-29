import { educations } from "../constants/index";
import Card from "./Card";

export default function Education() {
    return (
        <section className="container">
            <h2 className="section-title" data-aos="fade-down">Education</h2>
            {educations.map((education, i) => (
                <Card
                    key={i}
                    h3={education.courceName}
                    h4={<>{education.collegeName} {education.prevName && <><br /> {education.prevName}</>}</>}
                    p={education.year}
                />
            ))}
        </section>
    )
}
