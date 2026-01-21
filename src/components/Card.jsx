import Button from './Button'


export default function Card({ title, text, link, active }) {
    return (
        <div className={`card ${active ? 'card-active' : ''}`}>
            <h3>{title}</h3><br/>
            <p>20 Janeiro 2026 </p><br/>
            <p>{text}</p>
        </div>
    )
}

/*<Button link={link} text="Ver mais" />*/