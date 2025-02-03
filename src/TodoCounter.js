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
1: inline styles by object or variable with objet
2: style sheets

strings for relative units
*/ 

/*
- Components recieve props (properties) as Functions recieve parameters/arguments
- The props actually are an Object which has different properties
- There are two ways to declare props

as argument name
props
as destructuring object
{props_name, etc...}


Las props se definen en los elementos (los que terminaran siendo etiquetas html)
las props no son lo mismo que atributos, pueden considerarse mas como parametros de una funcion
*/