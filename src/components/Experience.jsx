import { experiences } from "../constants/index";
import Card from "./Card";

export default function Experience() {
    return (
        <section className="container">
            <h2 className="section-title" data-aos="fade-down">Experience & Internships</h2>
            {experiences.map((experience, i) => (
                <Card
                    key={i}
                    h3={experience.type}
                    h4={experience.companyName}
                    p_date={experience.typeDetails}
                    {...{ [experience.textType]: experience.someText }}
                />
            ))}
        </section>
    )
}
