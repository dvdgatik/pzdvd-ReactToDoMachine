import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { TodosError } from "./TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "./TodosEmpty";
import { TodoConsumer } from "../TodoContext";

function AppUI() {
  return (
    <>
      <TodoCounter //completed={completedTodos} total={totalTodos}
      />
      <TodoSearch //searchValue={searchValue} setSearchValue={setSearchValue}
      />
      <TodoConsumer>
        {({
          isLoading,
          hasError,
          searchValue,
          searchedTodos,
          handleDeleteTodo,
          handleCompleteTodo,
        }) => (
          <TodoList>
            {isLoading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {hasError && <TodosError />}
            {searchValue !== "" && searchedTodos.length === 0 && <EmptyTodos />}
            {searchedTodos.length === 0 && searchValue === "" && !isLoading && (
              <p>No hay tareas pendientes, crea una : D</p>
            )}
            {searchedTodos.length > 0 &&
              searchedTodos.map((todo) => (
                <TodoItem
                  text={todo.text}
                  key={todo.id}
                  id={todo.id}
                  completed={todo.completed}
                  onComplete={handleCompleteTodo(todo.id, todo.completed)}
                  onDelete={handleDeleteTodo(todo.id)}
                />
              ))}
          </TodoList>
        )}
      </TodoConsumer>
      <CreateToDoButton />
    </>
  );
}

export { AppUI };
