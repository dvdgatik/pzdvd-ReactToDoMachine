import React, {useState} from 'react'
import './TodoSearch.css'

/* Para utilizar el estado necesitamos importar react */
/* useState es un hook y una funcion 
El estado no solamente se consume(obtiene) tambien se actualiza

El estado (state) en React es un objeto que permite a los componentes manejar y reaccionar a cambios dinámicos en la interfaz de usuario. 
Es mutable, lo que significa que puede cambiar con el tiempo y provocar una re-renderización del componente.

nos permite definir un initial state estado inicial
cuanod empieze a renderizarse



Quizás te hayas preguntado cómo es que la función console.log se logra ejecutar cada vez que el valor del search cambia, 
si se supone que está declarada fuera del onChange.

Resulta que la función console.log se ejecuta cada vez que el componente se renderiza, 
no solo cuando se activa el evento onChange. 
Debido a que está declarada dentro del cuerpo de la función del componente TodoSearch, 
la cual se ejecuta cada vez que el componente se (re)renderiza. 
Entonces, cuando el usuario escribe algo en el search, se activa el evento onChange, 
se actualiza el estado searchValue con el nuevo valor
y se vuelve a renderizar el componente, 
lo que provoca que se ejecute la función console.log nuevamente con el nuevo valor de searchValue.


En React, renderizar significa procesar y dibujar la interfaz de usuario (UI) en la pantalla, basándose en el estado y las props del componente.

Cada vez que un componente se renderiza, React:

Ejecuta la función render() (en Class Components) o re-ejecuta la función del componente (en Function Components).
Crea o actualiza el Virtual DOM (una versión en memoria del DOM real).
Compara el nuevo Virtual DOM con el anterior (usando un algoritmo llamado "reconciliación").
Actualiza solo los cambios necesarios en el DOM real, mejorando el rendimiento.

*/
function TodoSearch({searchValue, setSearchValue}) {
  

    return (
        <input 
            className='TodoSearch'
            value={searchValue}
            placeholder="Cortar Cebolla"
            onChange={e=>{
                setSearchValue(e.target.value)
            }}
        />
    );
}

export { TodoSearch };