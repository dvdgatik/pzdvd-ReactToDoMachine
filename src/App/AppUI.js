import { TodoCounter }  from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateToDoButton } from '../CreateToDoButton';

function AppUI({
    isLoading,
    hasError,
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
            {isLoading && <p>Cargando...</p>}
            {hasError && <p>Hubo un Error</p>}
            {searchValue !== '' && searchedTodos.length === 0  && (
                <p>No se encontraron conincidencias</p>
            )}
            {searchedTodos.length === 0 && searchValue === '' &&  !isLoading && (
                <p>No hay tareas pendientes, crea una : D</p>
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