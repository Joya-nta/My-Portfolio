
export default function Card({ h3, h4, p, p_date, ul }) {
    return (
        <div className="exp-card" data-aos="fade-up">
            <h3>{h3}</h3>
            <h4>{h4}</h4>
            {p_date && <p className="date">{p_date}</p>}
            {p && <p className="date">{p}</p>}
            {ul && <ul>
                {ul.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>}
        </div>
    )
}
