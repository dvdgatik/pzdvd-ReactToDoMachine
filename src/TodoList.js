function TodoList(props) {
    // To render children items of the component
    return (
        <ul>
            {props.children}
        </ul>
    );
}


export { TodoList };