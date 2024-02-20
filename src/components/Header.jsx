import reactAtomImage from '../assets/react-core-concepts.png';
import './Header.css';
const DESCRIPTIONS = ['Core', 'Fundamental', 'Crucial'];

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = DESCRIPTIONS[getRandomNumber(2)];
    return (
        <header>
            <img src={reactAtomImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}