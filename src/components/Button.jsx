import { Link } from 'react-router-dom'


export default function Button({ link, text }) {
    return (
        <Link className="btn" to={link}>{text}</Link>
    )
}