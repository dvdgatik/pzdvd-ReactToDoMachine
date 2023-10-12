import './TodoCounter.css'
function TodoCounter({total, completed}) {
    return (
        <h1 className='TodoCounter'>
            Has completado <span>{completed}</span> de <span>{total}</span> TODOS
        </h1>
    );
}


export { TodoCounter };

/* There are two way to add styles in React:
1: inline styles
2: style sheets
*/ 

/*
- Components recieve props (properties) as Functions recieve parameters/arguments
- The props actually are an Object which has different properties
- There are two ways to declare props

as argument name
props
as destructuring object
{props_name, etc...}
*/