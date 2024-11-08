import CardWidget from "../CartWidget/CardWidget";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Films</li>
                <li>Journal</li>
                <li>Tickets</li>
                
            </ul>
            <CardWidget />
        </nav>
    )
} 