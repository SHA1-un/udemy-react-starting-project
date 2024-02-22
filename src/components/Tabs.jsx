export default function Tabs({children, buttons, ButtonsContainer = 'menu'}) {
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}

// Note: ButtonsContainer must start with a capital letter since it must be rendered as a
// custom component. Using buttonsContainer in your JSX will not work since React will 
// look for a built in component with that name.