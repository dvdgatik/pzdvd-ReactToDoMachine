
function TodoCounter({total, completed}) {
    return (
        <h1>
            Has completado {completed} de {total} TODOS
        </h1>
    );
}


export { TodoCounter };

/*
- Components recieve props (properties) as Functions recieve parameters/arguments
- The props actually are an Object which has different properties
- There are two ways to declare props

as argument name
props
as destructuring object
{props_name, etc...}
*/