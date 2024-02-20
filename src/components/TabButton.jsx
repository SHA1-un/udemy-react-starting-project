export default function TabButton({children, isSelected, ...additionalProps}) {
    return (
        <li>
            <button className={isSelected ? 'active' : null} {...additionalProps}>
                {children}
            </button>
        </li>
    );
}