import './CreateToDoButton.css';

// Capturar los eventos del usuario
// El onclick debe ser con camelCase onClick, todo lo que empieze en on va a ser un evento
// todo eso lo va a escuchar en un addEventListener (En un escuchador de eventos) para detetar la interaccion del usuario
//Los eventos debemos encapsularlos en una funcion
// en el navegador no existe el onClick
// React tradujo el "atributo" onclick a eventos de JavaScript
// en la funcion donde recibimos el escuchador de eventos podemos recibir el evento como parametro
// target: hace referencia al elemento html donde se origino el evento, devuelve el elemento html
// al obtener el evento recibiras un  objeto llamado SyntheticBaseEvent que guarda informacion del evento una de ellas target

function CreateToDoButton() {
    //Elementos de react
    return(
        <button onClick={(event)=>console.log('Le diste Click', event.target)} className='CreateToDoButton'> +</button>
    );
}

export { CreateToDoButton }