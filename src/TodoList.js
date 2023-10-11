function TodoList({children}) {
    // To render children items of the component
    return (
        <ul>
            {children}
        </ul>
    );
}

// React Automatically transform everything is into the component, in the property children

export { TodoList };