import './CreateToDoButton.css';

function CreateToDoButton() {
    return(
        <button onClick={(event)=>console.log('Le diste Click', event.target)} className='CreateToDoButton'> +</button>
    );
}

export { CreateToDoButton }