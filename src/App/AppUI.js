import { TodoCounter }  from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateToDoButton } from '../CreateToDoButton';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    handleCompleteTodo,
    handleDeleteTodo
})  {
    return(
        <>
        <TodoCounter completed={completedTodos} total={totalTodos}/>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        <TodoList>
            {!searchedTodos.length > 0 && (
            <p>No hay Todos</p>
            )}
            {searchedTodos.length > 0 && searchedTodos.map(todo => (
            <TodoItem 
            text={todo.text} 
            key={todo.id}
            completed={todo.completed}
            onComplete={handleCompleteTodo(todo.id, todo.completed)}
            onDelete={handleDeleteTodo(todo.id)}
            />
            ))}
        </TodoList>
        <CreateToDoButton/> 
        </>
    )
}

export { AppUI }